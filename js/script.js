// Interactividad sencilla: carousel de testimonios, formulario 'mailto' y mensajes de confirmación.

document.addEventListener('DOMContentLoaded', function () {
  // Carousel simple
  const carousel = document.getElementById('testimonial-carousel');
  if (carousel) {
    let index = 0;
    const slides = carousel.querySelectorAll('.slide');
    function showSlide(i) {
      slides.forEach((s, idx) => {
        s.style.transform = `translateX(${(idx - i) * 100}%)`;
      });
    }
    showSlide(index);
    setInterval(() => {
      index = (index + 1) % slides.length;
      showSlide(index);
    }, 4000);
  }

  // Contact form - utiliza mailto para enviar (sin backend).
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = encodeURIComponent(form.name.value.trim());
    const email = encodeURIComponent(form.email.value.trim());
    const message = encodeURIComponent(form.message.value.trim());

    if (!name || !email || !message) {
      formMessage.textContent = 'Por favor complete todos los campos.';
      formMessage.style.color = 'crimson';
      return;
    }

    const subject = encodeURIComponent('Consulta desde web - Consultoría Herrera Hoyos');
    const body = encodeURIComponent(`Nombre: ${decodeURIComponent(name)}%0ACorreo: ${decodeURIComponent(email)}%0A%0AMensaje:%0A${decodeURIComponent(message)}`);
    // Abrir cliente de correo
    window.location.href = `mailto:hoyos999@outlook.com?subject=${subject}&body=${body}`;

    // Mostrar mensaje de confirmación (por si cliente no abre)
    formMessage.textContent = 'Se abrirá tu cliente de correo para enviar la consulta. Si no, escríbenos a hoyos999@outlook.com o por WhatsApp.';
    formMessage.style.color = 'green';

    form.reset();
  });

  // Small animation: header button pulse on load
  const heroBtn = document.querySelector('.hero .btn-primary');
  if (heroBtn) {
    setTimeout(() => {
      heroBtn.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-6px)' }, { transform: 'translateY(0)' }], { duration: 900, iterations: 1 });
    }, 900);
  }
});
