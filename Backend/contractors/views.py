from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Contractor
from .serializers import ContractorSerializer


# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_contractors(request):
    contractors = Contractor.objects.all()
    serializer = ContractorSerializer(contractors, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_contractor(request):
    print(
        'User ', f" {request.user.username} {request.user.email} {request.user.id}")
    if request.method == 'POST':
        serializer = ContractorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        contractors = Contractor.objects.filter(user_id=request.user.id)
        serializer = ContractorSerializer(contractors, many=True)
        return Response(serializer.data)