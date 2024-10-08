

class Estudiante {
    constructor(nombre, edad, notas){
        this.nombre = nombre
        this.edad = edad
        this.notas = notas
    }

    agregarNota(nota){
        if (nota >= 0 && nota <= 10 ) {
            this.notas.push(nota)
            return "Nota agregada con exito"
        } else {
            return "No se ha podido agregar esta nota"
        }
    }

    calcularPromedio(){
        let suma = this.notas.reduce((suma, nota) => suma += nota)
        return suma/this.notas.length
    }

    haAprobado(){
        if (this.notas.every(nota => nota >= 5)) {
            return `${this.nombre} has aprobado!`
        } else {
            return `${this.nombre} no vuelvas al instituto. SUSPENSO!`
        }
    }
}

let estudiantePordiosero = new Estudiante("Raruto", 26, [6,7,10,5])

console.log(estudiantePordiosero.agregarNota(5))
console.log(estudiantePordiosero.calcularPromedio())
console.log(estudiantePordiosero.haAprobado())
