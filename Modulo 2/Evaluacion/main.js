"use strict"
let miBoton = document.querySelector("button");
let miInput = document.querySelector("input");
let miOl = document.querySelector("ol");
let limpiar = document.querySelector("#limpiar");

miBoton.addEventListener("click", agregarTarea);
limpiar.addEventListener("click", limpiar);

function agregarTarea() {
    let tareaNueva = document.createElement("li");
    tareaNueva.innerHTML = miInput.value;
    
    miOl.appendChild(tareaNueva);
}

// function limpiar(){
//     // no me doy cuenta como hacerlo
// }


