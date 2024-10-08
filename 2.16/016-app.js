class Personaje {
    constructor(nombre, raza){
        this.nombre = nombre,
        this.raza = raza,
        this.nivel = 1,
        this.vida = 100
    }

    atacar(enemigo) {
        const dano = 10
        enemigo.vida -= dano

        if (enemigo.vida <= 0) {
            enemigo.subirNivel()
            console.log(`${enemigo.nombre} ha sido derrotado!`);
        } else {
        console.log(`${enemigo.nombre} tiene ahora ${enemigo.vida} puntos de vida.`);
        }
    }

    recuperarVida(){
        const recuperacionVida = 20
        if (this.vida + 20 <= 100) {
            this.vida += 20
        } else {
            this.vida = 100
        }
    }

    subirNivel(){
        alert("Personaje derrotado, restableciendo a estado original")
        this.nivel = 1
        this.vida = 100
    }
}


const personajes = [
    new Personaje("Askeladd", "Humano corrupto"),
    new Personaje("Thorfinn", "Humano")
];


personajes[0].atacar(personajes[1]); 
personajes[1].recuperarVida(); 
personajes[1].atacar(personajes[0]); 

for(let i = 1; i <= 9; i++){
    personajes[1].atacar(personajes[0])
}