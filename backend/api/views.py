from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework import mixins 

from .models import AuthenticateWithEmail
from .serializers import UserSerializer

# Create your views here.
class Register(mixins.CreateModelMixin):
    # queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [IsAdminUser]

    def post(self, request):
        print("okej, ", "_"*10)
        pass
    
