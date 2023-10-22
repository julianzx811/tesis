from AImodel.repositories.product_repository import ProductsRepository


class ProductService:
    def __init__(self):
        self.repository = ProductsRepository()

    def get_likely_products(self, request):
        producto = request.query_params["producto"]
        return self.repository.get_likely_products(producto)

    def list_productos(self, request):
        minimo = request.query_params["minimo"]
        maximo = request.query_params["maximo"]

        return self.repository.list_productos(minimo, maximo)

    def GetProductsCategory(self, request, categoria_id):
        minimo = request.query_params["minimo"]
        maximo = request.query_params["maximo"]
        return self.repository.GetProductsCategory(categoria_id, minimo, maximo)

    def retrieve_producto(self, product_id):
        return self.repository.retrieve_producto(product_id)

    def delete(self, product_id):
        return self.repository.delete(product_id)

    def patch(self, request, product_id):
        precio = request.data["precio"]
        Disponibilidad = request.data["Disponibilidad"]
        link = request.data["link"]
        Imagen = request.data["Imagen"]
        Descripcion = request.data["Descripcion"]
        ProductName = request.data["ProductName"]
        return self.repository.patch(
            product_id, precio, Disponibilidad, Descripcion, link, Imagen, ProductName
        )

    def post(self, request):
        return self.repository.post(request)

    def get_categories(self):
        return self.repository.get_categories()
