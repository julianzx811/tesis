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
        df = df.drop_duplicates(subset="Book-Title")

        sample_size = 50
        df = df.sample(n=sample_size, replace=False, random_state=490)

        df = df.reset_index()
        df = df.drop("index", axis=1)

        df["Book-Author"] = df["Book-Author"].apply(self.methods.clean_text)

        df["Book-Title"] = df["Book-Title"].str.lower()
        df["Publisher"] = df["Publisher"].str.lower()

        df2 = df.drop(
            [
                "ISBN",
                "Image-URL-S",
                "Image-URL-M",
                "Image-URL-L",
                "Year-Of-Publication",
            ],
            axis=1,
        )  # so we get the 3 variables “Book-Title,” “Book-Author,” and “Publisher”

        df2["data"] = df2[df2.columns[1:]].apply(
            lambda x: " ".join(x.dropna().astype(str)), axis=1
        )

        vectorizer = CountVectorizer()
        vectorized = vectorizer.fit_transform(df2["data"])
        similarities = cosine_similarity(vectorized)

        df = pd.DataFrame(
            similarities, columns=df["Book-Title"], index=df["Book-Title"]
        ).reset_index()

        input_book = self.methods.findStringCvs(df, input, "Book-Title")
        recommendations = pd.DataFrame(df.nlargest(11, input_book)["Book-Title"])
        recommendations = recommendations[recommendations["Book-Title"] != input_book]
        return recommendations

    def post(self, request):
        try:
            estring = request.query_params["pelicula"]
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
            df["Title"].astype(str)
            + " "
            + df["Runtime (Minutes)"].astype(str)
            + " "
            + df["Genre"]
            + " "
            + df["Director"]
            + " "
            + df["Rating"].astype(str)
            + " "
            + df["Votes"].astype(str)
            + df["Actors"].astype(str)
        )
        df["content"] = df["content"].fillna("")

        vectorizer = CountVectorizer()
        bow = vectorizer.fit_transform(df["content"])

        tfidf_transformer = TfidfTransformer()
        tfidf = tfidf_transformer.fit_transform(bow)

        lsa = TruncatedSVD(n_components=100, algorithm="arpack")
        lsa.fit(tfidf)

        user_movie = input
        user_movie = self.methods.findStringCvs(df, user_movie, "Title")
        movie_index = df[df["Title"] == user_movie].index[0]

        similarity_scores = cosine_similarity(tfidf[movie_index], tfidf)

        similar_movies = list(enumerate(similarity_scores[0]))
        sorted_similar_movies = sorted(
            similar_movies, key=lambda x: x[1], reverse=True
        )[1:20]

        books = []
        for i, score in sorted_similar_movies:
            books.append("{}: {}".format(i, df.loc[i, "Title"]))
        return books

    def post(self, request):
        try:
            estring = request.query_params["libro"]
            df = pd.DataFrame.from_records(request.data)
            response = self.lsaModel(df, estring)
        except Exception as e:
            response = e
        return Response(response)


class WordtwoVec(APIView):
    methods = usefullMethods()

    def wordtwovec(self, df, input):
        # Combine movie name and tags into a single string
        df["content"] = (
            df["Title"].astype(str)
            + " "
            + df["Runtime (Minutes)"].astype(str)
            + " "
            + df["Genre"]
            + " "
            + df["Director"]
            + " "
            + df["Rating"].astype(str)
            + " "
            + df["Votes"].astype(str)
            + df["Actors"].astype(str)
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
        user_movie = self.methods.findStringCvs(df, user_movie, "Title")
        movie_index = df[df["Title"] == user_movie].index[0]

        user_movie_vector = w2v_feature_array[movie_index].reshape(1, -1)
        similarity_scores = cosine_similarity(user_movie_vector, w2v_feature_array)

        similar_movies = list(enumerate(similarity_scores[0]))
        sorted_similar_movies = sorted(
            similar_movies, key=lambda x: x[1], reverse=True
        )[1:20]

        books = []
        for i, score in sorted_similar_movies:
            books.append("{}: {}".format(i, df.loc[i, "Title"]))
        return books

    def post(self, request):
        try:
            estring = request.query_params["libro"]
            df = pd.DataFrame.from_records(request.data)

            response = self.wordtwovec(df, estring)
        except Exception as e:
            response = e
        return Response(response)


class Products(APIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        try:
            minimo = request.query_params["minimo"]
            maximo = request.query_params["maximo"]
            productos = Producto.objects.all()[int(minimo) : int(maximo)]
            productosInfo = Producto_info.objects.all()[int(minimo) : int(maximo)]
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
