from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


def findStringCvs(df, input, column):
    # Preprocess text
    tfidf_vectorizer = TfidfVectorizer()
    tfidf_matrix = tfidf_vectorizer.fit_transform(df[column])

    # User input
    user_input = input
    # Vectorize the user input
    user_input_vector = tfidf_vectorizer.transform([user_input])

    # Calculate cosine similarity
    similarities = cosine_similarity(user_input_vector, tfidf_matrix)

    # Find the index of the most similar row (row number)
    most_similar_index = similarities.argmax()
    row = df.iloc[[most_similar_index]]
    return row[column].values[0]
