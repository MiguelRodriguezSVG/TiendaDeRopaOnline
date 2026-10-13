const boton = document.querySelector("#btn-confirmar");
const mensaje = document.querySelector("#mensaje");

function mostrarMensaje(){
    mensaje.textContent = "Pedido confirmado - te atiende Miguel Eduardo Rodriguez Rocha";
    mensaje.classList.remove("oculto");
}

boton.addEventListener("click", mostrarMensaje);