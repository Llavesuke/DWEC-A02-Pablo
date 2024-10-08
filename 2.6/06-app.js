
function filtrarYTransformar(arrayNumeros){
    let arrayImpar = arrayNumeros.filter(numero => numero % 2 !== 0)
    
    return arrayImpar.map(numero => numero*2)
}

let numeros = [2, 5, 8, 3, 10, 7]

console.log(filtrarYTransformar(numeros))