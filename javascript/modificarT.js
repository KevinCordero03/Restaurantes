function leerFormulario(event) {
    event.preventDefault();
    var tipo = document.getElementById("tipo");
    if (tipo.value == "") {
        var tipoError = document.getElementById("TipoError");
        tipoError.classList.remove("ocultar");
    }else{
        var tipoError = document.getElementById("TipoError");
        tipoError.classList.add("ocultar");
    }
    var numero = document.getElementById("numero");
    if (numero.value == "") {
        var nombreError = document.getElementById("NumeroError");
        nombreError.classList.remove("ocultar");
    }else {
        var nombreError = document.getElementById("NumeroError");
        nombreError.classList.add("ocultar");
    }
    var fecha = document.getElementById("fecha");
    if (fecha.value == "") {
        var nombreError = document.getElementById("FechaError");
        nombreError.classList.remove("ocultar");
    }else {
        var nombreError = document.getElementById("FechaError");
        nombreError.classList.add("ocultar");
    }
    var codigo = document.getElementById("codigo");
    if (codigo.value == "") {
        var nombreError = document.getElementById("codigoError");
        nombreError.classList.remove("ocultar");
    }else{
        var nombreError = document.getElementById("codigoError");
        nombreError.classList.add("ocultar");
    }

    if (numero.value != "" && codigo.value != "" && fecha.value != "" && tipo.value != "") {
        var mensajeExito = document.getElementById("mensajeExito");
        mensajeExito.classList.remove("ocultar");
        modificarTarjeta();s
    }else {
        var mensajeExito = document.getElementById("mensajeExito");
        mensajeExito.classList.add("ocultar");
    }
}
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";


}
function modificarTarjeta() {
    fetch("http://localhost:5000/tarjetas/:611bcb99b6f2f5c413c4c7d5", {
        method: 'PATCH',
        body: JSON.stringify(datos),
        headers: { 'Content-Type:': 'application/json' }
    })
        .then(
            function (response) {
                return response.json();
            })
}