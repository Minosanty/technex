// Transiciones suaves en el scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.length > 1 && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Simulación de envío de formulario (puedes conectar con backend si lo deseas)
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('¡Gracias por contactarnos! Pronto responderemos tu mensaje.');
    this.reset();
});

// Efecto hover en tarjetas de proyectos (opcional extra para dispositivos táctiles)
document.querySelectorAll('.proyecto-card').forEach(card => {
    card.addEventListener('touchstart', function () {
        this.classList.toggle('hovered');
    });
});