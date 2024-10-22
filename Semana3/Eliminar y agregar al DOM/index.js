console.log("Ya en consola!!");

let btnAgregar = document.querySelector("#agregarBtn");

let agregarTarea = () => {
    console.log("Agregando...");

    // Creación del elemento
    let nuevaTarea = document.createElement('li');

    // Creación del contenido de la tarea
    let contenedorTexto = document.createElement('span');
    let texto = document.querySelector("#entrada-texto").value;

    contenedorTexto.textContent = texto;

    // Creacion del Boton
    let botonEliminar = document.createElement('button');
    botonEliminar.textContent = "Eliminar";

    // Lógica para eliminar
    botonEliminar.addEventListener('click', () => {
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

btnAgregar.addEventListener('click', agregarTarea);