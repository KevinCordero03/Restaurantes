function ver_valores() {
    if (localStorage.getItem("restaurante")) {
        document.getElementById("txt_restaurante").value = localStorage.getItem("restaurante")
    }
    if (localStorage.getItem("cantidad_acompanates")) {
        document.getElementById("txt_Cantidad_de_acompanantes").value = localStorage.getItem("cantidad_acompanates")
    }
    if (localStorage.getItem("tipo_pedido")) {
        document.getElementById("txt_Pedido").value = localStorage.getItem("tipo_pedido")
    }
    if (localStorage.getItem("fecha_hora")) {
        document.getElementById("txt_Fecha_y_Hora").value = localStorage.getItem("fecha_hora")
    }
    if (localStorage.getItem("flauta")) {
        document.getElementById("chk_Flauta").value = localStorage.getItem("flauta")
    }
    if (localStorage.getItem("pollo_papas")) {
        document.getElementById("txt_Pollo_papas").value = localStorage.getItem("pollo_papas")
    }
    if (localStorage.getItem("fajitas_pollo")) {
        document.getElementById("txt_Pollo").value = localStorage.getItem("fajitas_pollo")
    }
    if (localStorage.getItem("hamburguesa")) {
        document.getElementById("txt_Hamburguesa").value = localStorage.getItem("hamburguesa")
    }
    if (localStorage.getItem("lasana")) {
        document.getElementById("txt_Lasana").value = localStorage.getItem("lasana")
    }
    if (localStorage.getItem("tacos")) {
        document.getElementById("txt_Tacos").value = localStorage.getItem("tacos")
    }
}
ver_valores();