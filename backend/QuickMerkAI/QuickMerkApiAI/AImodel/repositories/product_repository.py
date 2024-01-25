from AImodel.models import Producto, Producto_categoria, Producto_info
from django.forms.models import model_to_dict
import numpy as np
import requests
from bs4 import BeautifulSoup


class ProductsRepository:
    urls = [
        "https://listado.mercadolibre.com.co/producto#D[A:producto]",  # mercado libre
        "https://www.google.com/search?tbm=shop&hl=es-419&psb=1&ved=2ahUKEwi2ud25mt6DAxWYnloFHdo3AdMQu-kFegQIABAJ&q=producto&oq=producto&gs_lcp=Cgtwcm9kdWN0cy1jYxADUABYAGAAaABwAHgAgAEAiAEAkgEAmAEA&sclient=products-cc",  # google shopping
        "https://losprecios.co/buscar?t=producto&tid=7",  # jumbo
        "https://losprecios.co/buscar?t=producto&tid=1",  # d1
        "https://losprecios.co/buscar?t=producto&tid=6",  # exito
        ]
    def mercadolibre(self,producto):
            arr_productos = np.array([])
            link = self.urls[0].replace("producto", producto)
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
                        "titulo": titulo,
                        "precio": precio,
                        "descripcion": descripcion,
                        "link": link["href"],
                        "imagen": image["data-src"],
                    }
                    arr_productos = np.append(arr_productos, current_producto)
                except ValueError:
                    print(ValueError)
                i += 1
            return arr_productos


    def GoogleShoping(self,producto):
        arr_productos = np.array([])
        link = self.urls[1].replace("producto", producto)
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
                    "titulo": titlexd,
                    "precio": price,
                    "descripcion": "por implementar",
                    "link": "por implementar",
                    "imagen": image["src"],
                }
                arr_productos = np.append(arr_productos, current_producto)
            i += 1
        return arr_productos


    def SuperMercados(self,producto, num):
        arr_productos = np.array([])
        link = self.urls[num].replace("producto", producto)
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
                    "title": title,
                    "image": image["src"],
                    "descripcion": item2[1].text.strip(),
                    "link": "https://losprecios.co" + link[0]["href"],
                    "price": item2[2].text.strip().replace("$", ""),
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

    def GetProductsCategory(self, categoria_Id, minimo, maximo):
        # query = f"""SELECT * FROM Archivos_Producto_info WHERE Categoria = '{categoria_id}' LIMIT {minimo} OFFSET {maximo};"""
        maximo = int(maximo)
        minimo = int(minimo)
        print(minimo, maximo, categoria_Id)
        productosquery = Producto_info.objects.filter(categoria=categoria_Id)[
            minimo:maximo
        ]
        print(productosquery)
        products = []

        for producto in productosquery:
            currentProductoInfo = model_to_dict(producto)
            try:
                productobj = Producto.objects.get(
                    pk=int(currentProductoInfo["ProductInfoId"])
                )

                productobj_data = model_to_dict(productobj)
                currentProductoInfo.update(productobj_data)
                products.append(currentProductoInfo)
            except Exception as error:
                print(error)

        return products

    def get_categories(self):
        categoriasquery = Producto_categoria.objects.all()
        catergorias = []
        for categoria in categoriasquery:
            catergorias.append(model_to_dict(categoria))
        return catergorias
