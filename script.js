const botonMensaje = document.getElementById("btnMensaje");
const botonesJuego = document.querySelectorAll(".botonJuego");
const botonBuscar = document.getElementById("buscar");
const entrada = document.getElementById("entrada");
const resultado = document.getElementById("resultado");
const contador = document.getElementById("contador");
const botonContador = document.getElementById("sumar");

const juegos = [
    {
        nombre: "minecraft",
        genero: "Sandbox",
        lanzamiento: 2011
    },
    {
        nombre: "the legend of zelda",
        genero: "Aventura",
        lanzamiento: 1986
    },
    {
        nombre: "grand theft auto v",
        genero: "Acción",
        lanzamiento: 2013
    },
    {
        nombre: "fortnite",
        genero: "Battle Royale",
        lanzamiento: 2017
    },
    {
        nombre: "roblox",
        genero: "Multijugador",
        lanzamiento: 2006
    }
];

let visitas = 0;

function actualizarContador() {
    visitas++;
    contador.textContent = visitas;
}

botonMensaje.addEventListener("click", function () {

    const numero = Math.floor(Math.random() * juegos.length);

    alert(
        "Te recomendamos jugar " +
        juegos[numero].nombre.toUpperCase()
    );

});

botonesJuego.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const nombre = this.parentElement.querySelector("h3").textContent;

        alert(
            nombre +
            " es uno de los videojuegos más populares."
        );

    });

});

botonBuscar.addEventListener("click", function () {

    const texto = entrada.value.toLowerCase().trim();

    let encontrado = false;

    for (let i = 0; i < juegos.length; i++) {

        if (texto === juegos[i].nombre) {

            resultado.textContent =
                juegos[i].nombre.toUpperCase() +
                " pertenece al género " +
                juegos[i].genero +
                " y fue lanzado en " +
                juegos[i].lanzamiento + ".";

            encontrado = true;

            break;

        }

    }

    if (!encontrado) {

        resultado.textContent =
            "Ese videojuego no se encuentra registrado.";

    }

});

botonContador.addEventListener("click", actualizarContador);

entrada.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        botonBuscar.click();

    }

});

window.addEventListener("load", function () {

    contador.textContent = visitas;

});

setInterval(function () {

    document.title =
        "GameVerse (" + visitas + " visitas)";

}, 1000);
