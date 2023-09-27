from django.urls import include, path
from AImodel import views
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
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]
