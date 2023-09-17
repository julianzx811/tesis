from QuickMerkAPI.AImodel.serializers import UserSerializer
from rest_framework import authentication, permissions
from rest_framework.response import Response
from rest_framework.views import APIView


class BetterProducts(APIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        return Response(request.data)
