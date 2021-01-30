from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import EmailSerializer, TreetSerializer

from.models import Treet, Email


@api_view(['GET'])
def apiOverview(request):

    api_urls = {
        'Get Treets' : '/treets',
        'Get Emails' : '/emails',
        'Post Email' : '/post-email',
        'Update Email' : '/update-email',
        'Delete Email' : '/delete-email',
    }

    return Response(api_urls)

@api_view(['GET'])
def treetList(request):
    treets = Treet.objects.all()
    serializer = TreetSerializer(treets, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def emailList(request):
    emails = Email.objects.all()
    serializer = EmailSerializer(emails, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def treetDetail(request, pk):
    treets = Treet.objects.get(id=pk)
    serializer = TreetSerializer(treets, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def postEmail(request):
    serializer = EmailSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def updateEmail(request, pk):
    email = Email.objects.get(id=pk)
    serializer = EmailSerializer(instance=email, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['DELETE'])
def deleteEmail(request, pk):
    email = Email.objects.get(id=pk)
    email.delete()
    return Response("Item successfully Deleted!")