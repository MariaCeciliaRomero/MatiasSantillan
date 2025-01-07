// Función para el desplazamiento suave hacia las secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Obtener el elemento por su id
const titulo = document.getElementById("titulo");

// Función para cambiar el estilo del título con clic
titulo.addEventListener("click", function() {
    // Cambiar el color de fondo y el color del texto
    titulo.style.backgroundColor = "yellow";
    titulo.style.color = "blue";
});


