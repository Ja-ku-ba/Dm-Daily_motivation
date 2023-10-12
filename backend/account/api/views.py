from django.shortcuts import render

from rest_framework import serializers
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
        if serializer.is_valid():
            account = serializer.save()
            data['response'] = "Sucefully registered a new user"
            data["email"] = account.email
            data["username"] = account.username
        else:
            data = serializer.errors
        return Response(data)

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