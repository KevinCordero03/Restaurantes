var boton = document.getElementById("Registrarse");

function validar() {
    var listaCampos = document.querySelectorAll(":required");
    var error = false;
    for (var i = 0; i < listaCampos.length; i++) {
        if (listaCampos[i].value == "") {
            error = true;
            listaCampos[i].classList.add("fondo_error");
        } else {
            listaCampos[i].classList.remove("fondo_error");
        }
    }
    if (error == true) {
        Swal.fire("Error", 'Debe de complerar los campos en amarillo', "warning");
    } else {
        Swal.fire("Registrado", 'Su cuenta ya a sido registrada', "success");
        for (var i = 0; i < listaCampos.length; i++) {
            listaCampos[i].value = "";
        }
        var redes = document.getElementById("txt_redes");
        redes.value = "";
        var tipo_identificacion = document.getElementById("txt_tipo");
        tipo_identificacion.selectedIndex = 0;
    }

}
boton.addEventListener("click", validar);