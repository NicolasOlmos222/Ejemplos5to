var nombre;
var edad;
var ciudad;

function LeerDatos(){
    nombre = document.getElementById("nombre").value
    edad = parseInt(document.getElementById("edad").value)
    ciudad = document.getElementById("ciudad").value

    if (ciudad == "Santa Fe"){
        alert("ES DE SANTA FE")
    }
}