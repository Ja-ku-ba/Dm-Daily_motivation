from django.shortcuts import render

from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view

from account.api.serialzers import RegistrationSerializer

# Create your views here.
@api_view(["POST"])
def registraion_view(request):
    
    if request.method == "POST":
        serializer = RegistrationSerializer(data=request.data)
        data = {}
        if serializers.is_valid():
            account = serializer.save()
            data['response'] = "Sucefully registered a new user"
            data["email"] = account.email
            data["username"] = account.username
        else:
            data = serializer.errors
        return Response(data)