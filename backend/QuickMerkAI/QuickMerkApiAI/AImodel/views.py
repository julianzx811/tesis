import json

import numpy as np
import pandas as pd
from AImodel.serializers import UserSerializer
from django.core import serializers
from django.forms.models import model_to_dict
from django.http import JsonResponse
from gensim.models import Word2Vec
from gensim.utils import simple_preprocess
from rest_framework import authentication, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from sklearn.decomposition import TruncatedSVD
from sklearn.feature_extraction.text import (CountVectorizer, TfidfTransformer,
                                             TfidfVectorizer)
from sklearn.metrics.pairwise import cosine_similarity

from .mappers import ProductInfoToDictionary, ProductToDictionary
from .models import (Empresa, Producto, Producto_categoria, Producto_info,
                     Tienda)


class usefullMethods:
    def findStringCvs(self, df, input, column):
        tfidf_vectorizer = TfidfVectorizer()
        tfidf_matrix = tfidf_vectorizer.fit_transform(df[column])

        user_input = input
        user_input_vector = tfidf_vectorizer.transform([user_input])

        similarities = cosine_similarity(user_input_vector, tfidf_matrix)

        most_similar_index = similarities.argmax()
        row = df.iloc[[most_similar_index]]
        return row[column].values[0]

    def clean_text(self, author):
        result = str(author).lower()
        return result.replace(" ", "")

    def average_word_vectors(self, words, model, vocabulary, num_features):
        feature_vector = np.zeros((num_features,), dtype="float64")
        nwords = 0.0

        for word in words:
            if word in vocabulary:
                nwords = nwords + 1.0
                feature_vector = np.add(feature_vector, model.wv[word])

            if nwords:
                feature_vector = np.divide(feature_vector, nwords)

        return feature_vector

    def averaged_word_vectorizer(self, corpus, model, num_features):
        vocabulary = set(model.wv.index_to_key)
        features = [
            self.average_word_vectors(
                tokenized_sentence, model, vocabulary, num_features
            )
            for tokenized_sentence in corpus
        ]
        return np.array(features)


