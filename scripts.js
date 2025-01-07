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

// Efecto de tipeo (escritura en tiempo real)
document.addEventListener("DOMContentLoaded", function() {
    const texto = "Matías Santillán - Asistente Virtual Especializado";
    let index = 0;
    const titulo = document.getElementById("titulo");

    // Verificamos si el título está disponible
    if (titulo) {
        // Función para escribir el texto lentamente
        function escribirTexto() {
            if (index < texto.length) {
                titulo.innerHTML += texto.charAt(index);
                index++;
                setTimeout(escribirTexto, 100); // Tiempo entre cada letra
            }
        }

        escribirTexto();
    } else {
        console.error("No se encontró el elemento con id 'titulo'.");
    }
});
