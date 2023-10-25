# output/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('inputpage/', views.inputpage, name='inputpage'),
    path('outputpage/', views.outputpage, name='outputpage'),
    path('remedypage/', views.outputpage, name='remedypage'),
]
