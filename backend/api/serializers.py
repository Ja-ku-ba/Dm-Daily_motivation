from django.contrib.auth.models import User
from rest_framework import serializers

# from api.models import AuthenticateWithEmail

# class CommentSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     content = serializers.CharField(max_length=200)
#     created = serializers.DateTimeField()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("email", "username", "password1", "password2")

# class UserSerializer(serializers.HyperlinkedModelSerializer):

#     password = serializers.CharField(
#         write_only=True,
#         required=True,
#         help_text='Leave empty if no change needed',
#         style={'input_type': 'password', 'placeholder': 'Password'}
#     )

#     class Meta:
#         model = User
#         fields = ('url', 'username', 'email', 'password')

#     def create(self, validated_data):
#         validated_data['password'] = make_password(validated_data.get('password'))
#         return super(UserSerializer, self).create(validated_data)
