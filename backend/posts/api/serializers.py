from rest_framework import serializers

from ..models import Post

class PostSerializer(serializers.ModelSerializer):
    image = serializers.CharField(allow_blank=True, error_messages={'required': 'This field is optional'})

    class Meta:
        model = Post
        fields = ['id', 'owner', 'added', 'description', 'image']

