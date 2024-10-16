console.log("Hola, estamos en consola");

let nombre1 = "Juan",
    nombre2 = "Vanessa";

let miPrimerArreglo = [ "Juan", "Vanessa", "Héctor", "Valeria", 12, 3.5, true, false, [1, 2, 2] ];
let paisesCA = ["Belice", "Guatemala", "El Salvador", "Honduras", "Nicaragua", "Costa Rica", "Panamá"];

console.log(paisesCA);
console.log(miPrimerArreglo);

console.log("El primer país de la lista es " + paisesCA[0]);
console.log("El segundo país de la lista es " + paisesCA[1]);

console.log("El tamaño del arreglo es " + paisesCA.length);

for(let i = 0; i < paisesCA.length; i++){
    console.log(paisesCA[i]);
}

// Insertar un nuevo elemento al arreglo - push
paisesCA.push("Bahamas");
paisesCA.push("Puerto Rico");

console.log("\nCon dos elementos nuevos: ")
for(let i = 0; i < paisesCA.length; i++){
    console.log(paisesCA[i]);
}

//  Eliminar elementos del arreglo - pop
let elementoEliminado = paisesCA.pop();
console.log("\nValor eliminado: " + elementoEliminado);

console.log("\nDespués de eliminar un elemento")
for(let i = 0; i < paisesCA.length; i++){
    console.log(paisesCA[i]);
}

console.log("\nModificar un elemento del arreglo");
paisesCA[0] = "Rep. Dominicana";

console.log("\nDespués de modificar un elemento")
for(let i = 0; i < paisesCA.length; i++){
    console.log(paisesCA[i]);
}