from django.urls import path
from account.api.views import (
    registraion_view,
)

app_name = "account"

urlpatterns = [
    path('register/', registraion_view, name="register"),
]