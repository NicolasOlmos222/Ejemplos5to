class Alumno{
    constructor(nombre, condicion){
        this.nombre = nombre;
        this.condicion = condicion;
    }

    getNombre(){
        return this.nombre;
    }

    getCondicion(){
        return this.condicion;
    }

    cambiarCondicion(){
        this.condicion = !this.condicion;
    }
}

var listaAlumnos = [new Alumno("Alumno 1", true), 
                    new Alumno("Alumno 2", false), 
                    new Alumno("Alumno 3", true)];

listarAlumnos()

function listarAlumnos(){
    //Lista los alumnos en el contenedor "lista" y le agrega un boton para poder cambiar la condicion:
    var contenedor = document.getElementById("lista");

    contenedor.innerHTML = "";
    for(var i = 0; i < listaAlumnos.length; i++){
        //1. Guarda un alumno en la variable
        var alumno = listaAlumnos[i];

        contenedor.innerHTML += alumno.getNombre() + " - " + alumno.getCondicion() + "<button onclick='cambiarCondicion(" + i + ")'>Cambiar Condicion</button>" + "<br>";
    }
}

function cambiarCondicion(indice){
    var alumno = listaAlumnos[indice];
    alumno.cambiarCondicion();
    listarAlumnos();
}