lista = [

]

listaProductos = [
    {
        nombre: "Producto 1",
        precio: 10
    },
    {
        nombre: "Producto 2",
        precio: 20
    },
    {
        nombre: "Producto 3",
        precio: 30
    }
]
function añadirProducto(id){
    producto = listaProductos[id]
    lista.push(producto)
    mostrarCarrito()
}

function mostrarCarrito(){
    document.getElementById("carrito").innerHTML = ""
    for (let i = 0; i < lista.length; i++) {
        document.getElementById("carrito").innerHTML += "<p>" + lista[i].nombre + "</p>"
    }
}
