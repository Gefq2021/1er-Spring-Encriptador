var textoIzq = document.querySelector("#textarea-izq");
var textoDer = document.querySelector("#textarea-der");

var contendorImagenes = document.querySelector('#div-contenido');
var botonCopiar = document.querySelector('#botonCopiar');


//Realizamos la encriptacion del contenido de textarea.

//Funcion Encriptar
var textoEncriptado;
function encriptar(textoIzq) {
	textoEncriptado = '';
	var texto = textoIzq.value;
	for (var i = 0; i < texto.length; i++) {
		
		var letra = texto[i];
		switch (letra) {
			case 'a':
				textoEncriptado += 'ai';
				break;
			case 'e':
				textoEncriptado += 'enter';
				break;
			case 'i':
				textoEncriptado += 'imes';
				break;
			case 'o':
				textoEncriptado += 'ober';
				break;
			case 'u':
				textoEncriptado += 'ufat';
				break;
			default:
				textoEncriptado += letra;
				break;
		}
	}
	return textoEncriptado;
}

var botonEncriptar = document.querySelector("#botonEncriptar");

botonEncriptar.addEventListener('click', function () {
	if (textoIzq.value == '') {
		alert('Debe agregar un texto...');
	}
	else {
		contendorImagenes.style.display = "none";
		botonCopiar.style.display = "block";
		textoDer.value = encriptar(textoIzq);
	}
	
});


//Desencriptacion del texto encriptado.

// Funcion Desencriptar

var textoDesencriptado;
function desencriptar(textoIzq) {
	textoDesencriptado = '';
	var i = 0;
	var texto = textoIzq.value;

	while (i < texto.length) {
		
		var letra = texto[i];
		switch (letra) {
			case 'a':
				textoDesencriptado += letra;
				i += 2;
				break;
			case 'e':
				textoDesencriptado += letra;
				i += 5;
				break;
			case 'i':
				textoDesencriptado += letra;
				i += 4;
				break;
			case 'o':
				textoDesencriptado += letra;
				i += 4;
				break;
			case 'u':
				textoDesencriptado += letra;
				i += 4;
				break;
			default:
				textoDesencriptado += letra;
				i++;
				break;
		}
	}
	return textoDesencriptado;
}

var botonDesencriptar = document.querySelector("#botonDesencriptar");

botonDesencriptar.addEventListener('click', function () {
	if (textoIzq.value == '') {
		alert('Debe agregar un texto...');
	}
	else {
		contendorImagenes.style.display = "none";
		botonCopiar.style.display = "block";

		texto= document.querySelector("#textarea-izq");
		var nuevoTexto = desencriptar(texto);
		textoDer.value = nuevoTexto;
	}
	
});


// Se realiza la limpeza de los textareas

var botonLimpiar = document.querySelector('#botonLimpiar');

botonLimpiar.addEventListener('click', function () {
	textoIzq.value = '';
	textoDer. value = '';
	contendorImagenes.style.display = "flex";
	botonCopiar.style.display = "none";
	textoIzq.focus();
})


// Copiamos el texto del textarea de la derecha (el encriptado o desencriptado)
botonCopiar= document.querySelector("#botonCopiar");
var textoCopiado;

function copiar(texto) {
	if (texto.value == '') {
		alert("No hay elementos a copiar...");
	}
	else {
		texto.select();
    	document.execCommand('copy');
    	alert("La frase fue copiada");
	}
}

botonCopiar.addEventListener('click', function () {
	textoCopiado = document.querySelector('#textarea-der');
	copiar(textoCopiado);
	contendorImagenes.style.display = "flex";
	botonCopiar.style.display = "none";
	textoCopiado.value = '';
	textoIzq.value = '';
	textoIzq.focus();
});

/*  Mensaje secreto!
	Desencripta nuestro mensaje secreto!

	fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!
*/