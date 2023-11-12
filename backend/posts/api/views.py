from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions, status
from rest_framework.permissions import IsAuthenticated

from ..models import Post
from .serializers import PostSerializer

class Posts(APIView):
    authentication_classes = [
        authentication.SessionAuthentication,
        authentication.TokenAuthentication
        ]
    permission_classes = (IsAuthenticated,) 

    # add authentication later
    def get(self, request):
        posts = Post.objects.get(id=request.data["id"])
        serialier = PostSerializer(posts, many=False)
        return Response(serialier.data)

    # add authentication later
    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, headers={"added": "post added sucesfully"} ,status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # add authentication later
    # change the message later, so its tells if post is undeleted or the id is not correct
    def delete(self, request):
        try:
            event = Post.objects.get(id=request.data["id"])
            event.delete()
            return Response(data={"deleted": "post deleted sucesfully"}, status=status.HTTP_204_NO_CONTENT)
        except:
            return Response(data={"deleted": "post deleted unsucesfully, check the post id"}, status=status.HTTP_400_BAD_REQUEST)

    # add authentication later
    def put(self, request):
        try:
            post = Post.objects.get(id=request.data["id"])
            serializer = PostSerializer(post, data=request.data)
            if serializer.is_valid():
                serializer.save()
            else: 
                return Response(serializer.errors)
            return Response(data={"put": "post updated sucesfully"})
        except:
            return Response(data={"to update a post, the id of the updated post is required"})
        
            