/**
 * Crea una calculadora que realice operaciones básicas 
 * (suma, resta, multiplicación, división). El usuario podrá realizar 
 * múltiples cálculos hasta que decida terminar. Al finalizar, mostrará un 
 * mensaje con el total de operaciones realizadas.
 */

let contadorOperaciones = 0;
let continuar = true;
let resultado;

// Esto se debe repetir cuántas veces el usuario quiera.
let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");
let operacion = prompt("¿Qué operación desea realizar?");

// Realiza la operación e imprime el resultado
// Utilizan los condicionales para decidir qué función ejecutar.
console.log("Resultado" + resultado);

// Le pregunta si desea continuar
continuar = confirm("¿Desea continuar?");
console.log(continuar);

// Si ya no desea continuar, se termina el bucle y muestra la cantidad de
// operaciones realizadas
alert("Realizó " + contadorOperaciones + " operaciones.");