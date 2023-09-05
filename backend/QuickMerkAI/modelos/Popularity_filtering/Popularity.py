import warnings

import numpy as np
import pandas as pd

warnings.filterwarnings("ignore")

books = pd.read_csv("Books.csv")
ratings = pd.read_csv("Ratings.csv")
users = pd.read_csv("Users.csv")

book_ratings = books.merge(ratings, on="ISBN")
user_rating = users.merge(ratings, on="User-ID")

book_num_ratings = (
    book_ratings.groupby("Book-Title")["Book-Rating"]
    .count()
    .reset_index()
    .rename(columns={"Book-Rating": "Num-Ratings"})
)
book_avg_ratings = (
    book_ratings.groupby("Book-Title")["Book-Rating"]
    .mean()
    .reset_index()
    .rename(columns={"Book-Rating": "Avg-Ratings"})
)
final_rating = book_num_ratings.merge(book_avg_ratings, on="Book-Title")

popular_books = (
    final_rating[final_rating["Num-Ratings"] > 250]
    .sort_values(by="Avg-Ratings", ascending=False)
    .reset_index(drop=True)
    .head(50)
)

print(popular_books.head())
