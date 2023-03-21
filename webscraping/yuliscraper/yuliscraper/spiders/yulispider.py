import scrapy
from yuliscraper.items import Product


class YulispiderSpider(scrapy.Spider):
    name = "yulispider"
    start_urls = ["https://www.chocolate.co.uk/collections/all"]

    def parse(self, response):
        products = response.css("product-item")
        productItem = Product()
        for product in products:
            productItem["name"]: product.css("a.product-item-meta__title::text").get()
            productItem["url"]: products.css("div.product-item-meta a").attrib["href"]
            productItem["price"]: product.css("span.price").get().replace(
                '<span class="price">\n              <span class="visually-hidden">Sale price</span>',
                "",
            ).replace("</span>", "")
            yield productItem
        next_page = response.css('[rel="next"]::attr(href)').get()
        if next_page is not True:
            next_page_url = "https://www.chocolate.co.uk" + next_page
            yield response.follow(next_page_url, callback=self.parse)
