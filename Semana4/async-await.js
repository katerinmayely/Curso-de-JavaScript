let obtenerUsuarios = async () => {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');
        const arreglo = await respuesta.json();
        console.log("estamos aquí...")
        console.log(arreglo);
    } catch (error) {
        console.log("Ups, ocurrió un error.")
    }
}

obtenerUsuarios();