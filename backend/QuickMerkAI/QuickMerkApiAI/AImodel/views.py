from AImodel.serializers import UserSerializer
from AImodel.services.CosineSimilarity_service import CosineSimilarity
from AImodel.services.LSAmodel_service import LSAmodel
# from AImodel.services.AI_services import CosineSimilarity, LSAmodel, WordtwoVec
from AImodel.services.product_service import ProductService
from AImodel.services.WordtwoVec_service import WordtwoVec
from rest_framework import permissions, status, viewsets
from rest_framework.response import Response


class Products(viewsets.ViewSet):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    servicios = ProductService()

    def get_likely_products(self, request):
        try:
            return Response(
                self.servicios.get_likely_products(request),
                status=status.HTTP_200_OK,
            )
        except Exception as error:
            print(error)
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                template_name=None,
                content_type=None,
            )

    def list_productos(self, request):
        try:
            return Response(
                self.servicios.list_productos(request),
                status=status.HTTP_200_OK,
            )
        except Exception as error:
            print(error)
            return Response(
                "algo salio mal",
                status=status.HTTP_400_BAD_REQUEST,
                template_name=None,
                content_type=None,
            )

    def retrieve_producto(self, request, product_id):
        try:
            return Response(
                self.servicios.retrieve_producto(product_id),
                status=status.HTTP_200_OK,
            )
        except Exception as error:
            print(error)
            return Response(
                "algo salio mal",
                status=status.HTTP_404_NOT_FOUND,
                template_name=None,
                content_type=None,
            )

    def GetProductsCategory(self, request, categoria_id):
        try:
            return Response(
                self.servicios.GetProductsCategory(categoria_id),
                status=status.HTTP_200_OK,
            )
        except Exception as error:
            print(error)
            return Response(
                "algo salio mal",
                status=status.HTTP_400_BAD_REQUEST,
                template_name=None,
                content_type=None,
            )

    def post(self, request):
        try:
            return Response(
                self.servicios.post(request),
                status=status.HTTP_201_CREATED,
            )
        except Exception as error:
            print(error)
            return Response(
                "algo salio mal",
                status=status.HTTP_400_BAD_REQUEST,
                template_name=None,
                content_type=None,
            )

    def patch(self, request, product_id):
        try:
            return Response(
                self.servicios.patch(request, product_id),
                status=status.HTTP_200_OK,
            )
        except Exception as error:
            print(error)
            return Response(
                "algo salio mal",
                status=status.HTTP_400_BAD_REQUEST,
                template_name=None,
                content_type=None,
            )


class AImodel(viewsets.ViewSet):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def list_coseno(self, request):
        servicios = CosineSimilarity()
        try:
            return Response(
                servicios.post(request),
                status=status.HTTP_200_OK,
            )
        except Exception as error:
            print(error)
            return Response(
                "algo salio mal",
                status=status.HTTP_400_BAD_REQUEST,
                template_name=None,
                content_type=None,
            )

    def list_LSAmodel(self, request):
        try:
            servicios = LSAmodel()
            return Response(
                servicios.post(request),
                status=status.HTTP_200_OK,
            )
        except Exception as error:
            print(error)
            return Response(
                "algo salio mal",
                status=status.HTTP_400_BAD_REQUEST,
                template_name=None,
                content_type=None,
            )

    def list_word2vec(self, request):
        try:
            servicios = WordtwoVec()
            return Response(
                servicios.post(request),
                status=status.HTTP_200_OK,
            )
        except Exception as error:
            print(error)
            return Response(
                "algo salio mal",
                status=status.HTTP_400_BAD_REQUEST,
                template_name=None,
                content_type=None,
            )
