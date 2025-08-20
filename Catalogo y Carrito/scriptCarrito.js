var carrito = localStorage.getItem("lista")
var Carritorec = JSON.parse(carrito)
mostrarCarrito()

function mostrarCarrito(){
    document.getElementById("carrito").innerHTML = ""
    for (var i = 0; i < Carritorec.length; i++){
        document.getElementById("carrito").innerHTML += Carritorec[i]["nombre"] + " Precio: $" + Carritorec[i]["precio"] + "<br>"
    }
}