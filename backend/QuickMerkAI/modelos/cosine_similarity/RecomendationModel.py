import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

df = pd.read_csv('BX-Books.csv',on_bad_lines="skip",encoding='latin-1',sep=';')

#print(df.head())

#print(df.info())

#cleaning data 

#print(df.duplicated(subset='Book-Title').sum())# 29,225
df = df.drop_duplicates(subset='Book-Title')
#confirm that duplicates where eliminated 
#print(df.duplicated(subset='Book-Title').sum())

#sampling 15k rows to not run out of memory
sample_size = 15000
df = df.sample(n=sample_size, replace=False, random_state=490)

df = df.reset_index()
df = df.drop('index',axis=1)

#print(df.head())

#data cleaning 
def clean_text(author):
    result = str(author).lower()
    return(result.replace(' ',''))

df['Book-Author'] = df['Book-Author'].apply(clean_text)

#converting the book title and publisher to lowercase
df['Book-Title'] = df['Book-Title'].str.lower()
df['Publisher'] = df['Publisher'].str.lower()

#combining these 3 columns to create a single variable
# combine all strings:
df2 = df.drop(['ISBN','Image-URL-S','Image-URL-M','Image-URL-L','Year-Of-Publication'],axis=1)#so we get the 3 variables “Book-Title,” “Book-Author,” and “Publisher”

df2['data'] = df2[df2.columns[1:]].apply(
    lambda x: ' '.join(x.dropna().astype(str)),
    axis=1
)

#print("caracteristicas",df2['data'].head())

#CountVectorizer the dataframe
vectorizer = CountVectorizer()
vectorized = vectorizer.fit_transform(df2['data'])
#print("vectorizer",vectorized) #sparse matrix with numeric representation of strings

#we use cosine similarity to find the resemblance between each bag-of-words
similarities = cosine_similarity(vectorized)
#print("matriz de similaridades",similarities)

df = pd.DataFrame(similarities, columns=df['Book-Title'], index=df['Book-Title']).reset_index()

df.head()

#user recomendations!
#input_book = 'far beyond the stars (star trek deep space nine)'
input_book = 'star'
print("libro",input_book)
recommendations = pd.DataFrame(df.nlargest(11,input_book)['Book-Title'])
recommendations = recommendations[recommendations['Book-Title']!=input_book]
print("top de recomendacion",recommendations)
