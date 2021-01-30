from rest_framework import serializers
from .models import Email, Treet

class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Email
        fields = '__all__'


class TreetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Treet
        fields = '__all__'