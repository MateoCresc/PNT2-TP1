import { productos } from "../Datos/productos.js";

//4. Obtener los nombres con .map(). Crear un nuevo array unicamente con los nombres.
const obtenerNombres = (listaProductos) => {
    const nombres = listaProductos.map(producto => producto.nombre);
    console.log("Nombres de los productos:", nombres);
};

obtenerNombres(productos);
console.log("------------------------------");

//5. Filtrar por categoria con filter(). Crear un nuevo array con los productos de la categoria "Ropa".
const filtrarPorCategoria = (listaProductos, categoria) => {
    const productosFiltrados = listaProductos.filter(producto => producto.categoria === categoria);
    console.log(`Productos de la categoria ${categoria}:`, productosFiltrados);
};

filtrarPorCategoria(productos, "Ropa");
console.log("------------------------------");

//6.Filtarar por precio con filter() de productos con precio mayor a 3000
const filtrarPorPrecio = (listaProductos, precioMinimo) => {
    const productosFiltrados = listaProductos.filter(producto => producto.precio > precioMinimo);
    console.log(`Productos con precio mayor a $${precioMinimo}:`, productosFiltrados);
};

filtrarPorPrecio(productos, 3000);
console.log("------------------------------");

//7. Buscar un producto especifico con find() para encontrar el producto gorra
const buscarProducto = (listaProductos, nombreProducto) => {
    const productoEncontrado = listaProductos.find(producto => producto.nombre === nombreProducto);
    console.log("Producto encontrado:", productoEncontrado);
};

buscarProducto(productos, "Gorra");