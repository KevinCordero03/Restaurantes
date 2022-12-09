function leerFormulario(event) {
    event.preventDefault();
    var nueva = document.getElementById("nueva");
    var verificar = document.getElementById("verificar");
    if(nueva.value == ""){
        var nuevaError = document.getElementById("nuevaError");
        nuevaError.classList.remove("ocultar");
    }else{
        var nuevaError = document.getElementById("nuevaError");
        nuevaError.classList.add("ocultar");
    }
    if(verificar.value == ""){
        var verificarError = document.getElementById("verificarError");
        verificarError.classList.remove("ocultar");
    }else{
        var verificarError = document.getElementById("verificarError");
        verificarError.classList.add("ocultar");
    }
    if(nueva.value != "" && verificar.value != ""){
        var completo = document.getElementById("completo");
        completo.classList.remove("ocultar");
        modificarContraseña();
        window.location.href = 'iniciarSesion';
    }else{
        var completo = document.getElementById("completo");
        completo.classList.add("ocultar");
    }
    if(nueva.value == "" || verificar.value == ""){
        var incompleto = document.getElementById("incompleto");
        incompleto.classList.remove("ocultar");
    }else{
        var incompleto = document.getElementById("incompleto");
        incompleto.classList.add("ocultar");
    }
}
function mostrarContrasena(){
    var tipo = document.getElementById("nueva");
    var boton = document.getElementById("contra")
    if(tipo.type == "password"){
        tipo.type = "text";
        boton.classList.add("usando")
    }else{
        tipo.type = "password";
        boton.classList.remove("usando")
    }
}
function mostrarContrasena2(){
    var tipo = document.getElementById("verificar");
    var boton = document.getElementById("contra2")
    if(tipo.type == "password"){
        tipo.type = "text";
        boton.classList.add("usando")
    }else{
        tipo.type = "password";
        boton.classList.remove("usando")
    }
}
function modificarContraseña() {
    fetch("http://localhost:5000/usuarios/:611bcb99b6f2f5c413c4c7d5", {
        method: 'PATCH',
        body: JSON.stringify(datos),
        headers: { 'Content-Type:': 'application/json' }
    })
        .then(
            function (response) {
                return response.json();
            })
}