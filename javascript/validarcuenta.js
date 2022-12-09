function leerFormulario(event) {
    event.preventDefault();
    var nombre = document.getElementById("Nombre");
    var email = document.getElementById("Correo");
    var fecha = document.getElementById("Fecha");
    if(nombre.value == ""){
        var nombreError = document.getElementById("nombreError");
        nombreError.classList.remove("ocultar");
    }else{
        var nombreError = document.getElementById("nombreError");
        nombreError.classList.add("ocultar");
    }
    if(email.value == ""){
        var emailError = document.getElementById("emailError");
        emailError.classList.remove("ocultar");
    }else{
        var emailError = document.getElementById("emailError");
        emailError.classList.add("ocultar");
    }
    if(fecha.value == ""){
        var fechaError = document.getElementById("fechaError");
        fechaError.classList.remove("ocultar");
    }else{
        var fechaError = document.getElementById("fechaError");
        fechaError.classList.add("ocultar");
    }
    if(email.value != "" && nombre.value != "" && fecha.value != ""){
        var completo = document.getElementById("completo");
        completo.classList.remove("ocultar");
    }else{
        var completo = document.getElementById("completo");
        completo.classList.add("ocultar");
    }
    if(email.value == "" || nombre.value == "" || fecha.value == ""){
        var incompleto = document.getElementById("incompleto");
        incompleto.classList.remove("ocultar");
    }else{
        var incompleto = document.getElementById("incompleto");
        incompleto.classList.add("ocultar");
    }
}