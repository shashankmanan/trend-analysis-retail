from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import requests
from bs4 import BeautifulSoup

def get_twitter_trends():
    pass


@api_view(['GET'])
def get_all_trends(request):
    city = request.GET.get('city')
    proxy_url = "https://proxylist.geonode.com/api/proxy-list?limit=500&page=1&sort_by=lastChecked&sort_type=desc"	

    http_proxy  = "http://103.195.65.209:8080"
    proxies = { 
        "http"  : http_proxy, 
    }

    twitter_trends_url = f"https://twitter-trends.iamrohit.in/india/{city}"

    try:
        twitter_request = requests.get(twitter_trends_url,proxies=proxies)
        soup = BeautifulSoup(twitter_request.content,features="html.parser")
        elements = soup.find_all('a',class_="tweet")
        twitter_trends = []
        for element in elements:
            twitter_trends += element
        print("elements are:" , elements)
        return Response({"city":city,"twitter_trends" : twitter_trends},status = status.HTTP_200_OK)
    except Exception as e:
        return Response({"ERROR":"Something_Went_Wrong","Error_desc" : e},status=status.HTTP_404_NOT_FOUND)