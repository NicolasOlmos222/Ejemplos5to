class Estudiante{
    constructor(nombre, apellido, curso, nota1, nota2, nota3){
        this.nombre = nombre
        this.apellido = apellido
        this.curso  = curso
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
    }

    getNombre(){
        return this.nombre
    }

    getApellido(){
        return this.apellido
    }

    getCurso(){
        return this.curso
    }

    getPromedio(){
        var promedio=(this.nota1+this.nota2+this.nota3)/3
        return promedio
    }

    getMejorNota(){
        if (this.nota1>this.nota2 && this.nota1>this.nota3){
            return this.nota1
        }

        else if (this.nota2>this.nota1 && this.nota2>this.nota3){
            return this.nota2
        }

        else {
            return this.nota3
        }
    }


    getPeorNota(){
        if (this.nota1<this.nota2 && this.nota1<this.nota3){
            return this.nota1
        }

        else if (this.nota2<this.nota1 && this.nota2<this.nota3){
            return this.nota2
        }

        else {
            return this.nota3
        }
    }

}


class Escuela {
    constructor(){
        this.ListaEstudiantes = []
    }

    agregarEstudiante(estudiante){
        this.ListaEstudiantes.push(estudiante)
    }

    getEstudiantes(){
        return this.ListaEstudiantes
    }

    getEstudiantePorCurso(curso){
        var lista = []
        for (var i = 0; i < this.ListaEstudiantes.length; i ++){
            var estudiante = this.ListaEstudiantes[i]
            if (estudiante.getCurso() == curso){
                lista.push(estudiante)
            } 
        }

        return lista
    }


    getEstudiantePorPromedio(promedio){
        var lista = []
        for (var i = 0; i < this.ListaEstudiantes.length; i ++){
            var estudiante = this.ListaEstudiantes[i]
            if (estudiante.getPromedio() >= promedio){
                lista.push(estudiante)
            } 
        }

        return lista
    }

    getPeorNota(){
        var peorEstu = this.ListaEstudiantes[0]
        for (var i = 0; i < this.ListaEstudiantes.length; i ++){
            var estudiante = this.ListaEstudiantes[i]
            if (estudiante.getPeorNota() < peorEstu.getPeorNota()){
                peorEstu=estudiante
            }
        }
        return peorEstu
    }

    getMejorNota(){
        var MejorEstu = this.ListaEstudiantes[0]
        for (var i = 0; i < this.ListaEstudiantes.length; i ++){
            var estudiante = this.ListaEstudiantes[i]
            if (estudiante.getMejorNota() > MejorEstu.getMejorNota()){
                MejorEstu=estudiante
            }
        }
        return MejorEstu
    }

    getPromedioGeneral(){
        var suma = 0
        for (var i = 0; i < this.ListaEstudiantes.length; i ++){
            var estudiante = this.ListaEstudiantes[i]
            suma += estudiante.getPromedio() 
        }   
        var promedioGeneral = suma/this.ListaEstudiantes.length
        return promedioGeneral
    }
}

var escuela = new Escuela()

function crear(){
    document.getElementById("crear").style.display = "block"
    document.getElementById("listar").style.display = "none"
    document.getElementById("buscar").style.display = "none"
}

function listar(){
    document.getElementById("crear").style.display = "none"
    document.getElementById("listar").style.display = "block"
    document.getElementById("buscar").style.display = "none"

    var estudiantes = escuela.getEstudiantes()
    if (estudiantes.length > 0){
        document.getElementById("listar").innerHTML = ""
        for (var i = 0; i < estudiantes.length; i ++){
            var estudiante = estudiantes[i]
            document.getElementById("listar").innerHTML += estudiante.getNombre() + " " + estudiante.getApellido() + " Curso: " + estudiante.getCurso() + "<br>"
        }
    }else{
        document.getElementById("listar").innerHTML = "No hay estudiantes cargados"
    }
}

function buscar(){
    document.getElementById("crear").style.display = "none"
    document.getElementById("listar").style.display = "none"
    document.getElementById("buscar").style.display = "block"
}

function enviar(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var curso = document.getElementById("curso").value;
    var nota1 = document.getElementById("n1").value;
    var nota2 = document.getElementById("n2").value;
    var nota3 = document.getElementById("n3").value;

    var estudiante = new Estudiante(nombre, apellido, curso, nota1, nota2, nota3)
    escuela.agregarEstudiante(estudiante)
}