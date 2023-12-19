# accounts/views.py

from django.shortcuts import render, redirect
from django.contrib.auth.hashers import make_password, check_password
from .models import User

def user_login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        if User.objects.filter(user_name=username).exists():
            userdata = User.objects.filter(user_name=username)

            # Access the first element in the userdata list
            user = userdata[0]

            if check_password(password,user.user_password):  # returns True
                return render(request, "homepage.html", {'msg':'Loged in successful!'})
            else :
                return render(request, "login.html" , {'error_message':'Entered username or password is wrong!'})
        else:
            return render(request, "login.html", {'error_message':'User does not exists, click signup for registering.'})

    return render(request, "login.html")


def signup(request):
    if request.method == 'POST':
        user_name = request.POST['user_name']
        user_email = request.POST['user_email']
        user_phone_no = request.POST['user_phone_no']
        user_password = request.POST['user_password']
        # user_type = request.POST['user_type']

        hashed_pwd = make_password(user_password) # created an hash password

        if (User.objects.filter(user_name=user_name).exists() or (User.objects.filter(user_email = user_email).exists())):
            return render(request, "signup.html", {'error_message':'User account already exists!'})

        user = User(user_name = user_name, user_email = user_email, user_phone_no = user_phone_no, user_password = hashed_pwd)
        user.save() # for saving in the tables

        return render(request,'login.html', {'success_message':'Signedup successful!'})

    return render(request, "signup.html")
