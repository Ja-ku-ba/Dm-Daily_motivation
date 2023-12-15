from django.urls import path

from .api import views

urlpatterns = [
    path('str:query/', views.Posts.as_view())
]