from django.db import models


# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=100, default="Not Assigned")
    priority = models.CharField(max_length=100, default="Low")
    description = models.CharField(max_length=500, default="Coming soon")
    
    def __str__(self):
        return self.name