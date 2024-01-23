import requests
from bs4 import BeautifulSoup

# use ipv4 instead of ipv6
requests.packages.urllib3.util.connection.HAS_IPV6 = False

urls = [
    "https://listado.mercadolibre.com.co/producto#D[A:producto]",  # mercado libre
    "https://www.google.com/search?tbm=shop&hl=es-419&psb=1&ved=2ahUKEwi2ud25mt6DAxWYnloFHdo3AdMQu-kFegQIABAJ&q=producto&oq=producto&gs_lcp=Cgtwcm9kdWN0cy1jYxADUABYAGAAaABwAHgAgAEAiAEAkgEAmAEA&sclient=products-cc",  # google shooping
    "https://losprecios.co/buscar?t=producto&tid=7",  # jumbo
    "https://losprecios.co/buscar?t=producto&tid=1",  # d1
    "https://losprecios.co/buscar?t=producto&tid=6",  # exito
]


def prueba(producto):
    productoARR = producto.replace(" ", "")
    GoogleShoping(productoARR)
    # mercadolibre(productoARR)
    SuperMercados(producto, 2)
    SuperMercados(producto, 3)
    SuperMercados(producto, 4)


def mercadolibre(producto):
    link = urls[0].replace("producto", producto)
    print(link)
    page = requests.get(link, timeout=5)
    soup = BeautifulSoup(page.content, "html.parser")
    # print(soup)
    # results = soup.find(
    # class_="ui-search-results ui-search-results--without-disclaimer")
    # results1 = soup.find(class_="ui-search-layout ui-search-layout--stack")
    productos = soup.find_all(
        class_="andes-card ui-search-result ui-search-result--core andes-card--flat andes-card--padding-16"
    )

    i = 0
    for product in productos:
        if i == 10:
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
            print(link["href"])
            soup = BeautifulSoup(page.content, "html.parser")
            descripcion = soup.find(
                "p", class_="ui-pdp-description__content"
            ).text.strip()
            image = product.find(class_="ui-search-result__image")
            image = image.find("img")
            print("titulo: ", titulo)
            print("precio: ", precio)
            print("descripcion: ", descripcion)
            print("link: ", link["href"])
            print("imagen: ", image["data-src"])
        except ValueError:
            print(ValueError)
        i += 1


def GoogleShoping(producto):
    producto = producto.replace(" ", "")
    link = urls[1].replace("producto", producto)
    # print(link)
    page = requests.get(link, timeout=5)
    soup = BeautifulSoup(page.content, "html.parser")
    # print(soup)
    products = soup.find_all("div", class_="xcR77")
    # print(products)
    i = 0
    for product in products:
        if i > 1:
            if i > 10:
                break
            title = product.find(class_="rgHvZc")
            titlexd = title.find("a").text
            print("titulo:  ", titlexd)
            price = product.find(class_="HRLxBb").text
            print("precio: ", price)
            image = product.find(class_="oR27Gd")
            image = image.find("img")
            print("imagen: ", image["src"])
            print("Descripcion: ")
            print(end="\n" * 2)
        i += 1


def SuperMercados(producto, num):
    link = urls[num].replace("producto", producto)
    print(link)
    page = requests.get(link, timeout=5)
    soup = BeautifulSoup(page.content, "html.parser")
    items = soup.find(class_="bq-cn1")
    # print(items)
    if items != None:
        productos = items.find_all("div", class_="bq-cn-r")
        for producto in productos:
            title = producto.find(class_="bq-a-r").text.strip()
            image = producto.find("img")
            item2 = producto.find_all("p", "mrg-0")
            link = producto.find_all("a", class_="h-il-ai")
            print("title: ", title)
            print("image: ", image["src"])
            print("descripcion: ", item2[1].text.strip())
            print("link: ", "https://losprecios.co" + link[0]["href"])
            print("price: ", item2[2].text.strip().replace("$", ""))
            print(end="\n" * 2)


# SuperMercados("chocolate", 4)
# GoogleShoping("play 5")
mercadolibre("chocolate")
# prueba("chocolate")
