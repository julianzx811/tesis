from AImodel.models import Producto, Producto_categoria, Producto_info
from django.forms.models import model_to_dict
import numpy as np
import requests
from bs4 import BeautifulSoup


class ProductsRepository:
    urls = [
        {"link": "https://listado.mercadolibre.com.co/producto#D[A:producto]","disponibilidad":"online","tienda":"mercado libre"},
        {"link":"https://www.google.com/search?tbm=shop&hl=es-419&psb=1&ved=2ahUKEwi2ud25mt6DAxWYnloFHdo3AdMQu-kFegQIABAJ&q=producto&oq=producto&gs_lcp=Cgtwcm9kdWN0cy1jYxADUABYAGAAaABwAHgAgAEAiAEAkgEAmAEA&sclient=products-cc","disponibilidad":"online","tienda":"google shopping"},
        {"link":"https://losprecios.co/buscar?t=producto&tid=7","disponibilidad":"fisica","tienda":"jumbo"},
        {"link":"https://losprecios.co/buscar?t=producto&tid=1","disponibilidad":"fisica","tienda":"d1"},  
        {"link":"https://losprecios.co/buscar?t=producto&tid=6","disponibilidad":"fisica","tienda":"exito"},  
        ]
    def mercadolibre(self,producto):
            arr_productos = np.array([])
            link = self.urls[0]["link"].replace("producto", producto)
            print(link)
            page = requests.get(link, timeout=5)
            soup = BeautifulSoup(page.content, "html.parser")
            productos = soup.find_all(
                class_="andes-card ui-search-result ui-search-result--core andes-card--flat andes-card--padding-16"
            )
            i = 0
            for product in productos:
                if i == 5:
                    break
                try:
                    titulo = product.find("h2", class_="ui-search-item__title").text.strip()
                    precio = product.find(
                        "span", class_="andes-money-amount__fraction"
                    ).text.strip()
                    link = product.find(
                        "a",
                        class_="ui-search-item__group__element ui-search-link__title-card ui-search-link",
                        href=True,
                    )
                    page = requests.get(link["href"], timeout=5)
                    soup = BeautifulSoup(page.content, "html.parser")
                    descripcion = soup.find(
                        "div",
                        class_="ui-pdp-container__row ui-pdp-container__row--highlighted-features",
                    )
                    posible_description = descripcion is None
                    if not posible_description:
                        descripcion = descripcion.text
                    image = product.find(class_="ui-search-result__image")
                    image = image.find("img")
                    current_producto = {
                        "ProductName": titulo,
                        "categoria":"sin categoria",
                        "precio": precio,
                        "Disponibilidad": self.urls[0]["disponibilidad"],
                        "Descripcion": descripcion,
                        "link": link["href"],
                        "imagen": image["data-src"],
                        "tienda":self.urls[0]["tienda"]
                    }
                    arr_productos = np.append(arr_productos, current_producto)
                except ValueError:
                    print(ValueError)
                i += 1
            return arr_productos


    def GoogleShoping(self,producto):
        arr_productos = np.array([])
        link = self.urls[1]["link"].replace("producto", producto)
        page = requests.get(link, timeout=5)
        soup = BeautifulSoup(page.content, "html.parser")
        products = soup.find_all("div", class_="xcR77")
        i = 0
        for product in products:
            if i > 1:
                if i > 10:
                    break
                title = product.find(class_="rgHvZc")
                titlexd = title.find("a").text
                price = product.find(class_="HRLxBb").text
                image = product.find(class_="oR27Gd")
                image = image.find("img")
                current_producto = {
                    "ProductName": titlexd,
                    "precio": price,
                    "Descripcion": "por implementar",
                    "categoria":"sin categoria",
                    "Disponibilidad": self.urls[1]["disponibilidad"],
                    "link": "por implementar",
                    "imagen": image["src"],
                    "tienda":self.urls[1]["tienda"]
                }
                arr_productos = np.append(arr_productos, current_producto)
            i += 1
        return arr_productos


    def SuperMercados(self,producto, num):
        arr_productos = np.array([])
        link = self.urls[num]["link"].replace("producto", producto)
        print(link)
        page = requests.get(link, timeout=5)
        soup = BeautifulSoup(page.content, "html.parser")
        items = soup.find(class_="bq-cn1")
        if items is not None:
            productos = items.find_all("div", class_="bq-cn-r")
            for producto in productos:
                title = producto.find(class_="bq-a-r").text.strip()
                image = producto.find("img")
                item2 = producto.find_all("p", "mrg-0")
                link = producto.find_all("a", class_="h-il-ai")
                current_producto = {
                    "ProductName": title,
                    "image": image["src"],
                    "Descripcion": item2[1].text.strip(),
                    "categoria":"sin categoria",
                    "Disponibilidad": self.urls[num]["disponibilidad"],
                    "link": "https://losprecios.co" + link[0]["href"],
                    "precio": item2[2].text.strip().replace("$", ""),
                    "tienda":self.urls[num]["tienda"]
                }
                arr_productos = np.append(arr_productos, current_producto)
        return arr_productos

    def list_productos(self, producto):
        productoARR = np.array([])
        google = self.GoogleShoping(producto)
        mercao = self.mercadolibre(producto)
        mercado1 = self.SuperMercados(producto, 2)
        mercado2 = self.SuperMercados(producto, 3)
        mercado3 = self.SuperMercados(producto, 4)
        productoARR = np.concatenate((google, mercao, mercado1, mercado2, mercado3))
        return productoARR

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

    def GetProductsCategory(self, categoria_Id):
        categoria_name = Producto_categoria.objects.get(pk=categoria_Id)
        categoria_name = model_to_dict(categoria_name)
        categoria_name = categoria_name["Categoria"]
        print(categoria_name)
        return self.list_productos(categoria_name)
