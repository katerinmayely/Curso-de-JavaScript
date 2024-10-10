// Switch
let nombre = "Mónica";

if(nombre === "Kattherine"){
    console.log("Estudiante 1");
} else {
    if(nombre === "Axel") {
        console.log("Estudiante 2.")
    }else {
        console.log("...")
    }
}

switch (nombre) {
    case "Kattherine": 
        console.log("Estudiante 1")
        break;
    case "Axel":
        console.log("Estudiante 2");
        break;
    case "Mailyn":
        console.log("Estudiante 3");
        break;
    case "Eber":
        console.log("Estudiante 4");
        break;
    case "Elizabeth":
        console.log("Estudiante 5");
        break;
    default:
        console.log("El nombre ingresado no está en las opciones...")
        break;
}

// Bucles 

//While - mientras
let contador = 0;

while (contador != 10) {
    console.log("Mónica");
    contador = contador + 1;
}

// do-while
let contador2 = 2;
do {
    console.log("Javascript");
    contador2 = contador2 + 1;
} while (contador2 != 3);

// for 
for (let i = 0; i < 5; i++) {
    console.log("Estoy en el for.")
}