class CosineSimilarity(APIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    methods = usefullMethods()

    def Cosine_Similarity(self, df, input):
        df = df.drop_duplicates(subset="ProductName")

        sample_size = 50
        df = df.sample(n=sample_size, replace=False, random_state=490)

        df = df.reset_index()
        df = df.drop("index", axis=1)

        df["ProductName"] = df["ProductName"].apply(self.methods.clean_text)

        df["Descripcion"] = df["Descripcion"].str.lower()
        df["categoria"] = df["categoria"].str.lower()

        df2 = df[["ProductName", "Descripcion", "categoria"]]

        # Combine the selected columns into a new 'data' column
        df2["data"] = df2.apply(lambda x: " ".join(x.dropna().astype(str)), axis=1)
        vectorizer = CountVectorizer()
        vectorized = vectorizer.fit_transform(df2["data"])
        similarities = cosine_similarity(vectorized)

        df_similarities = pd.DataFrame(
            similarities, columns=df["ProductName"], index=df["ProductName"]
        ).reset_index()

        input_book = self.methods.findStringCvs(df_similarities, input, "ProductName")

        # Get recommendations as a DataFrame including all columns
        recommendations = df[
            df["ProductName"].isin(
                df_similarities.nlargest(11, input_book)["ProductName"]
            )
        ]

        # Filter out the input product
        recommendations = recommendations[recommendations["ProductName"] != input]

        objetos = []

        # Iterar a través de las filas del DataFrame recommendations
        for index, row in recommendations.iterrows():
            # Crear un objeto para cada fila y establecer los atributos correspondientes
            objeto = {
                "ISBN": row["ISBN"],
                "ProductName": row["ProductName"],
                "categoria": row["categoria"],
                "Year-Of-Publication": row["Year-Of-Publication"],
                "Descripcion": row["Descripcion"],
                # Agregar otros atributos aquí según sea necesario
            }
            # Agregar el objeto a la lista de objetos
            objetos.append(objeto)

        return objetos

    def post(self, request):
        try:
            estring = request.query_params["producto"]
            df = pd.DataFrame.from_records(request.data)
            return Response(self.Cosine_Similarity(df, estring))
        except Exception as e:
            return Response(
                str(e),
                status=status.HTTP_404_NOT_FOUND,
                template_name=None,
                content_type=None,
            )


class LSAmodel(APIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    methods = usefullMethods()

    def lsaModel(self, df, input):
        df["content"] = (
            df["ProductName"].astype(str)
            + " "
            + df["categoria"].astype(str)
            + " "
            + df["Descripcion"].astype(str)
        )
        df["content"] = df["content"].fillna("")

        vectorizer = CountVectorizer()
        bow = vectorizer.fit_transform(df["content"])

        tfidf_transformer = TfidfTransformer()
        tfidf = tfidf_transformer.fit_transform(bow)

        lsa = TruncatedSVD(n_components=100, algorithm="arpack")
        lsa.fit(tfidf)

        user_movie = input
        user_movie = self.methods.findStringCvs(df, user_movie, "ProductName")
        movie_index = df[df["ProductName"] == user_movie].index[0]

        similarity_scores = cosine_similarity(tfidf[movie_index], tfidf)

        similar_movies = list(enumerate(similarity_scores[0]))
        sorted_similar_movies = sorted(
            similar_movies, key=lambda x: x[1], reverse=True
        )[1:20]
        products = []
        columnas = ["ProductName", "Descripcion", "categoria"]
        for row_index, score in sorted_similar_movies:
            product_info = df.iloc[row_index][columnas].fillna("")
            products.append(product_info)
        return products

    def post(self, request):
        try:
            estring = request.query_params["producto"]
            df = pd.DataFrame.from_records(request.data)
            return Response(self.lsaModel(df, estring))
        except Exception as e:
            print(e)
            return Response(str(e))


class WordtwoVec(APIView):
    methods = usefullMethods()

    def wordtwovec(self, df, input):
        # Combine movie name and tags into a single string
        df["content"] = (
            df["ProductName"].astype(str)
            + " "
            + df["categoria"].astype(str)
            + " "
            + df["Descripcion"].astype(str)
        )
        df["content"] = df["content"].fillna("")

        df["tokenized_content"] = df["content"].apply(simple_preprocess)
        model = Word2Vec(vector_size=100, window=5, min_count=1, workers=4)

        model.build_vocab(df["tokenized_content"])

        model.train(
            df["tokenized_content"], total_examples=model.corpus_count, epochs=10
        )

        w2v_feature_array = self.methods.averaged_word_vectorizer(
            corpus=df["tokenized_content"], model=model, num_features=100
        )

        user_movie = input
        user_movie = self.methods.findStringCvs(df, user_movie, "ProductName")
        movie_index = df[df["ProductName"] == user_movie].index[0]

        user_movie_vector = w2v_feature_array[movie_index].reshape(1, -1)
        similarity_scores = cosine_similarity(user_movie_vector, w2v_feature_array)

        similar_movies = list(enumerate(similarity_scores[0]))
        sorted_similar_movies = sorted(
            similar_movies, key=lambda x: x[1], reverse=True
        )[1:20]
        products = []
        columnas = ["ProductName", "Descripcion", "categoria"]
        for row_index, score in sorted_similar_movies:
            product_info = df.iloc[row_index][columnas].fillna("")
            products.append(product_info)

        return products

    def post(self, request):
        try:
            estring = request.query_params["producto"]
            df = pd.DataFrame.from_records(request.data)
            return Response(self.wordtwovec(df, estring))
        except Exception as e:
            return Response(str(e))


class Products(APIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, product_id):
        try:
            producto = Producto.objects.get(pk=product_id)
            producto = model_to_dict(producto)
            productoInfo = Producto_info.objects.get(pk=int(producto["info"]))
            producto_info = model_to_dict(productoInfo)
            producto.update(producto_info)
            return Response(producto, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                str(e),
                status=status.HTTP_404_NOT_FOUND,
                template_name=None,
                content_type=None,
            )

    def delete(self, request, product_id):
        try:
            producto = Producto.objects.get(pk=product_id)
            productobj = model_to_dict(producto)
            productoInfo = Producto_info.objects.get(pk=int(productobj["info"]))
            producto_info = model_to_dict(productoInfo)
            productobj.update(producto_info)

            productoInfo.delete()
            producto.delete()

            return Response(productobj, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                str(e),
                status=status.HTTP_404_NOT_FOUND,
                template_name=None,
                content_type=None,
            )

    def patch(self, request, product_id):
        try:
            producto = Producto.objects.get(pk=product_id)
            infoid = model_to_dict(producto)
            productoInfo = Producto_info.objects.get(pk=int(infoid["info"]))
            productoInfo.precio = request.data["precio"]
            productoInfo.Disponibilidad = request.data["Disponibilidad"]
            productoInfo.Imagen = request.data["Imagen"]
            productoInfo.Descripcion = request.data["Descripcion"]
            productoInfo.link = request.data["link"]
            productoInfo.save()

            producto.ProductName = request.data["ProductName"]
            producto.save()
            return Response(infoid, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                str(e),
                status=status.HTTP_404_NOT_FOUND,
                template_name=None,
                content_type=None,
            )


class Product(APIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        try:
            minimo = request.query_params["minimo"]
            maximo = request.query_params["maximo"]
            # productos = Producto.objects.all()[int(minimo) : int(maximo)]
            # productosInfo = Producto_info.objects.all()[int(minimo) : int(maximo)]
            productos = Producto.objects.filter(
                ProductId__range=(int(minimo), int(maximo))
            ).only("ProductId", "ProductName", "info", "tiendaId")
            productosInfo = Producto_info.objects.filter(
                ProductInfoId__range=(int(minimo), int(maximo))
            ).only(
                "ProductInfoId",
                "precio",
                "Disponibilidad",
                "Imagen",
                "Descripcion",
                "categoria",
                "link",
            )
            Productos = []
            for i in range(len(productos)):
                currentProducto = model_to_dict(productos[i])
                currentProductoInfo = model_to_dict(productosInfo[i])
                currentProducto.update(currentProductoInfo)
                Productos.append(currentProducto)

            return JsonResponse(Productos, safe=False)
        except Exception as e:
            return Response(
                str(e),
                status=status.HTTP_404_NOT_FOUND,
                template_name=None,
                content_type=None,
            )

    def post(self, request):
        try:
            for producto in request.data:
                productinfoId = Producto_categoria.objects.get(
                    pk=int(producto["categoria"])
                )
                productinfo = Producto_info(
                    precio=producto["precio"],
                    Disponibilidad=producto["Disponibilidad"],
                    Imagen=producto["Imagen"],
                    Descripcion=producto["Descripcion"],
                    categoria=productinfoId,
                    link=producto["link"],
                )
                productinfo.save()

                producto = Producto(
                    ProductName=producto["ProductName"],
                    info=productinfo,
                )
                producto.save()
                return Response(status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response(
                str(e),
                status=status.HTTP_404_NOT_FOUND,
                template_name=None,
                content_type=None,
            )
