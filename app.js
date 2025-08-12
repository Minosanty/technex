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


  document.addEventListener("DOMContentLoaded", function () {
            document.getElementById("contactForm").addEventListener("submit", function(e) {
                e.preventDefault();

                // Número de WhatsApp con formato internacional (sin + ni espacios)
                let numero = 5493704771041; // Cambiar por el tuyo

                let nombre = document.getElementById("nombre").value.trim();
                let edad = document.getElementById("edad").value.trim();
                let email = document.getElementById("email").value.trim();
                let mensaje = document.getElementById("mensaje").value.trim();

                if (!nombre || !edad || !email || !mensaje) {
                    alert("Por favor completa todos los campos.");
                    return;
                }

                let texto = `Hola, me llamo ${nombre}.%0A` +
                            `Edad: ${edad}%0A` +
                            `Email: ${email}%0A` +
                            `Motivo: ${mensaje}`;

                let url = `https://wa.me/${numero}?text=${texto}`;

                window.open(url, "_blank");
            });
        });