from AImodel.repositories.product_repository import ProductsRepository


class ProductService:
    def __init__(self):
        self.repository = ProductsRepository()

    def get_likely_products(self, producto):
        return self.repository.get_likely_products(producto)

    def list_productos(self, request):
        return self.repository.list_productos(request)

    def retrieve_producto(self, product_id):
        return self.repository.retrieve_producto(product_id)

    def delete(self, product_id):
        return self.repository.delete(product_id)

    def patch(self, request, product_id):
        return self.repository.patch(request, product_id)

    def post(self, request):
        return self.repository.post(request)
