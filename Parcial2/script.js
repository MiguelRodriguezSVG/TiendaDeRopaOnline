const formulario = document.querySelector("#form-turno");
const aviso = document.querySelector("#aviso-turno");

function validarFormulario(event){
    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;
    
    if(nombre === ""){
            event.preventDefault();
            avisoContacto.textContent = "Falta colocar el nombre";
            avisoContacto.classList.add("error");
            avisoContacto.classList.remove("exito");
        } else if(correo.includes("@") === false){
            event.preventDefault();
            avisoContacto.textContent = "Correo no valido";
            avisoContacto.classList.add("error");
            avisoContacto.classList.remove("exito");

        }else{
            avisoContacto.textContent = "Turno reservar - Miguel Eduardo Rodriguez Rocha";
            avisoContacto.classList.add("exito");
            avisoContacto.classList.remove("error");
        }
}


