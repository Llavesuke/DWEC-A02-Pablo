
function calcularSumaPrecios(arrayObjetos){

    return arrayObjetos.reduce((total, objeto) => {
        return total + objeto.precio
    }, 0)
}

const productosPrueba = [
    { nombre: "Manzana", precio: 1.20 },
    { nombre: "Banana", precio: 0.50 },
    { nombre: "Naranja", precio: 0.80 },
    { nombre: "Fresa", precio: 2.00 },
    { nombre: "Kiwi", precio: 1.50 }
];

const totalPrecio = calcularSumaPrecios(productosPrueba);

console.log(`La suma total de los precios es: $${totalPrecio.toFixed(2)}`);
