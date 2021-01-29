from django.db import models

# Create your models here.

class Email(models.Model):
    email = models.TextField(blank=True, null=True)

class Treet(models.Model):
    content = models.TextField(blank=True, null=True)
    image = models.FileField(upload_to='images/', blank=True, null=True)