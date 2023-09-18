import io

import pandas as pd
from QuickMerkAPI.AImodel.serializers import UserSerializer
from rest_framework import authentication, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


class CosineSimilarity(APIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

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

    def Cosine_Similarity(self, df, input):
        df = df.drop_duplicates(subset="Book-Title")

        sample_size = 50
        df = df.sample(n=sample_size, replace=False, random_state=490)

        df = df.reset_index()
        df = df.drop("index", axis=1)

        df["Book-Author"] = df["Book-Author"].apply(self.clean_text)

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

        input_book = self.findStringCvs(df, input, "Book-Title")
        recommendations = pd.DataFrame(df.nlargest(11, input_book)["Book-Title"])
        recommendations = recommendations[recommendations["Book-Title"] != input_book]
        return recommendations

    def post(self, request):
        estring = request.query_params["pelicula"]
        df = pd.DataFrame.from_records(request.data)
        for col in df.columns:
            print(col)
        try:
            return Response(self.Cosine_Similarity(df, estring))
        except Exception as error:
            return Response(str(error))
