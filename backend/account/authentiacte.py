from .api.views import MyTokenObtainPairSerializer

class Authentiacate():
    def __init__(self) -> None:
        pass

    def AuthenticateToken(self):
        print(dir(MyTokenObtainPairSerializer), "------------------------------")