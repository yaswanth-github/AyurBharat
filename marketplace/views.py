from django.shortcuts import render

# Create your views here.
def ayurmart(request):
    return render(request, 'ayurMart.html')

def ayurdoctor(request):
    return render(request, 'ayurDoctor.html')