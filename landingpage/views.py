from django.shortcuts import render
from django.http import request

# Create your views here.

def homepage(request):
    return render(request, 'homepage.html')
