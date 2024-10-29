console.log("Primero");
console.log("Segundo");

setTimeout( () => console.log("Tercero"), 2000);

console.log("Cuarto");

// Promesas 
// then catch finally

let promesa = new Promise((resolve, reject) => {
    let exito = true;

    if(exito){
        resolve("Operación exitosa");
    } else {
        reject("Hubo un error");
    }
}) 

let funcionPrueba = () => {
    return promesa;
}

console.log(funcionPrueba());

funcionPrueba()
.then(() => {console.log("éxito")})
.catch(() => {console.log("error")})
.finally(() => {console.log("Se ejecutó")})

