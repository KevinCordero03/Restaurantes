var tabla = document.getElementById("factura");
var precio_flauta = 1000;
var precio_pollo_papas = 1500;
var precio_fajitas_pollo = 3500;
var precio_hamburguesa = 1200;
var precio_lasana = 2000;
var precio_tacos = 1450;

function cargar_pantalla() {
    if (localStorage.getItem("fecha_hora")) {
        document.getElementById("txt_fecha").value = localStorage.getItem("fecha_hora")
    }
    if (localStorage.getItem("restaurante")) {
        document.getElementById("txt_restaurante").value = localStorage.getItem("restaurante")
    }
    if (localStorage.getItem("cantidad_acompanates")) {
        document.getElementById("txt_acompanates").value = localStorage.getItem("cantidad_acompanates")
    }
    if (localStorage.getItem("flauta")) {
        flauta = localStorage.getItem("flauta");
        if (flauta != 0) {
            var fila = tabla.insertRow();
            fila.insertCell().innerHTML = "Flauta ";
            fila.insertCell().innerHTML = flauta;
            fila.insertCell().innerHTML = flauta * precio_flauta;
        }
    }

    if (localStorage.getItem("pollo_papas")) {
        pollo_papas = localStorage.getItem("pollo_papas");
        if (pollo_papas != 0) {
            var fila = tabla.insertRow();
            fila.insertCell().innerHTML = "Pollo con papas ";
            fila.insertCell().innerHTML = pollo_papas;
            fila.insertCell().innerHTML = pollo_papas * precio_pollo_papas;
        }
    }
    if (localStorage.getItem("fajitas_pollo")) {
        fajitas_pollo = localStorage.getItem("fajitas_pollo");
        if (fajitas_pollo != 0) {
            var fila = tabla.insertRow();
            fila.insertCell().innerHTML = "Fajitas con pollo ";
            fila.insertCell().innerHTML = fajitas_pollo;
            fila.insertCell().innerHTML = fajitas_pollo * precio_fajitas_pollo;
        }
    }
    if (localStorage.getItem("hamburguesa")) {
        hamburguesa = localStorage.getItem("hamburguesa");
        if (hamburguesa != 0) {
            var fila = tabla.insertRow();
            fila.insertCell().innerHTML = "Hamburguesa con papas ";
            fila.insertCell().innerHTML = hamburguesa;
            fila.insertCell().innerHTML = hamburguesa * precio_hamburguesa;
        }
    }
    if (localStorage.getItem("lasana")) {
        lasana = localStorage.getItem("lasana");
        if (lasana != 0) {
            var fila = tabla.insertRow();
            fila.insertCell().innerHTML = "Lasana ";
            fila.insertCell().innerHTML = lasana;
            fila.insertCell().innerHTML = lasana * precio_lasana;
        }
    }
    if (localStorage.getItem("tacos")) {
        tacos = localStorage.getItem("tacos");
        if (tacos != 0) {
            var fila = tabla.insertRow();
            fila.insertCell().innerHTML = "Tacos";
            fila.insertCell().innerHTML = tacos;
            fila.insertCell().innerHTML = tacos * precio_tacos;
        }
    }
}
cargar_pantalla();