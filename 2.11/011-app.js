
function lanzarDado(){
    return parseInt(6*Math.random()+1)
}


function bucleDados(){

    let dado1 = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6:0
    }

    let dado2 = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6:0
    }

    for(let i = 1; i <= 36000; i++){
        let numeroDado1 = lanzarDado()
        let numeroDado2 = lanzarDado()
    
        dado1[numeroDado1] += 1
        dado2[numeroDado2] += 1
    }
    
    return [dado1, dado2];
}


function mostrarDatos(dado, nombreDado) {
    console.log(`Resultados para ${nombreDado}:`);
    for (let cara in dado) {
        console.log(`Cara ${cara}: ${dado[cara]} veces`);
    }
    console.log("\n")
}

const [resultadosDado1, resultadosDado2] = bucleDados(); // Recibimos los resultados

mostrarDatos(resultadosDado1, "Dado 1");
mostrarDatos(resultadosDado2, "Dado 2");


