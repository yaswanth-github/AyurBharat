from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        if not username:
            raise ValueError('Users must have a username')
        user = User(email=self.normalize_email(email), username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password):
        user = self.create_user(email, username, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    user_name = models.CharField(max_length=255, unique=True)
    user_email = models.EmailField(max_length=255, unique=True)
    user_phone_no = models.CharField(max_length=20, blank=True, unique=True)
    user_password = models.CharField(max_length=255)
    user_type = models.CharField(max_length=10)
    user_created_datetime = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'user_name'
    REQUIRED_FIELDS = ['user_name']

    objects = UserManager()

    def __str__(self):
        return self.user_name

    class Meta:
        db_table = 'User'
        app_label = 'accounts'