import numpy as np
import pandas as pd
from gensim.models import Word2Vec
from gensim.utils import simple_preprocess
from sklearn.metrics.pairwise import cosine_similarity

# Import the imdb movies dataset
df = pd.read_csv("IMDB-Movie-Data.csv")
print(df)
for i in df.columns:
    print(i)
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

# Tokenize content for Word2Vec
df["tokenized_content"] = df["content"].apply(simple_preprocess)
# Initialize the Word2Vec model (without training)
model = Word2Vec(vector_size=100, window=5, min_count=1, workers=4)

# Build the vocabulary
model.build_vocab(df["tokenized_content"])

# Train the model
model.train(df["tokenized_content"], total_examples=model.corpus_count, epochs=10)


# Function to average word vectors for a text
def average_word_vectors(words, model, vocabulary, num_features):
    feature_vector = np.zeros((num_features,), dtype="float64")
    nwords = 0.0

    for word in words:
        if word in vocabulary:
            nwords = nwords + 1.0
            feature_vector = np.add(feature_vector, model.wv[word])

    if nwords:
        feature_vector = np.divide(feature_vector, nwords)

    return feature_vector


# Function to compute average word vectors for all movies
def averaged_word_vectorizer(corpus, model, num_features):
    vocabulary = set(model.wv.index_to_key)
    features = [
        average_word_vectors(tokenized_sentence, model, vocabulary, num_features)
        for tokenized_sentence in corpus
    ]
    return np.array(features)


# Compute average word vectors for all movies
w2v_feature_array = averaged_word_vectorizer(
    corpus=df["tokenized_content"], model=model, num_features=100
)

# Get the user input
user_movie = input("Enter a movie title: ")

# Find the index of the user movie
movie_index = df[df["Title"] == user_movie].index[0]

# Compute the cosine similarities between the user movie and all other movies
user_movie_vector = w2v_feature_array[movie_index].reshape(1, -1)
similarity_scores = cosine_similarity(user_movie_vector, w2v_feature_array)

# Get the top 10 most similar movies
similar_movies = list(enumerate(similarity_scores[0]))
sorted_similar_movies = sorted(similar_movies, key=lambda x: x[1], reverse=True)[1:20]

# Print the top 10 similar movies
for i, score in sorted_similar_movies:
    print("{}: {}".format(i, df.loc[i, "Title"]))
