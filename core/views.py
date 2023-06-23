from django.shortcuts import render
from argparse import Action
from django.shortcuts import render,redirect
from .models import Usuario
from .forms import  UsuarioForms

from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate, login
from django.urls import reverse_lazy
from .forms import RegistroForm
from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import ListView, CreateView, UpdateView, DeleteView, DetailView
from django.urls import reverse_lazy
from .forms import RegistroForm


# Create your views here.

def inicio(request):
    return render(request, "core/inicio.html")

def hombres(request):
    return render(request, "core/hombres.html")

def mujeres(request):
    return render(request, "core/mujeres.html")

def ninos(request):
    return render(request, "core/ninos.html")

def nosotros(request):
    return render(request, "core/nosotros.html")

def formulario2(request):
    return render(request, "core/formulario2.html")

def paginaApi(request):
    return render(request, "core/paginaApi.html")

def pagina_login(request):
    return render(request, 'login.html')


class RegistroUsuario(CreateView):
    model = User
    template_name = "Usuario/registrar.html"
    form_class = RegistroForm
    success_url = reverse_lazy('list_user')
 
 
class UserList(ListView):
    model = User
    template_name = 'Usuario/list_user.html'
