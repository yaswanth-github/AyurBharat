from django.db import models

class User(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    phoneno = models.CharField(max_length=10)
    password = models.CharField(max_length=255)
    created_datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
