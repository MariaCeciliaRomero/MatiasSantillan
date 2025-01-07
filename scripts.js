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

// Efecto máquina de escribir
document.addEventListener("DOMContentLoaded", function() {
    const texto = "Matías Santillán - Asistente Virtual Especializado";
    let index = 0;
    const titulo = document.getElementById("titulo");

    // Verificamos si el título está disponible
    if (titulo) {
        // Función para escribir el texto lentamente, con el efecto de máquina de escribir
        function escribirTexto() {
            if (index < texto.length) {
                // Añadir una letra a la vez al contenido del título
                titulo.innerHTML += texto.charAt(index);
                index++;
                // Retraso entre cada letra, para simular el efecto de máquina de escribir
                setTimeout(escribirTexto, 150); // Ajusta el tiempo para más rápido o lento
            }
        }

        escribirTexto();
    } else {
        console.error("No se encontró el elemento con id 'titulo'.");
    }
});

