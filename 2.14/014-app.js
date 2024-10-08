

function isLeapYear(number1,number2){

    if ((number1 < 2001 || number1 > 2500) || (number2 < 2001 || number2 > 2500)) {
        return [];
    }

    let numeroMenor;
    let numeroMayor;
    let anosBisiestos = [];

    

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
        if(i % 4 === 0){
            anosBisiestos.push(i)
        }
    }

    return anosBisiestos
}

let numerosPares = isLeapYear(2001, 2020)
if (numerosPares.length > 0) {
    numerosPares.forEach((number) => console.log(number));
} else {
    console.log("Ambos números deben estar entre 2001 y 2500.");
}



