from django.db import models
from projects.models import Project
from authentication.models import User
# Create your models here.


class Contractor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=' ')
    first_name = models.CharField(max_length=100, default=' ')
    last_name = models.CharField(max_length=100, default=' ')
    expertise = models.CharField(max_length=100)
    project = models.ManyToManyField(Project)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    