from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponseNotFound
from .models import Cursos

def index(request):
    return render(request, "index.html")

def listarcurso(request):
    cursos = Cursos.objects.all()
    datos = {'cursos': cursos}
    return render(request, "crud_usuarios/listarcurso.html", datos)

def agregarcurso(request):
    if request.method == "POST":
        if request.POST.get('nombre') and request.POST.get('descripcion') and request.POST.get('duracion') and request.POST.get('creditos'):
            curso = Cursos(
                nombre=request.POST.get('nombre'),
                descripcion=request.POST.get('descripcion'),
                duracion=request.POST.get('duracion'),
                creditos=request.POST.get('creditos'),
            )
            curso.save()
        return redirect('listarcurso')
    else:
        return render(request, "crud_usuarios/agregarcurso.html")

def actualizarcurso(request):
    if request.method == 'POST':
        if request.POST.get('id') and request.POST.get('nombre') and request.POST.get('descripcion') and request.POST.get('duracion') and request.POST.get('creditos'):
            curso = Cursos.objects.get(idcurso=request.POST.get('id'))
            curso.nombre = request.POST.get('nombre')
            curso.descripcion = request.POST.get('descripcion')
            curso.duracion = request.POST.get('duracion')
            curso.creditos = request.POST.get('creditos')
            curso.save()
        return redirect('listarcurso')
    else:
        cursos = Cursos.objects.all()
        datos = {'cursos': cursos}
        return render(request, "crud_usuarios/actualizarcurso.html", datos)


def eliminarcurso(request):
    if request.method == 'POST':
        if request.POST.get('id'):
            id_a_borrar = request.POST.get('id')
            try:
                curso = Cursos.objects.get(id_curso=id_a_borrar)
                curso.delete()
                return redirect('listarcurso')
            except Cursos.DoesNotExist:
                return HttpResponseNotFound("El curso que intentas eliminar no existe.")
    else:
        cursos = Cursos.objects.all()
        datos = {'cursos': cursos}
        return render(request, "crud_usuarios/eliminarcurso.html", datos)

def cambiar_estado_curso(request):
    if request.method == 'POST':
        curso_id = request.POST.get('curso_id')
        nuevo_estado = request.POST.get('nuevo_estado')
        
        try:
            curso = Cursos.objects.get(idcurso=curso_id)
            curso.activo = nuevo_estado
            curso.save()
            return JsonResponse({'success': True})
        except Cursos.DoesNotExist:
            return JsonResponse({'success': False, 'message': 'Curso no encontrado'})
    
    return JsonResponse({'success': False, 'message': 'Solicitud inválida'})