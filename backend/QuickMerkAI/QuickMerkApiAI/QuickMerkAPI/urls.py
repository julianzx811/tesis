from AImodel import views
from django.urls import include, path
from rest_framework import routers

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
    path(
        "api/Products/",
        views.Products.as_view(),
        name="Products",
    ),
    path(
        "api/Products/<int:product_id>",
        views.Products.as_view(),
        name="specific Products",
    ),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]
