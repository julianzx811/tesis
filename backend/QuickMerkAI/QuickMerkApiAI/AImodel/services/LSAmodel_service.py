import pandas as pd
from AImodel.repositories.product_repository import ProductsRepository
from AImodel.services.usefullMethods_service import usefullMethods
from sklearn.decomposition import TruncatedSVD
from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
from sklearn.metrics.pairwise import cosine_similarity


class LSAmodel:
    def __init__(self):
        self.repository = ProductsRepository()

    methods = usefullMethods()

    def lsaModel(self, df, input):
        productos = self.repository.get_likely_products(input)
        df2 = pd.DataFrame(productos)
        df = pd.concat([df, df2], ignore_index=True)
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
        for row_index, score in sorted_similar_movies:
            print(score)
            product_info = {}
            product_info["ProductName"] = df.iloc[row_index]["ProductName"]
            product_info["Descripcion"] = df.iloc[row_index]["Descripcion"]
            product_info["categoria"] = df.iloc[row_index]["categoria"]
            product_info["Disponibilidad"] = df.iloc[row_index]["Disponibilidad"]
            product_info["link"] = df.iloc[row_index]["link"]
            product_info["Imagen"] = df.iloc[row_index]["Imagen"]
            product_info["precio"] = df.iloc[row_index]["precio"]

            products.append(product_info)
        return products

    def post(self, request):
        estring = request.query_params["producto"]
        df = pd.DataFrame.from_records(request.data)
        return self.lsaModel(df, estring)
