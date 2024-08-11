from django.db import models

class Test(models.Model):
    testId = models.IntegerField()
    name = models.CharField(max_length=50)

