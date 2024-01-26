import pandas as pd
pd.options.mode.chained_assignment = None  # default='warn'
from AImodel.repositories.product_repository import ProductsRepository
from AImodel.services.usefullMethods_service import usefullMethods
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity


class CosineSimilarity:
    products = ProductsRepository()
    methods = usefullMethods()

    def Cosine_Similarity(self, df, input):
        # productos = self.products.get_likely_products(input)
        # df2 = pd.DataFrame(productos)
        # df = pd.concat([df, df2], ignore_index=True)
        # df = df.drop_duplicates(subset="ProductName")

        sample_size = 50
        df = df.sample(n=sample_size, replace=True, random_state=490)

        df = df.reset_index()
        df = df.drop("index", axis=1)

        df["ProductName"] = df["ProductName"].apply(self.methods.clean_text)

        df["Descripcion"] = df["Descripcion"].str.lower()
        df["categoria"] = df["categoria"].str.lower()

        df2 = df[["ProductName", "Descripcion", "categoria"]]
        print("llego1")

        # Combine the selected columns into a new 'data' column
        df2["data"] = df2.apply(lambda x: " ".join(x.dropna().astype(str)), axis=1)
        print("llego2")
        vectorizer = CountVectorizer()
        print("llego3")
        vectorized = vectorizer.fit_transform(df2["data"])
        print("llego4")
        similarities = cosine_similarity(vectorized)

        df_similarities = pd.DataFrame(
            similarities, columns=df["ProductName"], index=df["ProductName"]
        ).reset_index()
        print("llego5")
        input_book = self.methods.findStringCvs(df_similarities, input, "ProductName")
        print("llego6")
        # Get recommendations as a DataFrame including all columns
        recommendations = df[
            df["ProductName"].isin(
                df_similarities.nlargest(11, input_book)["ProductName"]
            )
        ]
        print("llego7")
        # Filter out the input product
        recommendations = recommendations[recommendations["ProductName"] != input]

        objetos = []

        # Iterar a través de las filas del DataFrame recommendations
        for index, row in recommendations.iterrows():
            # Crear un objeto para cada fila y establecer los atributos correspondientes
            objeto = {
                "precio": row["precio"],
                "ProductName": row["ProductName"],
                "categoria": row["categoria"],
                "link": row["link"],
                "Descripcion": row["Descripcion"],
                "categoria": row["categoria"],
                "Imagen": row["Imagen"],
                "tienda": row["tienda"],
            }
            # Agregar el objeto a la lista de objetos
            objetos.append(objeto)

        return objetos

    def post(self, request):
        estring = request.query_params["producto"]
        numpyARR = self.products.list_productos(estring)
        df = pd.DataFrame.from_records(numpyARR)
        print(df)
        return self.Cosine_Similarity(df, estring)