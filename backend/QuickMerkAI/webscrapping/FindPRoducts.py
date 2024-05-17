import numpy as np
import requests
from bs4 import BeautifulSoup

# use ipv4 instead of ipv6
requests.packages.urllib3.util.connection.HAS_IPV6 = False

urls = [
    "https://listado.mercadolibre.com.co/producto#D[A:producto]",  # mercado libre
    "https://www.google.com/search?tbm=shop&hl=es-419&psb=1&ved=2ahUKEwi2ud25mt6DAxWYnloFHdo3AdMQu-kFegQIABAJ&q=producto&oq=producto&gs_lcp=Cgtwcm9kdWN0cy1jYxADUABYAGAAaABwAHgAgAEAiAEAkgEAmAEA&sclient=products-cc",  # google shopping
    "https://losprecios.co/buscar?t=producto&tid=7",  # jumbo
    "https://losprecios.co/buscar?t=producto&tid=1",  # d1
    "https://losprecios.co/buscar?t=producto&tid=6",  # exito
]


def prueba(producto):
    productoARR = np.array([])
    google = GoogleShoping(producto)
    mercao = mercadolibre(producto)
    mercado1 = SuperMercados(producto, 2)
    mercado2 = SuperMercados(producto, 3)
    mercado3 = SuperMercados(producto, 4)
    productoARR = np.concatenate((google, mercao, mercado1, mercado2, mercado3))
    print(productoARR)


def mercadolibre(producto):
    arr_productos = np.array([])
    link = urls[0].replace("producto", producto)
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


def GoogleShoping(producto):
    arr_productos = np.array([])
    link = urls[1].replace("producto", producto)
    page = requests.get(link, timeout=5)
    soup = BeautifulSoup(page.content, "html.parser")
    print(soup)
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
            descripcionomg = product.find(class_="sh-ds__trunc")
            current_producto = {
                "titulo": titlexd,
                "precio": price,
                "descripcion": descripcionomg,
                "link": "por implementar",
                "imagen": image["src"],
            }
            arr_productos = np.append(arr_productos, current_producto)
        i += 1
    return arr_productos


def SuperMercados(producto, num):
    arr_productos = np.array([])
    link = urls[num].replace("producto", producto)
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


prueba("arroz")
