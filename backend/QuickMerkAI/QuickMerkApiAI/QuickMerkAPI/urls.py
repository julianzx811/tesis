from AImodel import views
from django.urls import include, path
from django.views.decorators.csrf import csrf_exempt
from rest_framework import routers

product_list = views.Products.as_view({"get": "list_productos"})
product_detail = views.Products.as_view({"get": "retrieve_producto"})
get_likely_products = views.Products.as_view({"get": "get_likely_products"})
cosine_similarity = views.AImodel.as_view({"post": "list_coseno"})
lSAmodel = views.AImodel.as_view({"post": "list_LSAmodel"})
WordtwoVec = views.AImodel.as_view({"post": "list_word2vec"})

urlpatterns = [
    path(r"api/world2vec/", WordtwoVec, name="WordtwoVec"),
    path(r"api/LSAmodel/", lSAmodel, name="LSA_model"),
    path(r"api/cosine_similarity/", cosine_similarity, name="cosine_similarity"),
    path(r"api/Products/", product_list, name="user-list"),
    path(r"api/Products/<int:product_id>/", product_detail, name="user-detail"),
    # path(r"api/Products/like/", get_likely_products, name="user-detail"),
]
