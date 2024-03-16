from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin', admin.site.urls),
    path('', views.index, name="index"),
    # URLs para las vistas de cursos
    path('listarcurso/', views.listarcurso, name="listarcurso"),
    path('agregarcurso', views.agregarcurso, name="agregarcurso"),
    path('actualizarcurso', views.actualizarcurso, name="actualizarcurso"),
    path('eliminarcurso', views.eliminarcurso, name="eliminarcurso"),
    path('cambiar_estado_curso', views.cambiar_estado_curso, name='cambiar_estado_curso'),
]