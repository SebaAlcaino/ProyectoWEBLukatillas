from django.db import models

# Create your models here.

class Usuario (models.Model): 
    id_cliente = models.IntegerField(primary_key=True, verbose_name= "Id_cliente") 
    nombre = models.CharField(max_length=50,blank=False, null=False, verbose_name="Nombre Cliente") 
    email  = models.CharField(max_length=50,blank=False, null=False, verbose_name="Email") 
    rut = models.IntegerField(blank=False, null=False,verbose_name="Rut") 
    direccion = models.CharField(max_length=50,blank=False, null=False, verbose_name="Direccion") 
    ciudad = models.CharField(max_length=50,blank=False, null=False, verbose_name="Ciudad") 

    def str(self):
        return self.nombre
    
