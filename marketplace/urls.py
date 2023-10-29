# marketplace/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('ayurmart/', views.ayurmart, name='ayurmart'),
    path('ayurdoctor/', views.ayurdoctor, name='ayurdoctor'),
]

