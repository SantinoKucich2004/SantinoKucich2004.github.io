
/*Busque mas informacion para poder lograr programar los botones de la pagina*/

let ocultar_boton = document.getElementById('ocultar_boton')

let ocultarTexto = document.getElementById('ocultarTexto')

ocultar_boton.addEventListener('click', toggleText)

function toggleText() {

    ocultarTexto.classList.toggle('mostrar')

if(ocultarTexto.classList.contains('mostrar')) {
    ocultar_boton.innerHTML = 'Mostrar menos';
}

else{
    ocultar_boton.innerHTML = 'Mostrar informacion personal';
}

}

let ocultar_boton2 = document.getElementById('ocultar_boton2')

let ocultarTexto2 = document.getElementById('ocultarTexto2')

ocultar_boton2.addEventListener('click', mostrartexto2)

function mostrartexto2() {

    ocultarTexto2.classList.toggle('mostrar')

if(ocultarTexto2.classList.contains('mostrar')) {
    ocultar_boton2.innerHTML = 'Mostrar menos';
}
    
else{
    ocultar_boton2.innerHTML = 'Mostrar estudios';
}

}

let ocultar_boton3 = document.getElementById('ocultar_boton3')

let ocultarTexto3 = document.getElementById('ocultarTexto3')

ocultar_boton3.addEventListener('click', mostrartexto3)

function mostrartexto3() {

    ocultarTexto3.classList.toggle('mostrar')

if(ocultarTexto3.classList.contains('mostrar')) {
    ocultar_boton3.innerHTML = 'Mostrar menos';
}
    
else{
    ocultar_boton3.innerHTML = 'Mostrar experiencia personal';
}

}

let ocultar_boton4 = document.getElementById('ocultar_boton4')

let ocultarTexto4 = document.getElementById('ocultarTexto4')

ocultar_boton4.addEventListener('click', mostrartexto4)

function mostrartexto4() {

    ocultarTexto4.classList.toggle('mostrar')

if(ocultarTexto4.classList.contains('mostrar')) {
    ocultar_boton4.innerHTML = 'Mostrar menos';
}
    
else{
    ocultar_boton4.innerHTML = 'Mostrar habilidades';
}

}

