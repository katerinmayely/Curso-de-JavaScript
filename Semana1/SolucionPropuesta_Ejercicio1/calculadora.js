/**
 * Crea una calculadora que realice operaciones básicas 
 * (suma, resta, multiplicación, división). El usuario podrá realizar 
 * múltiples cálculos hasta que decida terminar. Al finalizar, mostrará un 
 * mensaje con el total de operaciones realizadas.
 */

// También podemos declarar las variables de esta manera: escribiendo la palabra clave de declaración 
// una sola vez y separar las variables con comas.
// Es buena práctica declarar las variables al comienzo de un bloque de código.
let contadorOperaciones = 0,
    continuar = true,
    resultado,
    num1,
    num2,
    operacion;

/**
 * Importante: Cuando se ingresa un valor utilizando prompt, este es procesado como tipo de dato string;
 * por lo tanto, al utilizar el operador "+", este es identificado como un operador de concatenación, o sea,
 * en vez de realizar la suma, une ambos dígitos.
 * 
 * Para evitar lo anterior, usamos la función Number(), esta sirve para convertir cualquier tipo de dato a 
 * tipo Number (siempre y cuando tenga el formato de número).
 */

// Declaración de funciones
function sumar (a, b) {
    return Number(a) + Number(b);
}

function restar (a, b) {
    return Number(a) - Number(b);
}

function multiplicar (a, b) {
    return Number(a) * Number(b);
}

function dividir (a, b) {
    return Number(a) / Number(b);
}

// Esto se debe repetir cuántas veces el usuario quiera.
// Por tanto, podemos utilizar el bucle do-while para que se ejecute la instrucción y luego evalúe para continuar.
do {
    num1 = prompt("Ingrese el primer número:");
    num2 = prompt("Ingrese el segundo número:");

    // Podemos especificarle al usuario en qué queremos que ingrese la respuesta
    // En mi caso, cada número representa una operación
    operacion = prompt("¿Qué operación desea realizar?\n1. Suma\n2. Resta\n3. Multiplicación\n4.División");

    // Utilizamos la estructura condicional switch para evaluar los casos.
    switch (Number(operacion)) {
        case 1:
            resultado = sumar(num1, num2);
            break;
        case 2:
            resultado = restar(num1, num2);
            break;
        case 3:
            resultado = multiplicar(num1, num2);
            break;
        case 4:
            resultado = dividir(num1, num2);
            break;
        default:
            break;
    }

    // Realiza la operación e imprime el resultado
    // Utilizan los condicionales para decidir qué función ejecutar.
    alert("Resultado = " + resultado);
    console.log(resultado)

    // Se aumenta en 1 la cantidad de operaciones realizadas.
    contadorOperaciones ++;

    // Le pregunta si desea continuar
    continuar = confirm("¿Desea continuar?");

} while (continuar === true);


// Si ya no desea continuar, se termina el bucle y muestra la cantidad de
// operaciones realizadas
alert("Realizó " + contadorOperaciones + " operaciones.");