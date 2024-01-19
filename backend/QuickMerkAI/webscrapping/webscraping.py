import requests
from bs4 import BeautifulSoup

# use ipv4 instead of ipv6
requests.packages.urllib3.util.connection.HAS_IPV6 = False
urls = [
    "https://realpython.github.io/fake-jobs/",
    "https://www.alkosto.com/search/?text=xbxo",
    "https://www.exito.com/s?q=xbox&sort=score_desc&page=0",
    "https://listado.mercadolibre.com.co/play#D[A:play]",
    "https://www.google.com/search?tbm=shop&hl=es-419&psb=1&ved=2ahUKEwi6kIv4iNyDAxVHq1oFHe_4BgUQu-kFegQIABAJ&q=xbox&oq=xbox&gs_lcp=Cgtwcm9kdWN0cy1jYxADUABYAGAAaABwAHgAgAEAiAEAkgEAmAEA&sclient=products-cc",
]
link = urls[0]
page = requests.get(link, timeout=5)
soup = BeautifulSoup(page.content, "html.parser")
print(link)
# print(soup)
results = soup.find(id="ResultsContainer")
job_elements = results.find_all("div", class_="card-content")
print(job_elements)
# print(results.prettify())
for job_element in job_elements:
    title_element = job_element.find("h2", class_="title")
    company_element = job_element.find("h3", class_="company")
    location_element = job_element.find("p", class_="location")
    print("title", title_element.text.strip())
    print("company", company_element.text.strip())
    print("location", location_element.text.strip())
    print()
