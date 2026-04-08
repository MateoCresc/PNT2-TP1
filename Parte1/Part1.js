import { productos } from "../Datos/productos.js";

//1
const mostrarPrimerProducto = () => {
    const primerProducto = productos[0];
    console.log("Primer producto:", primerProducto);
};

mostrarPrimerProducto();
console.log("------------------------------");

//2
const mostrarProductos = () => {
    for (const producto of productos) {
        console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
    }
};

mostrarProductos();
console.log("------------------------------");

//3
const mostrarProductosForEach = () => {
    productos.forEach(producto => {
        console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
    });
};

mostrarProductosForEach();