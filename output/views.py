# accounts/views.py
from django.shortcuts import render

def inputpage(request):
    if request.method == 'POST' :
        disease = request.POST['disease']
        symptoms = request.POST['symptoms']
        Description = 'This is an trail Description'
        Remedy = 'This is a remedy'

        # for trail base
        if  (not disease ):
            disease = 'This is trail disease name'
            
        predictions = []        
        predit = {'disease_name': disease , 'Symptoms': symptoms , 'Description' : Description , 'Remedy': Remedy}
        predictions.append(predit)

        return render(request, 'outputpage.html', predictions)
    return render(request, 'inputpage.html')

def outputpage(request):
    return render(request, 'outputpage.html')
