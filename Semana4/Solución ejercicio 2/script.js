console.log("En consola!");
// Solución parcial al ejercicio de la semana #2

// Objeto
const usuario = {
    nombre: '',
    colorFondo: ''
}

// Arreglo
const tareas = ["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4", "Tarea 5", "Tarea z"];

// Simulación de la actualización del perfil
let actualizarPerfil = () => {
    let nombreUsuario = document.querySelector("#name-input").value;
    let colorPreferido = document.querySelector("#color-input").value;

    console.log(nombreUsuario, colorPreferido);

    if(nombreUsuario){
        usuario.nombre = nombreUsuario;
        document.querySelector("#greeting").innerText = `Hola, ${usuario.nombre}`;
        document.querySelector("#user-name").innerText = usuario.nombre;       
    }

    if(colorPreferido){
        usuario.colorFondo = colorPreferido;
        document.querySelector("#profile").style.backgroundColor = usuario.colorFondo;
        document.querySelector("#user-color").innerText = usuario.colorFondo;       
    }
}

// Con eventos (Esto es adicional)
let boton = document.querySelector("#update-profile");
boton.addEventListener('click', actualizarPerfil);