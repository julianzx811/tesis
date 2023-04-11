from itemloaders.processors import MapCompose, TakeFirst
from scrapy.loader import ItemLoader


class yuliProductLoader(ItemLoader):
    default_output_processor = TakeFirst()
    price_in = MapCompose(lambda x: x.split("£")[-1])
    url_in = MapCompose(lambda x: "https://www.chocolate.co.uk" + x)
