import { productos } from "../Datos/productos.js";

//11. Ordenar precios de menor a mayor con sort()
const ordenarPorPrecio = (listaProductos) => {
    const productosOrdenados = [...listaProductos].sort((a, b) => a.precio - b.precio);
    console.log("Productos ordenados por precio (menor a mayor):", productosOrdenados);
};

ordenarPorPrecio(productos);
console.log("------------------------------");

//12. usar map para crear un array de strings como "El producto Remera cuesta $1500 y pertenece a la categoría Ropa."
const crearDescripcion = (listaProductos) => {
    const descripciones = listaProductos.map(producto => `El producto ${producto.nombre} cuesta $${producto.precio} y pertenece a la categoría ${producto.categoria}.`);
    console.log("Descripciones de productos:", descripciones);
};

crearDescripcion(productos);
console.log("------------------------------");

//13. Agregar productos con spread creando un array con más productos y combinarlos con el array original
const agregarProductos = (listaProductos, nuevosProductos) => {
    const listaCombinada = [...listaProductos, ...nuevosProductos];
    console.log("Lista combinada de productos:", listaCombinada);
};

const nuevosProductos = [
    { id: 6, nombre: "Bufanda", precio: 800, categoria: "Accesorios" },
    { id: 7, nombre: "Medias", precio: 300, categoria: "Ropa" }
];

agregarProductos(productos, nuevosProductos);