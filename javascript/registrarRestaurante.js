/*
function opciones(evt, opcion) {
var i, caja, tablinks;
caja = document.getElementsByClassName("caja");
for (i = 0; i < caja.length; i++) {
caja[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.getElementById(opcion).style.display = "block";
evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

var archivo = document.getElementById('archivo')
archivo.onchange = function(e) {
	var reader = new FileReader()
	reader.onload = function(data) {
		var imagen = document.getElementById('imagen')
		imagen.src = data.target.result
	}
	reader.readAsDataURL(e.target.files[0])
}
*/
function leerFormulario(event) {
	event.preventDefault();

	var nombre = document.getElementById("nombre");		
	var nombreError = document.getElementById("nombreError");
	if(nombre.value == ""){
		nombreError.classList.remove("ocultar")
	}

	var comercio = document.getElementById("comercio");
	var comercioError = document.getElementById("comercioError");
	if(comercio.value == ""){
		comercioError.classList.remove("ocultar")
	}

	var cedula = document.getElementById("cedula");
	var cedError = document.getElementById("cedError");
	if(cedula.value == ""){
		cedError.classList.remove("ocultar")
	}

	var ubicacion = document.getElementById("ubicacion");
	var ubicacionError = document.getElementById("ubicacionError");
	if(ubicacion.value == ""){
		ubicacionError.classList.remove("ocultar")
	}

	var coordenadas = document.getElementById("coordenadas");
	var coordenadasError = document.getElementById("coordenadasError");
	if(coordenadas.value == ""){
		coordenadasError.classList.remove("ocultar")
	}

	var archivo = document.getElementById("archivo");
	var imgError = document.getElementById("imgError");
	if(archivo.value == ""){
		imgError.classList.remove("ocultar")
	}

	var exito = document.getElementById("exito")
	if(nombre.value != "" && comercio.value != "" && cedula.value != "" && ubicacion.value != "" && coordenadas.value != "" && archivo.value != ""){
		nombreError.classList.add("ocultar");
		comercioError.classList.add("ocultar")
		cedError.classList.add("ocultar")
		ubicacionError.classList.add("ocultar")
		coordenadasError.classList.add("ocultar")
		imgError.classList.add("ocultar")
		exito.classList.remove("ocultar")
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