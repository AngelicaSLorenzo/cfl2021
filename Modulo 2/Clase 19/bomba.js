"use strict"

// FORMULARIO PARA INICIAR EMAIL

// let btn = document.getElementById("btn-enviar")
// let inputEmail = document.getElementById("input-email")
// let inputConsulta = document.getElementById("input-consulta")

// btn.addEventListener("click", function(e) { 
//     verificarFormulario(inputEmail, inputConsulta)
// })

// function verificarFormulario(email, consulta){
//     if(!emailValido(email.value)){
//         alert("Debe ingresar un email válido.");
//         email.focus();
//         return;
//     }
// }

// function emailValido(email) {
//     console.log(email)
//       var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//       return re.test(email);
// }

// -------------------------------------------------------------------------------------------------------

// EDITAR ESTILOS
// let elem = document.getElementById("titulo")

// elem.classList.add("destacado");
// elem.classList.remove("favorito");

// let elem2 = document.querySelector("#section-header")
// elem2.setAttribute("class", "favorito")

// evento boton cambiador
// document.querySelector("#cambiador")
// addEventListener("click", intercambiarClase)

// function intercambiarClase() {
//     document.querySelector("p").classList.toggle("oculto");
// }
// -----------------------------------------------------------------------------------------------------

// THIS_DIV
// let el = document.getElementById("miDiv");
// el.addEventListener("click", function(e){
//     this.classList.toggle("clase");
// });

// --------------------------------------------------------------------------------------------------------

// BOTON VER_MAS
// let btns = document.querySelectorAll(".btn");

// for(let i=0; i <btns.length; i++){
//     btns[i].addEventListener("click", function(e){
//         let el = this.nextElementSibling;
//         el.classList.toggle("ver");
//     });
    
// }

// ------------------------------------------------------------------------------------------------------

// BOMBA
let btn = document.getElementById("btn");

btn.addEventListener('click', function(e){
  let t_bomba =  document.getElementById("inputBomba").value;
  alert("Corra en 5 segundos se activará la Bomba");
  setTimeout(function(){
  cuentaRegre(t_bomba); }, 5000); // llamado diferido 
});

function cuentaRegre(i) {
    let intervalo = setInterval(function() {
        document.getElementById("bomba").innerHTML = i;
        if (i === 0) {
            clearInterval(intervalo); // limpio intervalo para detener
            alert('BOOOOOM!!');
        }
        else {
            i--;
        }
    }, 1000);
}

