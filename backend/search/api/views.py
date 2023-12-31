from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions, status
from rest_framework.permissions import IsAuthenticated

from ..models import Post
from .serializers import PostSerializer

class Search(APIView):
    authentication_classes = [
        authentication.SessionAuthentication,
        authentication.TokenAuthentication
        ]
    permission_classes = (IsAuthenticated,) 

    def get(self, request):
        posts = Post.objects.get(id=request.data["id"])
        serialier = PostSerializer(posts, many=False)
        return Response(serialier.data)

            