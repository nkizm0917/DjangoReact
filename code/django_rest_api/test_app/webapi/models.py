from django.db import models

# Create your models here.
class Profile(models.Model):
    name = models.CharField(max_length=64)
    email = models.EmailField()
    message = models.CharField(max_length=256)
    created_at = models.DateTimeField(auto_now_add=True)

class Sim_results(models.Model):
    name = models.CharField(max_length=64)
    first = models.CharField(max_length=64)
    second = models.CharField(max_length=64)
    third = models.CharField(max_length=64)
