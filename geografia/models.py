from django.db import models

class pais(models.Model):
    nombre = models.CharField(max_length=50)
    numero_habitantes = models.PositiveIntegerField()

    def __str__(self) -> str:
        return "{}".format(self.nombre)



class ciudad(models.Model):
    nombre = models.CharField(max_length=100)
    alcalde = models.CharField(max_length=100)
    pais = models.ForeignKey(pais, null=False, blank=False, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return "{} ({})".format(self.nombre, self.pais.nombre)
