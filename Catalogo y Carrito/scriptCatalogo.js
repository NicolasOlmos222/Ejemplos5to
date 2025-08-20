
//LISTA PRODUCTOS

var listaProductos = [
    {"nombre":"Producto 1", "precio": 100},
    {"nombre":"Producto 2", "precio": 120},
    {"nombre":"Producto 3", "precio": 150},
    {"nombre":"Producto 4", "precio": 90}
]

var listaCarrito = []

function agregarAlCarrito(numero){
    if (numero == 1){
        listaCarrito.push(listaProductos[numero - 1])
    }else if (numero == 2){
        listaCarrito.push(listaProductos[numero - 1])
    }else if (numero == 3){
        listaCarrito.push(listaProductos[numero - 1])
    }else if(numero == 4){
        listaCarrito.push(listaProductos[numero - 1])
    }
    localStorage.clear();
    localStorage.setItem("lista", JSON.stringify(listaCarrito));
    
}
