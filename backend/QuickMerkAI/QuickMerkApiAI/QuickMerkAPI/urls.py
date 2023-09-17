from django.urls import include, path
from QuickMerkAPI.AImodel import views
from rest_framework import routers

urlpatterns = [
    path("api/products/", views.BetterProducts.as_view(), name="instances"),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]
