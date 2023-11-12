from django.db import models
from account.models import CustomUser

# Create your models here.
class Post(models.Model):
    owner = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    added = models.DateTimeField(auto_now_add=True)
    description = models.TextField()
    image = models.ImageField(upload_to="posts", default="post.png", null=True, blank=True)

    def __str__(self) -> str:
        return f"{self.owner}-{self.added}-{self.description[:50]}"