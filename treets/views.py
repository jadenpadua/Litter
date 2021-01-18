from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.http import Http404

from .models import Treet

# Create your views here.
def home_view(request, *args, **kwargs):
    return render(request, "pages/home.html", context={}, status=200)

def treet_detail_view(request, treet_id,  *args, **kwargs):

    data = {
        "id": treet_id,
    }

    current_status = 200

    try:
        obj = Treet.objects.get(id=treet_id)
        data['content'] = obj.content
    except:
        data['message'] = "NOT FOUND"
        current_status = 404


    return JsonResponse(data, status=current_status)
