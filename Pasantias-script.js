// Variables globales
const searchInput = document.getElementById('searchInput');
const careersGrid = document.getElementById('careersGrid');
const careerCards = document.querySelectorAll('.career-card');

// Función de búsqueda
function searchCareers() {
    const searchTerm = searchInput.value.toLowerCase();
    
    careerCards.forEach(card => {
        const careerData = card.getAttribute('data-career');
        const cardTitle = card.querySelector('h3').textContent.toLowerCase();
        const cardDescription = card.querySelector('p').textContent.toLowerCase();
        
        if (careerData.includes(searchTerm) || 
            cardTitle.includes(searchTerm) || 
            cardDescription.includes(searchTerm)) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

// Función para animación de aparición gradual
function animateCards() {
    const cards = document.querySelectorAll('.career-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Event listeners
searchInput.addEventListener('input', searchCareers);

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    animateCards();
    
    // Agregar efecto de hover mejorado a las tarjetas
    careerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Función para limpiar búsqueda
function clearSearch() {
    searchInput.value = '';
    careerCards.forEach(card => {
        card.style.display = 'block';
    });
}

// Función para mostrar mensaje cuando no hay resultados
function showNoResults() {
    const visibleCards = Array.from(careerCards).filter(card => 
        card.style.display !== 'none'
    );
    
    if (visibleCards.length === 0 && searchInput.value.trim() !== '') {
        // Crear mensaje de "no hay resultados" si no existe
        let noResultsMsg = document.getElementById('no-results-message');
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.id = 'no-results-message';
            noResultsMsg.style.cssText = `
                text-align: center;
                padding: 40px;
                color: #666;
                font-size: 1.2em;
                grid-column: 1 / -1;
            `;
            noResultsMsg.innerHTML = `
                <h3>🔍 No se encontraron resultados</h3>
                <p>Intenta con otras palabras clave como "tecnología", "diseño", "medicina", etc.</p>
            `;
            careersGrid.appendChild(noResultsMsg);
        }
        noResultsMsg.style.display = 'block';
    } else {
        // Ocultar mensaje si hay resultados
        const noResultsMsg = document.getElementById('no-results-message');
        if (noResultsMsg) {
            noResultsMsg.style.display = 'none';
        }
    }
}

// Mejorar la función de búsqueda con mensaje de no resultados
searchInput.addEventListener('input', function() {
    searchCareers();
    showNoResults();
});

// Función para scroll suave hacia las secciones
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Agregar funcionalidad de teclas de acceso rápido
document.addEventListener('keydown', function(e) {
    // Ctrl + F para enfocar el buscador
    if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Escape para limpiar búsqueda
    if (e.key === 'Escape') {
        clearSearch();
        searchInput.blur();
    }
});

// Función para mejorar la accesibilidad
function improveAccessibility() {
    // Agregar roles ARIA
    careersGrid.setAttribute('role', 'grid');
    careerCards.forEach(card => {
        card.setAttribute('role', 'gridcell');
        card.setAttribute('tabindex', '0');
    });
    
    // Agregar navegación por teclado
    careerCards.forEach((card, index) => {
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Simular click en la tarjeta
                card.click();
            }
        });
    });
}

// Inicializar mejoras de accesibilidad
document.addEventListener('DOMContentLoaded', improveAccessibility);