from django.urls import path
from .views import get_test_data , create_test

urlpatterns = [
    path('tests/' , get_test_data , name="get_test_data") ,
    path('tests/create' , create_test , name="create_test")
]
