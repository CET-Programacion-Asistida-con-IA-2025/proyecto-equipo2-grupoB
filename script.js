// Función de búsqueda
function buscarTrabajo() {
    const searchTerm = document.getElementById('searchInput').value;
    if (searchTerm.trim() === '') {
        alert('Por favor, ingresa qué tipo de trabajo estás buscando');
        return;
    }
    
    // Simular búsqueda
    alert(`Buscando oportunidades de: "${searchTerm}"\n\nPróximamente: Resultados de trabajos disponibles para menores de 18 años en Buenos Aires.`);
}

// Enter key en búsqueda
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        buscarTrabajo();
    }
});

// Manejo del formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;
    
    // Simular envío
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert(`¡Gracias ${nombre}! Hemos recibido tu información.\n\nNuestro equipo se pondrá en contacto contigo en las próximas 24-48 horas para orientarte en tu búsqueda laboral.`);
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// Animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.querySelectorAll('.section > .container > *').forEach(el => {
    observer.observe(el);
});