// =========================
// MODO OSCURO
// Cambia los colores del sitio al hacer clic en el botón
// y recuerda la elección al pasar de una página a otra.
// =========================

const boton = document.getElementById("boton-tema");

// Pone el texto correcto en el botón según el modo actual
function actualizarTextoBoton() {
    if (document.body.classList.contains("modo-oscuro")) {
        boton.textContent = "☀️ Modo claro";
    } else {
        boton.textContent = "🌙 Modo oscuro";
    }
}

// Si ya se había elegido el modo oscuro en otra página, se aplica al cargar
if (localStorage.getItem("modo") === "oscuro") {
    document.body.classList.add("modo-oscuro");
}

actualizarTextoBoton();

boton.addEventListener("click", function () {
    document.body.classList.toggle("modo-oscuro");

    // Guardamos la elección para que se mantenga en las demás páginas
    if (document.body.classList.contains("modo-oscuro")) {
        localStorage.setItem("modo", "oscuro");
    } else {
        localStorage.setItem("modo", "claro");
    }

    actualizarTextoBoton();
});
