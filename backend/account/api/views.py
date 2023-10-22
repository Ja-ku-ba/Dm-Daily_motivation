from django.shortcuts import render

from rest_framework import serializers, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from account.api.serialzers import RegistrationSerializer

# Create your views here.
@api_view(["POST"])
def registraion_view(request):
    
    if request.method == "POST":
        serializer = RegistrationSerializer(data=request.data)
        data = {}
        status_response = status.HTTP_200_OK
        if serializer.is_valid():
            account = serializer.save()
            data['response'] = "Sucefully registered a new user"
            data["email"] = account.email
            data["username"] = account.username
        else:
            data = serializer.errors
            status_response = status.HTTP_406_NOT_ACCEPTABLE
        return Response(data, status=status_response)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['email'] = user.email
        # ...

        return token

class MyTokentObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer