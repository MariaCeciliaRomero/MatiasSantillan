document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.getElementById("titulo");
    console.log(titulo);  // Esto debería imprimir el elemento

    // Añadimos un evento de clic para activar la animación
    titulo.addEventListener("click", function() {
        // Activamos el efecto de máquina de escribir
        titulo.style.animation = "typing 3s steps(30) 1s 1 normal both, blinkCaret 0.75s step-end infinite";
        console.log("¡Se ha hecho clic en el título!");
    });
});



