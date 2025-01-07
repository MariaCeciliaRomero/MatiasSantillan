document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.getElementById("titulo");
    console.log(titulo);  // Esto debería imprimir el elemento

    titulo.addEventListener("click", function() {
        titulo.style.backgroundColor = "yellow";
        titulo.style.color = "blue";
        console.log("¡Se ha hecho clic en el título!");
    });
});


