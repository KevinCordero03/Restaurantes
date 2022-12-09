function leerFormulario(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre");
    var direccion = document.getElementById("direccion");
    var foto = document.getElementById("foto")
    if(nombre.value == ""){
        var nombreError = document.getElementById("nombreError");
        nombreError.classList.remove("ocultar");
    }else{
        var nombreError = document.getElementById("nombreError");
        nombreError.classList.add("ocultar");
    }
    if(direccion.value == ""){
        var direccionError = document.getElementById("direccionError");
        direccionError.classList.remove("ocultar");
    }else{
        var direccionError = document.getElementById("direccionError");
        direccionError.classList.add("ocultar");
    }
    if(foto.value == ""){
        var fotoError = document.getElementById("fotoError");
        fotoError.classList.remove("ocultar");
    }else{
        var fotoError = document.getElementById("fotoError");
        fotoError.classList.add("ocultar");
    }
    if(nombre.value != "" && direccion.value != "" && foto.value != ""){
        var completo = document.getElementById("completo");
        completo.classList.remove("ocultar");
    }else{
        var completo = document.getElementById("completo");
        completo.classList.add("ocultar");
    }
    if(nombre.value == "" || direccion.value == "" || foto.value == ""){
        var incompleto = document.getElementById("incompleto");
        incompleto.classList.remove("ocultar");
    }else{
        var incompleto = document.getElementById("incompleto");
        incompleto.classList.add("ocultar");
    }
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    

  }