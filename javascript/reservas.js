function leerFormulario(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre");
    var restaurante = document.getElementById("restaurante");
    var platillo = document.getElementById("Platillo");
    var personas = document.getElementById("personas");
    var fecha = document.getElementById("fecha");
    var hora = document.getElementById("hora");

    if(nombre.value == ""){
        var nombreError = document.getElementById("nombreError");
        nombreError.classList.remove("ocultar");
    }else{
        var nombreError = document.getElementById("nombreError");
        nombreError.classList.add("ocultar");
    }
    if(restaurante.value == ""){
        var restauranteError = document.getElementById("restauranteError");
        restauranteError.classList.remove("ocultar");
    }else{
        var restauranteError = document.getElementById("restauranteError");
        restauranteError.classList.add("ocultar");
    }
    if(platillo.value == ""){
        var platilloError = document.getElementById("platilloError");
        platilloError.classList.remove("ocultar");
    }else{
        var platilloError = document.getElementById("platilloError");
        platilloError.classList.add("ocultar");
    }
    if(personas.value == ""){
        var personasError = document.getElementById("personasError");
        personasError.classList.remove("ocultar");
    }else{
        var  personasError = document.getElementById("personasError");
        personasError.classList.add("ocultar");
    }
    if(fecha.value == ""){
        var fechaError = document.getElementById("fechaError");
        fechaError.classList.remove("ocultar");
    }else{
        var  fechaError = document.getElementById("fechaError");
        fechaError.classList.add("ocultar");
    }
    if(hora.value == ""){
        var horaError = document.getElementById("horaError");
        horaError.classList.remove("ocultar");
    }else{
        var  horaError = document.getElementById("horaError");
        horaError.classList.add("ocultar");
    }
    if(nombre.value == "" || restaurante.value == "" || platillo.value == "" || personas.value == "" || fecha.value == "" || hora.value == ""){
        var incompleto = document.getElementById("incompleto");
        incompleto.classList.remove("ocultar");
    }else{
        var incompleto = document.getElementById("incompleto");
        incompleto.classList.add("ocultar");
    }
}
