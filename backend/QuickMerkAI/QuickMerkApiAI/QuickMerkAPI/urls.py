from AImodel import views
from django.urls import include, path
from rest_framework import routers

product_list = views.Products.as_view({"get": "list_productos"})
product_detail = views.Products.as_view({"get": "retrieve_producto"})
get_likely_products = views.Products.as_view({"get": "get_likely_products"})
urlpatterns = [
    path(
        "api/cosine_similarity/",
        views.CosineSimilarity.as_view(),
        name="consine similarity",
    ),
    path(
        "api/LSAmodel/",
        views.LSAmodel.as_view(),
        name="lsa model",
    ),
    path(
        "api/world2vec/",
        views.WordtwoVec.as_view(),
        name="word2vec",
    ),
    path(r"api/Products/", product_list, name="user-list"),
    path(r"api/Products/<int:product_id>/", product_detail, name="user-detail"),
    # path(r"api/Products/like/", get_likely_products, name="user-detail"),
]
