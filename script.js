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

const formulario = document.querySelector("#form-contacto");
const avisoContacto = document.querySelector("#aviso-contacto");

function revisarPedido(event){
    event.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;

    if(nombre === ""){
        avisoContacto.textContent = "Falta colocar el nombre";
        avisoContacto.classList.add("error");
        avisoContacto.classList.remove("exito");
    } else if(correo.includes("@") === false){
        avisoContacto.textContent = "Correo no valido";
        avisoContacto.classList.add("error");
        avisoContacto.classList.remove("exito");

    }else{
        avisoContacto.textContent = "Mensaje enviado";
        avisoContacto.classList.add("exito");
        avisoContacto.classList.remove("error");
    }
}

formulario.addEventListener("submit", revisarPedido);