from django import forms 
from django.forms import ModelForm, fields
from .models import Usuario
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class UsuarioForms(ModelForm):
    class Meta:
        model = Usuario
        fields = ['id_cliente','nombre','email','rut','direccion','ciudad']

class RegistroForm(UserCreationForm):


    class Meta:
        model = User
        fields = [
                'username',
                'first_name',
                'last_name',
                'email',
            ]
        labels = {
                'username': 'Nombre de usuario',
                'first_name': 'Nombre',
                'last_name': 'Apellidos',
                'email': 'Correo',
        }