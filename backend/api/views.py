from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Test
from .serializer import TestSerializer

@api_view(['GET'])
def get_test_data(request):
    test = Test.objects.all()
    # convert py object to json
    serializedData = TestSerializer(test , many=True).data
    return Response(serializedData)

@api_view(['POST'])
def create_test(request):
    data = request.data
    serializer = TestSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data , status=status.HTTP_201_CREATED)
    return Response(serializer.data,status = status.HTTP_400_BAD_REQUEST)

