import scrapy
from yuliscraper.items import yuliProduct
from yuliscraper.itemsloaders import yuliProductLoader


class YulispiderSpider(scrapy.Spider):
    name = "yulispider"
    start_urls = ["https://www.chocolate.co.uk/collections/all"]

    def parse(self, response):
        products = response.css("product-item")
        productItem = yuliProduct()
        for product in products:
            chocolate = yuliProductLoader(item=yuliProduct(), selector=product)
            chocolate.add_css("name", "a.product-item-meta__title::text")
            chocolate.add_css(
                "price",
                "span.price",
                re='<span class="price">\n              <span class="visually-hidden">Sale price</span>(.*)</span>',
            )
            chocolate.add_css("url", "div.product-item-meta a::attr(href)")
            yield chocolate.load_item()
            next_page = response.css('[rel="next"]::attr(href)').get()
        if next_page is not True:
            next_page_url = "https://www.chocolate.co.uk" + next_page
            yield response.follow(next_page_url, callback=self.parse)
