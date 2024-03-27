from rest_framework import serializers
from .models import Contractor

class ContractorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contractor
        fields = ['id', 'first_name','last_name', 'user_id', 'project','expertise']
        depth = 1