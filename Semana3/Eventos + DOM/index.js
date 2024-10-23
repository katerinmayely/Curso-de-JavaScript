let submitBoton = document.querySelector("#submit-boton");

let respondio = () => {
    let opiniones = document.querySelectorAll('input[name="opinion"]');
    let respuesta = false;

    opiniones.forEach(opinion => {
        
        if (opinion.checked === true) {
            respuesta = true;
        }

    });

    return respuesta;
}

submitBoton.addEventListener('click', () => {
    let siRespondio = respondio();
    let body = document.querySelector("body");
    let respuestaPositiva = document.querySelector("#parrafo");

    if (siRespondio === true){
        body.style.backgroundColor = "green";
        respuestaPositiva.style.display = 'block';
    } else {
        body.style.backgroundColor = "red";
        alert("Debe seleccionar una opción!!");
    }

    console.log(siRespondio);
    console.log("El manejador de eventos funciona...");
})