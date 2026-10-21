const formulario = document.querySelector("#form-turno");
const aviso = document.querySelector("#aviso-turno");

function validarFormulario(event){
    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;
    
    if(nombre === ""){
            event.preventDefault();

            aviso.textContent = "Falta colocar el nombre";
            aviso.classList.add("error");
            aviso.classList.remove("exito");
        } else if(correo.includes("@") === false){
            event.preventDefault();

            aviso.textContent = "Correo no valido";
            aviso.classList.add("error");
            aviso.classList.remove("exito");

        }else{
            aviso.textContent = "Turno reservar - Miguel Eduardo Rodriguez Rocha";
            aviso.classList.add("exito");
            aviso.classList.remove("error");
        }
}

formulario.addEventListener("submit", validarFormulario);
