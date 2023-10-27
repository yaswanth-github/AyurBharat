# accounts/views.py
from django.shortcuts import render, redirect

def inputpage(request):
    return render(request, 'inputpage.html')

def outputpage(request):
    if request.method == 'POST' :
        symptoms = 'This is the trail symptoms'
        disease = 'This is trail disease name'
        Description = 'This is an trail Description'
        Remedy = 'This is a remedy'

        if  (request.POST.get('disease')):
            disease = request.POST['disease']

        if (request.POST.get('symptoms')):
            symptoms = request.POST['symptoms']
            
        # predictions = []        
        # predit = {'disease_name': disease , 'Symptoms': symptoms , 'Description' : Description , 'Remedy': Remedy}
        # predictions.append(predit)

        return render(request, 'outputpage.html', {'disease_name': disease , 'Symptoms': symptoms , 'Description' : Description , 'Remedy': Remedy} )
    
    return redirect( 'inputpage')


def dmodel(request):
    return render(request, '3Dmodel.html')

def remedypage(request):
    return render(request, 'remedypage.html')
