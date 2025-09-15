class Tarea{
    constructor(titulo, descripcion){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completado = false;
    }
    marcarCompleta(){
        this.completado = true;
    }

    getTitulo(){
        return this.titulo;
    }
}

var tarea;
var lista = [];

function enviar(){
    //Leo el formulario
    var titulo = "Limpiar"
    var descripcion = "Toda la casa"

    tarea = new Tarea(titulo, descripcion);
    lista.push(tarea)

    listarTareas();
}

function listarTareas(){
    document.getElementById("result").innerHTML = "";
    for(var i = 0; i < lista.length; i++){
        document.getElementById("result").innerHTML +=("Tarea: " + lista[i].getTitulo()) + "<br>";
    }
}