

let libro = {
    titulo: "Dragon Ball Z",
    autor: "Akira Toriyama",
    paginas: "10000",

    resumen() {
        return "La mejor historia del mundo escrita por el maestro Toriyama. Goku se pelea y siempre gana"
    }
}

let libro2 = {
    titulo: "Naruto",
    autor: "Masashi Kishimoto",
    paginas: "10000",

    resumen() {
        return "Naruto con el 9 colas pelea contra los malos y los evangeliza"
    }
}

let libro3 = {
    titulo: "Don Quijote",
    autor: "Miguel de Cervantes Saavedra",
    paginas: "1500",

    resumen() {
        return "Don Quijote esta loco y se va de aventuras"
    }
}

let arrayLibros = [libro, libro2, libro3]

arrayLibros.forEach(libro => console.log(libro.resumen()))
