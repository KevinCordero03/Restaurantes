var boton = document.getElementById("Registrarse");
var cantidad_acompanates = document.getElementById("txt_Cantidad_de_acompanantes");
var restaurante = document.getElementById("txt_Restaurante");
var tipo_pedido = document.getElementById("txt_tipo_Pedido");
var fecha_hora = document.getElementById("txt_Fecha_y_Hora");
var lbl_acompanantes = document.getElementById("lbl_acompanantes");
var flauta = document.getElementById("chk_Flauta");
var pollo_papas = document.getElementById("chk_Pollo_papas");
var fajitas_pollo = document.getElementById("chk_fajitas_pollo");
var hamburguesa = document.getElementById("chk_hamburguesa");
var lasana = document.getElementById("chk_lasana");
var tacos = document.getElementById("chk_tacos");

function registrar() {
    localStorage.setItem("cantidad_acompanates", cantidad_acompanates.value);
    localStorage.setItem("restaurante", restaurante.value);
    localStorage.setItem("tipo_pedido", tipo_pedido.value);
    localStorage.setItem("fecha_hora", fecha_hora.value);
    localStorage.setItem("flauta", flauta.value);
    localStorage.setItem("pollo_papas", pollo_papas.value);
    localStorage.setItem("fajitas_pollo", fajitas_pollo.value);
    localStorage.setItem("hamburguesa", hamburguesa.value);
    localStorage.setItem("lasana", lasana.value);
    localStorage.setItem("tacos", tacos.value);
    /* console.log("la cantidad es " + cantidad_acompanates.value);
     console.log("la cantidad es " + restaurante.value);
     console.log("la cantidad es " + tipo_pedido.value);
     console.log("la cantidad es " + fecha_hora.value);
     console.log("la cantidad es " + flauta.value);
     console.log("la cantidad es " + pollo_papas.value);
     console.log("la cantidad es " + fajitas_pollo.value);
     console.log("la cantidad es " + hamburguesa.value);
     console.log("la cantidad es " + lasana.value);
     console.log("la cantidad es " + tacos.value);*/
    Swal.fire('Pedido realizado', "Se a registrado su pedido", "success");
    limpiar_pantalla();
}

function cambiar_tipo_pedido() {
    if (tipo_pedido.selectedIndex == 1) {
        cantidad_acompanates.style.visibility = "hidden";
        lbl_acompanantes.style.visibility = "hidden";

    } else {
        cantidad_acompanates.style.visibility = "visible";
        lbl_acompanantes.style.visibility = "visible";

    }
}

function validar() {
    var error = false;
    if (tipo_pedido.selectedIndex == 0) {
        if (cantidad_acompanates.value == "") {
            error = true;
            Swal.fire("Error", 'Complete el espacio cantidad de acompañantes', "error");
        }
    }
    if (error == false) {
        if (fecha_hora.value == "") {
            error = true;
            Swal.fire("Error", 'Complete el espacio de fecha y hora', "error");
        }
    }
    if (error == false) {
        registrar();
    }
}

function limpiar_pantalla() {
    cantidad_acompanates.value = 0;
    restaurante.selectedIndex = 0;
    tipo_pedido.selectedIndex = 0;
    fecha_hora.value = "";
    flauta.value = 0;
    pollo_papas.value = 0;
    fajitas_pollo.value = 0;
    hamburguesa.value = 0;
    lasana.value = 0;
    tacos.value = 0;

}



boton.addEventListener("click", validar);