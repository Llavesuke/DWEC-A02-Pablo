function calcularPrecioFinal(precioBase, descuentos) {
    if (typeof precioBase !== "number" || precioBase <= 0) {
        throw new Error("El precio base debe ser un número positivo.");
    }

    descuentos.forEach((descuento) => {
        if (typeof descuento !== "number" || descuento < 0 || descuento > 100) {
            throw new Error(`El descuento "${descuento}" no es válido. Debe estar entre 0 y 100.`);
        }
    });

    let precioFinal = precioBase;
    descuentos.forEach((descuento) => {
        precioFinal -= precioFinal * (descuento / 100);
    });

    return precioFinal;
}

function mostrarPrecioFinal(precioBase, descuentos) {
    try {
        const precioFinal = calcularPrecioFinal(precioBase, descuentos);
        console.log(`El precio final después de aplicar los descuentos es: ${precioFinal.toFixed(2)}€`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

let precioBase = 100;
let descuentos = [10, 20, 40];
mostrarPrecioFinal(precioBase, descuentos);

precioBase = 100;
descuentos = [10, 200];
mostrarPrecioFinal(precioBase, descuentos);

precioBase = -13;
descuentos = [10, 20];
mostrarPrecioFinal(precioBase, descuentos);
