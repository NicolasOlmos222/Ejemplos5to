var usuario = localStorage.getItem("usuario")
var rec = JSON.parse(usuario)

var persona = {
    "nombre": "",
    "apellido": ""
}

document.getElementById("mensaje").innerHTML = "Hola " + rec.nombre + " "+rec.apellido

function iniciarsesion(){
    persona.nombre = document.getElementById("usuario").value
    persona.apellido = document.getElementById("contra").value

    localStorage.setItem("usuario", JSON.stringify(persona));

    window.location.href = "menu.html"
}