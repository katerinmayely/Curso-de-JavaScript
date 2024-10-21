// Parentésis .... Funciones flecha
console.log("Estamos en consola.");

let nombre = "Kattherine";
let apellido = "Hernandez"

// Declaración normal de una función
function saludo1(nombre, apellido) {
    return "Hola " + nombre + " " + apellido;
}

// Funciones flecha o Arrow functions
let saludo = (nombre, apellido) => {
    return "Hola " + nombre + " " + apellido;
}

console.log(saludo1(nombre, apellido));
console.log(saludo(nombre, apellido));

// Resolución de ejercicio
let boton = document.querySelector("#boton");
console.log(boton);

let random = (rango) => {
    return Math.random() * (rango + 1);
}

let cambiarColorFondo = () => {
    let body = document.querySelector("body");
    let colorFondo = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    body.style.backgroundColor = colorFondo;
}

// rgb(12, 34, 56)

// Método para manejar eventos -> addEventListener("", funcion)
boton.addEventListener("click", cambiarColorFondo);