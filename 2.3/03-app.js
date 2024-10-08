

let arrayNumeros = [3, 12, 54, 18, 27]

let arrayFiltrado = arrayNumeros.filter(numero => numero > 20)

console.log(arrayFiltrado)

let arrayReducido = arrayNumeros.reduce((total, numeroActual) => total + numeroActual)

console.log(arrayReducido)

let arrayDividido = arrayNumeros.map(numero => parseInt(numero/2))

console.log(arrayDividido)