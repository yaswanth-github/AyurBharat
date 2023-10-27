# accounts/views.py
from django.shortcuts import render

def inputpage(request):
    return render(request, 'inputpage.html')

def outputpage(request):
    return render(request, 'outputpage.html')
