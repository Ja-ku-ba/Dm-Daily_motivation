from rest_framework import serializers

from account.models import CustomUser

class RegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style=({'input_type': "password"}), write_only=True)
    class Meta:
        model = CustomUser
        fields = ["email", "password", "password2", "username"]
        extra_kwargs = {
            "password": {"write_only": True},
        }
        
    def save(self):
        account = CustomUser(
            email = self.validated_data["email"],
            username = self.validated_data["username"]
        )
        password = self.validated_data["password"]
        password2 = self.validated_data["password2"]
        if password != password2:
            raise serializers.ValidationError({"password": "Password must be the same."})
        account.set_password(password)
        account.save()
        return account