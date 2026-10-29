let puntos = 0;
let tiempo = 30;
let jugando = false;
let reloj;

const textoPuntos = document.getElementById("puntos");
const textoTiempo = document.getElementById("tiempo");
const cuadrado = document.getElementById("cuadrado");
const pantallaInicio = document.getElementById("pantallaInicio");
const titulo = document.getElementById("titulo");
const mensaje = document.getElementById("mensaje");
const botonInicio = document.getElementById("botonInicio");
const resultado = document.getElementById("resultado");
const zonaJuego = document.getElementById("zonaJuego");

function moverCuadrado() {

    let maxX = zonaJuego.clientWidth - cuadrado.offsetWidth;
    let maxY = zonaJuego.clientHeight - cuadrado.offsetHeight;

    let x = Math.floor(Math.random() * maxX);
    let y = Math.floor(Math.random() * maxY);

    cuadrado.style.left = x + "px";
    cuadrado.style.top = y + "px";
}

function empezarJuego() {

    puntos = 0;
    tiempo = 30;
    jugando = true;

    textoPuntos.textContent = puntos;
    textoTiempo.textContent = tiempo;
    resultado.textContent = "";

    pantallaInicio.style.display = "none";
    cuadrado.style.display = "block";

    moverCuadrado();

    clearInterval(reloj);

    reloj = setInterval(function() {

        tiempo = tiempo - 1;
        textoTiempo.textContent = tiempo;

        if (tiempo <= 0) {
            terminarJuego();
        }

    }, 1000);
}

cuadrado.addEventListener("click", function() {

    if (jugando === true) {

        puntos = puntos + 1;
        textoPuntos.textContent = puntos;

        moverCuadrado();

        if (puntos >= 15) {
            resultado.textContent =
                "¡Vas genial! Ya tienes 15 puntos o más.";
        }
    }

});

function terminarJuego() {

    jugando = false;

    clearInterval(reloj);

    cuadrado.style.display = "none";
    pantallaInicio.style.display = "flex";

    titulo.textContent = "¡Tiempo terminado!";

    mensaje.textContent =
        "Has conseguido " + puntos + " puntos.";

    botonInicio.textContent = "Volver a jugar";

    if (puntos >= 15) {

        resultado.textContent =
            "¡Muy bien! Has conseguido una gran puntuación.";

    } else {

        resultado.textContent =
            "¡Inténtalo otra vez para mejorar tu puntuación!";
    }
}
botonInicio.addEventListener("click", empezarJuego);
