let persona1 = {
    "nombre": {
        primerNombre: "Kattherine",
        segundoNombre: "Mayely",
        primerApellido: "Hernandez"
    },
    "edad": 21,
    "trabaja": true
}

console.log(persona1);
console.log("Mi nombre es " + persona1.nombre.primerNombre);
console.log("Mi nombre completo es: " + persona1.nombre.primerNombre + " " + persona1.nombre.segundoNombre + " " + persona1.nombre.primerApellido);