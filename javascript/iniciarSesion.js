function leerFormulario(event) {
	event.preventDefault();

	var correo = document.getElementById("correo");		
	var correoError = document.getElementById("correoError");
	if(correo.value == ""){
		correoError.classList.remove("ocultar")
	} else {
		correoError.classList.add("ocultar")
	}

	var password = document.getElementById("contraseña");
	var passError = document.getElementById("passError");
	if(password.value == ""){
		passError.classList.remove("ocultar")
	}else {
		passError.classList.add("ocultar")
	}

	if(correo.value != "" && password.value != ""){
		correoError.classList.add("ocultar");
		passError.classList.add("ocultar")
	}else {
		correoError.classList.remove("ocultar");
		passError.classList.remove("ocultar")
	}
}

var usuarios =  [{
					"email": "pedr01@gmail.com",
			        "contrasenna": "Pedro03$",
			        "tipo": "admin"
			    },
			    {
			        "email": "margoz@gmail.com",
			        "contrasenna": "GonzMAR123",
			        "tipo": "encargado"
			    },
			    {
			        "email": "gerente@gerente.com",
			        "contrasenna": "gerente",
			        "tipo": "gerente"
			    },
			    {
			        "email": "usuario@usuario.com",
			        "contrasenna": "usuario",
			        "tipo": "usuario"
				}]		

function ingresar(){
	var correo = document.getElementById("correo")
	var password = document.getElementById("contraseña")
	if(correo.value == usuarios[0].email && password.value == usuarios[0].contrasenna){
		window.location.href = 'home.html';
	}
	if(correo.value == usuarios[1].email && password.value == usuarios[1].contrasenna){
		window.location.href = 'home.html';
	}
	if(correo.value == usuarios[2].email && password.value == usuarios[2].contrasenna){
		window.location.href = 'home.html';
	}
	if(correo.value == usuarios[3].email && password.value == usuarios[3].contrasenna){
		window.location.href = 'home.html';
	}
}

