  restaurantes = [
    {
        "nombre": "Zortziko",
        "desc": "Una comida es un viaje. Debe de ser un viaje.  ",
        "foto": "../imagenes/food1.jpg"
    },
    {
        "nombre": "KALZBRGR",
        "desc": "Descube el fresco sabor de las hamburguesas alemanas",
        "foto": "../imagenes/food2.jpg"
    },
    {
        "nombre": "La Picadita",
        "desc": "El verdadero sabor mexicano",
        "foto": "../imagenes/food3.jpg"
    },
    {
        "nombre": "Bella Italia",
        "desc": "Molto bene, bambino!",
        "foto": "../imagenes/food4.jpg"
    },
    {
        "nombre": "Maido",
        "desc": "Una vez un gran sabio japones dijo: 'オタクのための食べ物'",
        "foto": "../imagenes/food5.jpg"
    },
    {
        "nombre": "The Permian",
        "desc": "Pura proteina papá",
        "foto": "../imagenes/food6.jpg"
    }
]

let restaurant= document.getElementById("rest-cont");
function drawData(data){
    for(i=0;i<data.length;i++){
        var bloque = ("<ul class='lista'><li class='restaurante' id='rest'>"+"<a href='#'>"+"<img class='img-rest' src="+data[i].foto+">"+"</a>"+"</li>"+"<li class='restaurante titulo-res'>"+"<a href='#'><h2 class='nombre-res'>"+data[i].nombre+"</a></h2>"+"<p class='descripcion'>"+data[i].desc+"</p>"+"</li></ul>");
        
        restaurant.insertAdjacentHTML("beforeend", bloque)
    }
}
drawData(restaurantes);







