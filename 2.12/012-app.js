
function askNumber(order) {
    let numeroUsuario = 0;
    
    while (true) {
        numeroUsuario = Number(prompt(`Introduzca el ${order} número del 1 al 100:`));
        
        if (isNaN(numeroUsuario) || !Number.isInteger(numeroUsuario)) {
            console.log("Por favor, introduzca un número entero válido.");
        } else if (numeroUsuario < 1 || numeroUsuario > 100) {
            console.log("El número debe estar entre 1 y 100."); 
        } else {
            console.log(`Has ingresado el ${order} número: ${numeroUsuario}.`);
            break;
        }
    }
    
    return numeroUsuario;
}



function findPairs(number1, number2){
    let numeroMenor;
    let numeroMayor;
    let numerosPares = [];

    if (number1 > number2){
        numeroMayor = number1
        numeroMenor = number2
    } else if (number1 < number2){
        numeroMayor = number2
        numeroMenor = number1
    } else {
        return  []
    }

    for(let i = numeroMenor; i <= numeroMayor; i++){
        if(i % 2 === 0){
            numerosPares.push(i)
        }
    }

    return numerosPares
}

let number1 = askNumber("primer"); 
let number2 = askNumber("segundo");


let numerosPares = findPairs(number1,number2)

if (numerosPares.length > 0) {
    numerosPares.forEach((number) => console.log(number));
} else {
    console.log("Numeros iguales, nada que mostrar");
}
