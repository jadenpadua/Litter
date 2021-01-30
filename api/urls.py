from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('treets/', views.treetList, name="treets"),
    path('emails/', views.emailList, name="treets"),
    path('treet/<str:pk>/', views.treetDetail, name="specfic-treet"),
    path('post-email/', views.postEmail, name="post-email"),
    path('update-email/<str:pk>/', views.updateEmail, name="update-email"),
    path('delete-email/<str:pk>/', views.deleteEmail, name="delete-email"),
]