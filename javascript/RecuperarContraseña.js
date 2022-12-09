function leerFormulario(event) {
    event.preventDefault();
    var correo = document.getElementById("correo");
    if(correo.value == ""){
        var correoError = document.getElementById("correoError");
        correoError.classList.remove("ocultar");
    }else{
        var correoError = document.getElementById("correoError");
        correoError.classList.add("ocultar");
    }
    if(correo.value != ""){
        var completo = document.getElementById("completo");
        completo.classList.remove("ocultar");
        window.location.href = 'RecuperarContraseña2';
    }else{
        var completo = document.getElementById("completo");
        completo.classList.add("ocultar");
    }
    if(correo.value == ""){
        var incompleto = document.getElementById("incompleto");
        incompleto.classList.remove("ocultar");
    }else{
        var incompleto = document.getElementById("incompleto");
        incompleto.classList.add("ocultar");
    }
}