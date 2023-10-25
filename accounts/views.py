# accounts/views.py

from django.shortcuts import render, redirect
from django.contrib.auth.hashers import make_password, check_password
from . import models


def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']

        if models.User.objects.filter(email=email).exists():
            userdata = models.User.objects.filter(email=email)

            # Access the first element in the userdata list
            user = userdata[0]

            if check_password(password,user.password):  # returns True
                return render(request, "homepage.html", {'msg':'Loged in successful!'})
            else :
                return render(request, "login.html" , {'msg':'Entered email or password is wrong!'})
        else:
            return render(request, "login.html", {'msg':'User does not exists, click signup for registering.'})

    return render(request, "login.html")


def signup(request):
    if request.method == "POST":
        name = request.POST['name']
        email = request.POST['email']
        phoneno = request.POST['phoneno']
        password = request.POST['password']

        hashed_pwd = make_password(password) # created an hash password

        if models.User.objects.filter(email=email).exists():
            return render(request, "signup.html", {'msg':'User account already exists!'})

        user = models.User(name = name, email = email, phoneno = phoneno, password = hashed_pwd)
        user.save() # for saving in the tables

        return render(request,'login.html', {'msg':'Signedup successful!'})

    return render(request, "signup.html")
