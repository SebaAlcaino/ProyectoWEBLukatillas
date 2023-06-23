from django.urls import path
from  .views import inicio,hombres,mujeres,ninos,nosotros,formulario2,paginaApi, RegistroUsuario, pagina_login
from django.contrib.auth.views import LoginView, LogoutView
from django.contrib.auth import views as auth_views
urlpatterns = [     
               
               path('',inicio, name="inicio"), 
               path('hombres.html',hombres, name="hombres"),
               path('mujeres.html',mujeres, name="mujeres"),
               path('ninos.html',ninos, name="ninos"),
               path('nosotro.html',nosotros, name="nosotros"),
               path('formulario2.html',formulario2, name="formulario2"),
               path('paginaApi.html',paginaApi, name="paginaApi"),
               path('login/',pagina_login,name='login'),
               path('logout/', LogoutView.as_view(template_name='logout.html'), name='logout'),
               ] 