// ===============================
// EFECTO DE TEXTO EN EL TÍTULO
// ===============================

const subtitle = document.querySelector(".subtitle");

const mensajes = [
    "RETRO HORROR GAME COLLECTION",
    "INSERT COIN // PRESS START",
    "WELCOME TO THE NIGHT ARCADE",
    "SYSTEM ONLINE // PLAYER 01"
];

let mensajeActual = 0;

setInterval(() => {

    mensajeActual++;

    if (mensajeActual >= mensajes.length) {
        mensajeActual = 0;
    }

    subtitle.textContent = mensajes[mensajeActual];

}, 3000);


// ===============================
// EFECTO AL PASAR SOBRE LOS JUEGOS
// ===============================

const juegos = document.querySelectorAll(".game-card");

juegos.forEach((juego) => {

    juego.addEventListener("mouseenter", () => {

        juego.style.zIndex = "5";

    });


    juego.addEventListener("mouseleave", () => {

        juego.style.zIndex = "1";

    });

});


// ===============================
// MENSAJE DE CONSOLA
// ===============================

console.log(`
====================================
       DIMAS ARCADE SYSTEM
====================================

PLAYER: DMNS
STATUS: ONLINE

Games loaded:
[01] Atrapa Limones
[02] Juego Cazando

PRESS START TO PLAY
====================================
`);