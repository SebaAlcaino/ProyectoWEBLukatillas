from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.views.generic import ListView, CreateView
from .forms import RegistroForm
from django.urls import reverse_lazy

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

def profile(request):
    return render(request, 'core/profile.html')

class RegistroUsuario(CreateView):
    model = User
    template_name = "registrar.html"
    form_class = RegistroForm
    success_url = reverse_lazy('login')

class UserList(ListView):
    model = User
    template_name = 'listar_usuario.html'
    context_object_name = 'user_list'

