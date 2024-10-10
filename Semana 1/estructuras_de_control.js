// Declaración de variables -> var let const

//String
let cadena = "Soy una cadena";
const cadena2 = "Yo también soy una cadena.";

let cadena3 = cadena + " " + cadena2;

console.log(cadena);
console.log(cadena2);
console.log(cadena3);

// Tipo de dato Number
let numero1 = 1;
let numero2 = 2;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let cociente = numero1 / numero2;

console.log(suma + ", " + resta + ", " + multiplicacion + ", ", cociente + ". ");

// Tipo de dato Boolean 
let booleano1 = true;
let booleano2 = false;

let booleano3 = booleano1 && booleano2;
let booleano4 = booleano1 || booleano2;

console.log(booleano1);
console.log(booleano2);
console.log(booleano3);
console.log(booleano4);

// Estructuras de control

// Condicionales if if-else switch
if (booleano1 === false) {
    console.log("Sí, booleano1 es falso.")
} else {
    if(booleano1 === true){
        console.log("Sí, booleano1 es verdadero.")
    }
}

console.log("Estoy aquí...")

// Bucles while do-while for