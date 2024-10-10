let nombre = "Alberto";

// Declaración de la función
function saludar(nombre, apellido, edad) {
    console.log("Hola " + nombre + " " + apellido + " tu edad es " + edad);
}

function sumar(numero1, numero2){
    let suma = numero1 + numero2;
    return suma;
}

// Llamado de la función
saludar("Juan", "Perez", 20);

let num1 = 2;
let num2 = 3;

let suma = sumar(num1, num2);
console.log("El total es: " + suma);