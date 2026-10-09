const cuerpo = document.querySelector("body");
const botonModo = document.querySelector("#btn-tema");

let esDeNoche = false;

function alternarModo(){
    cuerpo.classList.toggle("noche");

    esDeNoche = !esDeNoche;

    if(esDeNoche) botonModo.textContent = "☀️ Modo dia";
    else botonModo.textContent = "🌑 Modo noche ";

    console.log("cambiando de modo");
}

botonModo.addEventListener("click", alternarModo);