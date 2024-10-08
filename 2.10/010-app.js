

function askNumber() {
    let numeroUsuario = 0 
    
    while (numeroUsuario < 1 || numeroUsuario > 12 || isNaN(numeroUsuario) || !Number.isInteger(numeroUsuario) ) {
        numeroUsuario = Number(prompt("Introduzca un numero del 1 al 12: "))
    }   
    
    return numeroUsuario
}

function numberToMonth(number){
    let months = {
        1: ["Enero",31],
        2: ["Febrero",28],
        3: ["Marzo",31],
        4: ["Abril",30],
        5: ["Mayo",31],
        6: ["Junio",30],
        7: ["Julio",31],
        8: ["Agosto",31],
        9: ["Septiembre",30],
        10: ["Octubre",31],
        11: ["Noviembre",30],
        12: ["Diciembre",31]
    }

    let monthsData = months[number]
    let monthName = monthsData[0]
    let monthDays = monthsData[1]

    return `${monthName} tiene ${monthDays}`
}

let number = askNumber()

alert(numberToMonth(number))

