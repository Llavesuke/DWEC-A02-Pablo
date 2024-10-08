// Función que determina los años bisiestos en un rango dado
function isLeapYear(number1, number2) {
    // Validar que ambos números estén entre 2001 y 2500
    if ((number1 < 2001 || number1 > 2500) || (number2 < 2001 || number2 > 2500)) {
        // Si alguno de los números está fuera del rango, retornar un array vacío
        return [];
    }

    let numeroMenor; 
    let numeroMayor;
    let anosBisiestos = []

    // Determinar cuál de los dos números es mayor y cuál es menor
    if (number1 > number2) {
        numeroMayor = number1;
        numeroMenor = number2;
    } else if (number1 < number2) {
        numeroMayor = number2;
        numeroMenor = number1;
    } else {
        // Si los números son iguales, retornar un array vacío
        return [];
    }

    // Iterar a través de todos los años en el rango numeroMenor-numeroMayor
    for (let i = numeroMenor; i <= numeroMayor; i++) {
        // Verificar si el año es bisiesto
        if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
            // Si es bisiesto, agregarlo al array
            anosBisiestos.push(i);
        }
    }

    // Retornar el array con los años bisiestos encontrados
    return anosBisiestos;
}

// Prueba de la función con diferentes escenarios

// Escenario 1: Rango válido con años bisiestos
let numerosBisiestos1 = isLeapYear(2001, 2020);
console.log("Años bisiestos entre 2001 y 2020:");
if (numerosBisiestos1.length > 0) {
    numerosBisiestos1.forEach((year) => console.log(year)); // Imprimir años bisiestos
} else {
    console.log("No hay años bisiestos en este rango.");
}

// Escenario 2: Rango fuera del límite inferior
let numerosBisiestos2 = isLeapYear(1990, 2005);
console.log("\nEscenario 2 - Rango fuera del límite inferior:");
if (numerosBisiestos2.length > 0) {
    numerosBisiestos2.forEach((year) => console.log(year));
} else {
    console.log("Ambos números deben estar entre 2001 y 2500.");
}

// Escenario 3: Rango fuera del límite superior
let numerosBisiestos3 = isLeapYear(2501, 2600);
console.log("\nEscenario 3 - Rango fuera del límite superior:");
if (numerosBisiestos3.length > 0) {
    numerosBisiestos3.forEach((year) => console.log(year));
} else {
    console.log("Ambos números deben estar entre 2001 y 2500.");
}

// Escenario 4: Números iguales
let numerosBisiestos4 = isLeapYear(2012, 2012);
console.log("\nEscenario 4 - Números iguales:");
if (numerosBisiestos4.length > 0) {
    numerosBisiestos4.forEach((year) => console.log(year));
} else {
    console.log("No hay años bisiestos en este rango.");
}

// Escenario 5: Rango válido sin años bisiestos
let numerosBisiestos5 = isLeapYear(2001, 2003);
console.log("\nEscenario 5 - Rango válido sin años bisiestos:");
if (numerosBisiestos5.length > 0) {
    numerosBisiestos5.forEach((year) => console.log(year));
} else {
    console.log("No hay años bisiestos en este rango.");
}
