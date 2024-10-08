

class Animal {
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }

    hablar() {
        return "Sonido animalistico"
    }
}

class Perro extends Animal {

    hablar() {
        return "Guau"
    }
}

class Gato extends Animal {
    hablar() {
        return "Meow"
    }
}

let perritoMono = new Perro("Rechoncho", 15)
let gatitoFeo = new Gato("Asco", 8)

console.log(perritoMono.hablar())
console.log(gatitoFeo.hablar())
