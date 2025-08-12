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


document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que el formulario recargue la página

    // Tu número de WhatsApp (formato internacional sin + ni espacios)
    let numero = "5493704771041"; // Ejemplo: 5493704123456
    // Capturar valores
    let nombre = document.getElementById("nombre").value;
    let mensaje = document.getElementById("mensaje").value;

    // Construir mensaje para WhatsApp
    let texto = `Hola, soy ${nombre}.%0A${mensaje}`;

    // Abrir WhatsApp con el mensaje
    let url = `https://wa.me/${numero}?text=${texto}`;
    window.open(url, "_blank");
});

