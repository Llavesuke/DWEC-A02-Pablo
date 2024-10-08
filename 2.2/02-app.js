
function repiteRepiteMetralleta(number){

    if (number <= 0){
        return ""
    } else if(Number.isInteger(number)){
        return "bauuuba" + repiteRepiteMetralleta(number - 1)
    } else {
        return "Valor introducido no valido"
    }
    
}

console.log(repiteRepiteMetralleta(2))