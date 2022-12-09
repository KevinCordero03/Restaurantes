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

	var impuesto = document.getElementById("impuesto");
	var taxError = document.getElementById("taxError");
	if(impuesto.value == ""){
		taxError.classList.remove("ocultar")
	}

	var tipo = document.getElementById("tipo");
	var tipoError = document.getElementById("tipoError");
	if(tipo.value == ""){
		tipoError.classList.remove("ocultar")
	}

	var caracteristicas = document.getElementById("caracteristicas");
	var caracError = document.getElementById("caracError");
	if(caracteristicas.value == ""){
		caracError.classList.remove("ocultar")
	}

	var exito = document.getElementById("exito")
	if(nombre.value != "" && impuesto.value != "" && tipo.value != "" && caracteristicas.value != ""){
		nombreError.classList.add("ocultar");
		taxError.classList.add("ocultar")
		tipoError.classList.add("ocultar")
		caracError.classList.add("ocultar")
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