var nombreMenu = document.getElementById("txt_Restaurante");
var boton = document.getElementById("Registrarse");

function guardarMenu() {
    var error = false;
    if (nombreMenu.value == "") {
        error = true;
        nombreMenu.classList.add("fondo_error");
        Swal.fire("Error", 'Por favor escriba el nombre del menú', "warning");
    } else {
        nombreMenu.classList.remove("fondo_error");
    }
    var listaPlatillos = document.getElementsByName("platillo");
    var platillosElegidos = 0;
    for (var i = 0; i < listaPlatillos.length; i++) {
        if (listaPlatillos[i].checked == 1) {
            platillosElegidos = platillosElegidos + 1;
        }
    }
    if (platillosElegidos == 0) {
        Swal.fire("Error", 'Por favor escoja un platillo ', "warning");
    } else {
        if (platillosElegidos > 0 && error == false) {
            Swal.fire("Registrado", 'Se a registrado su menú', "success");
            for (var i = 0; i < listaPlatillos.length; i++) {
                listaPlatillos[i].checked = false;
            }
            nombreMenu.value = "";
        }
    }
}
boton.addEventListener("click", guardarMenu);