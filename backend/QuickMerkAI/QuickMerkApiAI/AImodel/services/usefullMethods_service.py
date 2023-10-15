import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


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
