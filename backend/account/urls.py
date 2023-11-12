from django.urls import path
from account.api.views import (
    registraion_view,
)
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from .api.views import MyTokentObtainPairView

app_name = "account"

urlpatterns = [
    path('register/', registraion_view, name="register"),
    path('token/', MyTokentObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]