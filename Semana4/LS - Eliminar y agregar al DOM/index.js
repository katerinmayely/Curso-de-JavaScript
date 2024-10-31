console.log("Ya en consola!!");

let crearTarea = (texto) => {
    console.log("Creando...");

    // Creación del elemento
    let nuevaTarea = document.createElement('li');

    // Creación del contenido de la tarea
    let contenedorTexto = document.createElement('span');

    contenedorTexto.textContent = texto;

    // Creacion del Boton
    let botonEliminar = document.createElement('button');
    botonEliminar.textContent = "Eliminar";

    // Lógica para eliminar
    botonEliminar.addEventListener('click', () => {
        let indice = tareas.indexOf(texto);
        tareas.splice(indice, 1);
        localStorage.setItem("tareas", JSON.stringify(tareas));

        nuevaTarea.remove();
    });

    // Aplicar estilos
    nuevaTarea.classList.add('todo-item');

    // Agregar dentro del li
    nuevaTarea.appendChild(contenedorTexto);
    nuevaTarea.appendChild(botonEliminar);

    // Agregar dentro del ul
    let contenedor = document.querySelector("#contenedor");
    contenedor.appendChild(nuevaTarea);
}

// ----------------------
let tareas = [];
// ----------------------

const mostrarTareas = () => {
    tareas = JSON.parse(localStorage.getItem("tareas"));
    console.log(tareas);
    
    for (let i = 0; i < tareas.length; i++) {
        crearTarea(tareas[i]);
    }
}

mostrarTareas();

// ----------------------

let btnAgregar = document.querySelector("#agregarBtn");

let agregarTarea = () => {
    console.log("Agregando...");

    // Texto que contendrá la tarea
    let texto = document.querySelector("#entrada-texto").value;

    tareas.push(texto); // Agregar la nueva tarea al arreglo
    localStorage.setItem("tareas", JSON.stringify(tareas)); // Actualizar el arreglo en localStorage

    crearTarea(texto);
}

btnAgregar.addEventListener('click', agregarTarea);