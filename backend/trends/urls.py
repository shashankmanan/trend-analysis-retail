from django.urls import path
from .views import get_all_trends

urlpatterns = [
    path('get/',get_all_trends,name="get_all_trends")
]
