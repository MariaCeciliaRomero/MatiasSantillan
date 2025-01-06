// Agregar funcionalidad si es necesario, por ejemplo, para manejar formularios de contacto, animaciones, etc.
// Este ejemplo es para añadir una pequeña funcionalidad de scroll suave a las secciones al hacer clic en los enlaces de navegación.

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
