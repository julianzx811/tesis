import numpy as np
import pandas as pd
from sklearn.decomposition import TruncatedSVD
from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
from sklearn.metrics.pairwise import cosine_similarity

# Import the imdb movies dataset
df = pd.read_csv("IMDB-Movie-Data.csv")
print(df)
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

# Create bag of words
vectorizer = CountVectorizer()
bow = vectorizer.fit_transform(df["content"])

# Convert bag of words to TF-IDF
tfidf_transformer = TfidfTransformer()
tfidf = tfidf_transformer.fit_transform(bow)

# Apply LSA or LSI
lsa = TruncatedSVD(n_components=100, algorithm="arpack")
lsa.fit(tfidf)

# Get the user input
user_movie = input("Enter a movie title: ")

# Find the index of the user movie
movie_index = df[df["Title"] == user_movie].index[0]

# Compute the cosine similarities between the user movie and all other movies
similarity_scores = cosine_similarity(tfidf[movie_index], tfidf)

# Get the top 10 most similar movies
similar_movies = list(enumerate(similarity_scores[0]))
sorted_similar_movies = sorted(similar_movies, key=lambda x: x[1], reverse=True)[1:20]

# Print the top 10 similar movies
for i, score in sorted_similar_movies:
    print("{}: {}".format(i, df.loc[i, "Title"]))
