class Estudiante {
    constructor(nombre, curso ,nota1, nota2){
        this.nombre = nombre
        this.curso = curso
        this.nota1 = nota1
        this.nota2 = nota2
    }
    getNombre(){
        return this.nombre
    }
    getCurso(){
        return this.curso
    }
    getPromedio(){
        var promedio = (this.nota1 + this.nota2) / 2
        return promedio
    }
}

class Escuela{
    constructor(){
        this.estudiantes = []
    }
    agregarEstudiante(estudiante){
        this.estudiantes.push(estudiante)
    }
    listarPorCurso(curso){
        var lista = []
        for (var i = 0; i < this.estudiantes.length; i++){
            if (this.estudiantes[i].getCurso() === curso){
                lista.push(this.estudiantes[i])
            }
        }

        if (lista.length === 0){
            return false
        }else{
            return lista
        }
    }
}


function crear(){
    document.getElementById("crear").style.display = "block"
    document.getElementById("listar").style.display = "none"
    document.getElementById("buscar").style.display = "none"
}
function listar(){
    document.getElementById("crear").style.display = "none"
    document.getElementById("listar").style.display = "block"
    document.getElementById("buscar").style.display = "none"
}
function buscar(){
    document.getElementById("crear").style.display = "none"
    document.getElementById("listar").style.display = "none"
    document.getElementById("buscar").style.display = "block"
}
