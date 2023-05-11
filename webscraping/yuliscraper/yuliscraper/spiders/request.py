from googlesearch import search

def google_query():
    query = "comprar online"
    results = search(query, num_results=20)
    urls = []
    for result in results:
        urls.append(str(result)) 
    return urls
