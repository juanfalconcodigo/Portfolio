"use strict";
//esto es para el uso de typed
var typed = new Typed('.typed', {
    /*  strings: [
         '<i class="mascota">Angular 9</i>',
         '<i class="mascota">Reactjs</i>',
         '<i class="mascota">Nodejs</i>',
         '<i class="mascota">Sql</i>',
     ], */
    stringsElement: '#id_cadenas_texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 75, // Velocidad en milisegundos para poner una letra,
    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
    smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '|', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
});
const btnTheme = document.querySelector("#btn_theme");
const idContent = document.querySelector('#id_content');

btnTheme.addEventListener('click', () => {

    idContent.classList.toggle('dark');
    btnTheme.classList.toggle('active');

});