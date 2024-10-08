let matriz = [[1,8],[2],[3],[4],[5],[6]]

function aplanar(matriz) {
    return matriz.reduce((matrizAplanada, arrayActual) => {
    if (Array.isArray(arrayActual)){
        arrayActual.forEach(numero => matrizAplanada.push(numero))
    } else {
        matrizAplanada.push(arrayActual)
    }

    return matrizAplanada
}, [])

}


function promedio(matriz){
    let suma = matriz.reduce((media, numero) => media += numero, 0) 

    return parseFloat((suma/matriz.length).toFixed(2))
}
let nuevaMatriz = aplanar(matriz)
let media = promedio(nuevaMatriz)

console.log(nuevaMatriz)
console.log(media)