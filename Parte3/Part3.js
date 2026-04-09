import { productos, arrayPunto4 } from "../Datos/productos.js";

//8. Usar some() paara comprobar que exista algun producto mayor a 10000
const existeProductoCaro = (listaProductos, precioLimite) => {
    const existe = listaProductos.some(producto => producto.precio > precioLimite);
    console.log(`¿Existe algún producto con precio mayor a $${precioLimite}?`, existe);
};

existeProductoCaro(productos, 10000);
console.log("------------------------------");

//9. Usar every() para comprobar si todos los productos cuestan más de 1000
const todosProductosCaros = (listaProductos, precioMinimo) => {
    const todosCaros = listaProductos.every(producto => producto.precio > precioMinimo);
    console.log(`¿Todos los productos tienen un precio mayor a $${precioMinimo}?`, todosCaros);
};

todosProductosCaros(productos, 1000);
console.log("------------------------------");

//10. usar la lista arrayPunto4 y comprobar que tiene campera
const tieneCampera = (arrayNombres) => {
    const tiene = arrayNombres.includes("Campera");
    console.log("¿El array tiene la campera?", tiene);
};

tieneCampera(arrayPunto4);
console.log("------------------------------");
