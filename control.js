var form = document.getElementById ("formulario");
var usuario = document.getElementById ("usuario");
var clave = document.getElementById ("clave");

var regExp = /\w+@\w/;

function validar (e){
    if (usuario.value === ""){
        alert("Por favor ingrese un usuario");
        e.preventDefault();
    } else if (!regExp.test(usuario.value)){
        alert("Por favor ingrese un correo válido");
        e.preventDefault();
    } else if (clave.value === ""){
        alert("Por favor ingrese una clave");
        e.preventDefault();
    } else{
        alert("¡Formulario Enviado!");
    }

}

form.addEventListener("submit",validar);