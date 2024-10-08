class Producto {
    constructor(nombre, categoria, precio){
        this.nombre = nombre,
        this.categoria = categoria,
        this.precio = this.validarPrecio(precio),
        this.stock = 0
    }

    validarPrecio(precio) {
        if (precio < 0) {
            throw new Error("El precio no puede ser negativo.");
        }
        return precio;
    }

    actualizarStock(cantidad){

        if (typeof cantidad !== "number") {
            throw new Error("La cantidad debe ser un número.");
        }


        if (cantidad <= 0){
            this.stock -= Math.abs(cantidad)
            if (this.stock < 0) {
                this.stock = 0
            }
        } else {
            this.stock += cantidad
        }
    }
}


class Inventario {
    constructor() {
        this.arrayProductos = []
    }

    agregarProducto(producto) {
        if (producto instanceof Producto) {
            this.arrayProductos.push(producto)
            console.log(`Producto agregado: ${producto.nombre}`);
        } else {
            console.log("Error: El objeto no es un Producto válido.");
        }
    }

    eliminarProductoPorNombre(nombre){
        const indice = this.arrayProductos.findIndex(producto => producto.nombre === nombre);
        if (indice !== -1) {
            this.arrayProductos.splice(indice, 1);
            console.log(`Producto eliminado: ${nombre}`);
        } else {
            console.log("No hay ningún producto con ese nombre");
        }
    }

    buscarProductoPorNombre(nombre){
        const producto = this.arrayProductos.find(producto => producto.nombre === nombre);
        if (producto) {
            console.log(`Nombre: ${producto.nombre}\nCategoría: ${producto.categoria}\nPrecio: ${producto.precio}\nCantidad en stock: ${producto.stock}`);
        } else {
            console.log("No hay ningún producto con ese nombre");
        }
    }


    mostrarInventario() {
        if (this.arrayProductos.length === 0) {
            console.log("El inventario está vacío.");
        } else {
            console.log("Inventario:");
            this.arrayProductos.forEach((producto, index) => {
                console.log(`${index + 1}. Nombre: ${producto.nombre}, Categoría: ${producto.categoria}, Precio: ${producto.precio}, Stock: ${producto.stock}`);
            });
        }
    }
}


// Ejemplo de uso
const inventario = new Inventario();

// Crear algunos productos
const producto1 = new Producto("Poción de Curación", "Poción", 50);
const producto2 = new Producto("Varita Mágica", "Varita", 120);
const producto3 = new Producto("Libro de Hechizos", "Libro", 30);

// Agregar productos al inventario
inventario.agregarProducto(producto1);
inventario.agregarProducto(producto2);
inventario.agregarProducto(producto3);

// Mostrar inventario
inventario.mostrarInventario();

// Actualizar stock de los productos
producto1.actualizarStock(15); // Agregar 15 al stock de Poción de Curación
producto2.actualizarStock(10);  // Agregar 10 al stock de Varita Mágica
producto3.actualizarStock(-5);   // Restar 5 del stock de Libro de Hechizos

// Mostrar inventario actualizado
inventario.mostrarInventario();

// Buscar un producto por su nombre
inventario.buscarProductoPorNombre("Varita Mágica");

// Eliminar un producto por su nombre
inventario.eliminarProductoPorNombre("Libro de Hechizos");

// Mostrar inventario después de la eliminación
inventario.mostrarInventario();