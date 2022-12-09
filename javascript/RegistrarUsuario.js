function leerFormulario(event) {
    event.preventDefault();
    var Contraseña = document.getElementById("Contraseña");
    var Cedula = document.getElementById("id");
    var tipo = document.getElementById("tipo");
    var foto = document.getElementById("foto")
    var codigo = document.getElementById("codigo")
    if(Contraseña.value == ""){
        var ContraseñaError = document.getElementById("contraseñaError");
        ContraseñaError.classList.remove("ocultar");
    }else{
        var ContraseñaError = document.getElementById("contraseñaError");
        ContraseñaError.classList.add("ocultar");
    }
    if(codigo.value == ""){
        var codigoError = document.getElementById("codigoError");
        codigoError.classList.remove("ocultar");
    }else{
        var codigoError = document.getElementById("codigoError");
        codigoError.classList.add("ocultar");
    }
    if(Cedula.value == ""){
        var cedulaError = document.getElementById("cédulaError");
        cedulaError.classList.remove("ocultar");
    }else{
        var cedulaError = document.getElementById("cédulaError");
        cedulaError.classList.add("ocultar");
    }
    if(tipo.value == 0){
        var tipoError = document.getElementById("tipoError");
        tipoError.classList.remove("ocultar");
    }else{
        var tipoError = document.getElementById("tipoError");
        tipoError.classList.add("ocultar");
    }
    if(foto.value == ""){
        var fotoError = document.getElementById("fotoError");
        fotoError.classList.remove("ocultar");
    }else{
        var fotoError = document.getElementById("fotoError");
        fotoError.classList.add("ocultar");
    }
    if(Contraseña.value != "" && Cedula.value != "" && tipo.value != "" && foto.value != "" && codigo.value != ""){
        var completo = document.getElementById("completo");
        completo.classList.remove("ocultar");
    }else{
        var completo = document.getElementById("completo");
        completo.classList.add("ocultar");
    }
    if(Contraseña.value == "" || Cedula.value == "" || tipo.value == "" || foto.value == "" || codigo.value == ""){
        var incompleto = document.getElementById("incompleto");
        incompleto.classList.remove("ocultar");
    }else{
        var incompleto = document.getElementById("incompleto");
        incompleto.classList.add("ocultar");
    }
}
function mostrarContrasena(){
    var tipo = document.getElementById("Contraseña");
    var boton = document.getElementById("contra")
    if(tipo.type == "password"){
        tipo.type = "text";
        boton.classList.add("usando")
    }else{
        tipo.type = "password";
        boton.classList.remove("usando")
    }
}