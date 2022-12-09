fetch("http://localhost:5000/usuarios")
.then(function (response) {
    return response.json();
})
.then(function (json) {
    for (var i = 0; i < json.length; i++) {
        document.getElementById("usuario").insertAdjacentHTML("beforeEnd", "<div class='proyecto'><p class='direccion'><strong>Nombre:</strong></p><p class='direccion'>" + json[i].nombre + "</p><p class = 'direccion'>" + "<strong>Correo: </strong>" + json[i].correo +"<img class = 'imagen' src='../Imagenes/" + json[i].foto + "' /><p class='direccion'>" + "<strong>Cédula: </strong>" + json[i].cedula + "</p><p class='direccion'>" + "<strong>Fecha de Nacimiento: </strong>" + json[i].fechaNacimiento + "</p></div>");
    }
})
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    

  }
