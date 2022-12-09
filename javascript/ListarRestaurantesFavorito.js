var json = [{
    "nombre": "La Sorbetera",
    "direccion": "Alajuela",
    "foto": "1.jpg"
}, {
    "nombre": " La Divina Comida",
    "direccion": "Escazú",
    "foto": "2.jpg"
}, {
    "nombre": "El Mangroove",
    "direccion": "Guanacaste",
    "foto": "3.jpg"
}, {
    "nombre": " Chubascos",
    "direccion": "Alajuela",
    "foto": "4.jpg"
}, {
    "nombre": " Taller Gastronómico El Punto",
    "direccion": "Escazú",
    "foto": "5.jpg"
}, {
    "nombre": " Soda Tala",
    "direccion": "San José",
    "foto": "6.jpg"
}, {
    "nombre": " Al Mercat",
    "direccion": "San José",
    "foto": "7.jpg"
}, {
    "nombre": "Bacchus",
    "direccion": "Santa Ana",
    "foto": "8.jpg"
}];
var listarRestaurantes = document.getElementById("favoritos")
for (var i = 0; i < json.length; i++) {
    var restaurante = "<div class='proyecto'><h2>" + json[i].nombre + "</h2><p class = 'direccion'>"+json[i].direccion+"<img class = 'imagen' src='../Imagenes/" + json[i].foto + "' /></div>";
    listarRestaurantes.insertAdjacentHTML("beforeEnd", restaurante)
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    

  }