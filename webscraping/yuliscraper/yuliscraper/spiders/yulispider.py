import scrapy


class YulispiderSpider(scrapy.Spider):
    name = "yulispider"
    allowed_domains = ["yuli.co.uk"]
    start_urls = ["https://www.chocolate.co.uk/collections/all"]

    def parse(self, response):
        pass
