from django.urls import path
from .views import inicio, hombres, mujeres, ninos, nosotros, formulario2, paginaApi, RegistroUsuario, UserList, profile
from django.contrib.auth.views import LoginView

urlpatterns = [
    path('', inicio, name="inicio"),
    path('hombres.html', hombres, name="hombres"),
    path('mujeres.html', mujeres, name="mujeres"),
    path('ninos.html', ninos, name="ninos"),
    path('nosotros.html', nosotros, name="nosotros"),
    path('formulario2.html', formulario2, name="formulario2"),
    path('paginaApi.html', paginaApi, name="paginaApi"),
    path('login/', LoginView.as_view(template_name='login.html'), name='login'),
    path('registrar/', RegistroUsuario.as_view(), name='registrar'),
    path('listar_usuario/', UserList.as_view(), name='list_user'),
    path('profile/', profile, name='profile'),
]
