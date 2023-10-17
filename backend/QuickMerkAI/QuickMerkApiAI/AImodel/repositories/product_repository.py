from AImodel.models import Producto, Producto_categoria, Producto_info
from django.forms.models import model_to_dict


class ProductsRepository:
    def get_likely_products(self, producto):
        productos = Producto.objects.filter(ProductName__contains=producto).only(
            "ProductName", "info"
        )
        ProductosReturn = []
        for i in productos:
            currentProducto = model_to_dict(i)

            productinfo = (
                Producto_info.objects.filter(pk=int(currentProducto["info"]))
                .only(
                    "Disponibilidad",
                    "Descripcion",
                    "precio",
                    "link",
                    "Imagen",
                )
                .get()
            )
            currentProductoInfo = model_to_dict(productinfo)
            currentProducto.update(currentProductoInfo)
            del currentProducto["ProductId"]
            del currentProducto["info"]
            del currentProducto["ProductInfoId"]
            del currentProducto["tiendaId"]
            ProductosReturn.append(currentProducto)

        return ProductosReturn

    def list_productos(self, minimo, maximo):
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

    def patch(
        self, product_id, precio, Disponibilidad, Descripcion, link, Imagen, ProductName
    ):
        producto = Producto.objects.get(pk=product_id)
        infoid = model_to_dict(producto)
        productoInfo = Producto_info.objects.get(pk=int(infoid["info"]))
        productoInfo.precio = precio
        productoInfo.Disponibilidad = Disponibilidad
        productoInfo.Imagen = Imagen
        productoInfo.Descripcion = Descripcion
        productoInfo.link = link
        productoInfo.save()

        producto.ProductName = ProductName
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
            return model_to_dict(productinfo).update(model_to_dict(producto))

    def GetProductsCategory(self, categoria_id):
        productosquery = Producto_info.objects.filter(categoria=categoria_id)
        products = []

        for producto in productosquery:
            currentProductoInfo = model_to_dict(producto)
            productobj = Producto.objects.get(
                pk=int(currentProductoInfo["ProductInfoId"])
            )
            productobj_data = model_to_dict(productobj)
            currentProductoInfo.update(productobj_data)
            products.append(currentProductoInfo)

        return products
