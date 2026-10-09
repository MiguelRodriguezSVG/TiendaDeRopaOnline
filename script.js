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

const botonMenu = document.querySelector("#btn-menu");
const menu = document.querySelector("nav ul")

function alternarMenu(){
    menu.classList.toggle("abierto");
    console.log(menu.className);
}

botonMenu.addEventListener("click", alternarMenu);