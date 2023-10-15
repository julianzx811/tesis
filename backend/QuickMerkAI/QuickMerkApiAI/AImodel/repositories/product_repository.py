from AImodel.models import Producto, Producto_categoria, Producto_info
from django.forms.models import model_to_dict


class ProductsRepository:
    def get_likely_products(self, producto):
        productos = Producto.objects.filter(ProductName__contains=producto)
        ProductosReturn = []
        for i in productos:
            currentProducto = model_to_dict(i)
            print(currentProducto)
            productinfo = Producto_info.objects.get(pk=int(currentProducto["info"]))
            currentProductoInfo = model_to_dict(productinfo)
            print(currentProductoInfo)
            currentProducto.update(currentProductoInfo)
            ProductosReturn.append(currentProducto)

        return ProductosReturn

    def list_productos(self, request):
        minimo = request.query_params["minimo"]
        maximo = request.query_params["maximo"]
        # productos = Producto.objects.all()[int(minimo) : int(maximo)]
        # productosInfo = Producto_info.objects.all()[int(minimo) : int(maximo)]
        productos = Producto.objects.filter(
            ProductId__range=(int(minimo), int(maximo))
        ).only("ProductId", "ProductName", "info", "tiendaId")
        productosInfo = Producto_info.objects.filter(
            ProductInfoId__range=(int(minimo), int(maximo))
        ).only(
            "ProductInfoId",
            "precio",
            "Disponibilidad",
            "Imagen",
            "Descripcion",
            "categoria",
            "link",
        )
        Productos = []
        for i in range(len(productos)):
            currentProducto = model_to_dict(productos[i])
            currentProductoInfo = model_to_dict(productosInfo[i])
            currentProducto.update(currentProductoInfo)
            Productos.append(currentProducto)

        return Productos

    def retrieve_producto(self, product_id):
        producto = Producto.objects.get(pk=product_id)
        producto = model_to_dict(producto)
        productoInfo = Producto_info.objects.get(pk=int(producto["info"]))
        producto_info = model_to_dict(productoInfo)
        producto.update(producto_info)
        return producto

    def delete(self, product_id):
        producto = Producto.objects.get(pk=product_id)
        productobj = model_to_dict(producto)
        productoInfo = Producto_info.objects.get(pk=int(productobj["info"]))
        producto_info = model_to_dict(productoInfo)
        productobj.update(producto_info)
        productoInfo.delete()
        producto.delete()

        return productobj

    def patch(self, request, product_id):
        producto = Producto.objects.get(pk=product_id)
        infoid = model_to_dict(producto)
        productoInfo = Producto_info.objects.get(pk=int(infoid["info"]))
        productoInfo.precio = request.data["precio"]
        productoInfo.Disponibilidad = request.data["Disponibilidad"]
        productoInfo.Imagen = request.data["Imagen"]
        productoInfo.Descripcion = request.data["Descripcion"]
        productoInfo.link = request.data["link"]
        productoInfo.save()

        producto.ProductName = request.data["ProductName"]
        producto.save()
        return infoid

    def post(self, request):
        for producto in request.data:
            productinfoId = Producto_categoria.objects.get(
                pk=int(producto["categoria"])
            )
            productinfo = Producto_info(
                precio=producto["precio"],
                Disponibilidad=producto["Disponibilidad"],
                Imagen=producto["Imagen"],
                Descripcion=producto["Descripcion"],
                categoria=productinfoId,
                link=producto["link"],
            )
            productinfo.save()

            producto = Producto(
                ProductName=producto["ProductName"],
                info=productinfo,
            )
            producto.save()
            return 1
