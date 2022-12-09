function leerFormulario(event) {
    event.preventDefault();
    var pendiente = document.getElementById("pendiente");
    var listo = document.getElementById("listo");

    if(pendiente.value == ""){
        var pendienteError = document.getElementById("pendienteError");
        pendienteError.classList.remove("ocultar");
    }else{
        var pendienteError = document.getElementById("pendienteError");
        pendienteError.classList.add("ocultar");
    }
    if(listo.value == ""){
        var listoError = document.getElementById("listoError");
        listoError.classList.remove("ocultar");
    }else{
        var listoError = document.getElementById("listoError");
        listoError.classList.add("ocultar");
    }
    if(pendiente.value == ""|| listo.value == "" ) {
        var incompleto = document.getElementById("incompleto");
        incompleto.classList.remove("ocultar");
    }else{
        var incompleto = document.getElementById("incompleto");
        incompleto.classList.add("ocultar");
    }
    

}