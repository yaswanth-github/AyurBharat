# output/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('inputpage/', views.inputpage, name='inputpage'),
    path('outputpage/', views.outputpage, name='outputpage'),
    path('remedypage/', views.remedypage, name='remedypage'),
    path('dmodel/', views.dmodel, name='dmodel'),
]
