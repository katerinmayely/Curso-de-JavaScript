const encabezado = document.getElementById("encabezado");
console.log(encabezado);

const id_encabezado = encabezado.id;
console.log(id_encabezado);

const imagen = document.getElementById("imagen");
console.log(imagen);

// getAttribute setAttribute 
imagen.width
imagen.height

console.log(imagen.getAttribute("width"));
console.log(imagen.getAttribute("height"));

imagen.setAttribute("width", "90%")

let parrafo1 = document.querySelector("#parrafo1");
console.log(parrafo1);

parrafo1.style.backgroundColor = "pink";
parrafo1.style.color = "purple";

let body = document.getElementsByTagName("body");

console.log(body);
body[0].style.fontFamily = "helvetica";