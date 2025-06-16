// Variables globales
let currentQuestion = 0;
let answers = [];
const totalQuestions = 8;

// Definición de perfiles vocacionales
const profiles = {
    social: {
        title: "Perfil Social - Comunicador",
        icon: "🤝",
        description: "Tienes una naturaleza sociable y empática. Te destacas en la comunicación interpersonal y disfrutas ayudando a otros. Eres ideal para trabajos que requieren interacción constante con personas.",
        careers: [
            {
                name: "Atención al Cliente",
                description: "Ayudar a resolver consultas y brindar soporte a clientes por teléfono, chat o email."
            },
            {
                name: "Vendedor/a",
                description: "Promover productos y servicios, asesorar a clientes en tiendas físicas o virtuales."
            },
            {
                name: "Recepcionista",
                description: "Dar la bienvenida a visitantes, atender llamadas y brindar información general."
            },
            {
                name: "Promotor/a",
                description: "Presentar productos o servicios en eventos, ferias o espacios públicos."
            }
        ]
    },
    creative: {
        title: "Perfil Creativo - Innovador",
        icon: "🎨",
        description: "Posees una mente creativa y original. Te gusta expresarte a través del arte, el diseño y la innovación. Buscas trabajos que te permitan crear y aportar ideas frescas.",
        careers: [
            {
                name: "Diseñador Gráfico Junior",
                description: "Crear contenido visual para redes sociales, folletos y material promocional."
            },
            {
                name: "Community Manager",
                description: "Gestionar redes sociales, crear contenido creativo y interactuar con la comunidad online."
            },
            {
                name: "Fotógrafo/a Asistente",
                description: "Ayudar en sesiones fotográficas, editar imágenes y organizar material visual."
            },
            {
                name: "Creador de Contenido",
                description: "Producir videos, podcasts o artículos para plataformas digitales."
            }
        ]
    },
    analytical: {
        title: "Perfil Analítico - Pensador",
        icon: "🧠",
        description: "Tienes una mente lógica y analítica. Te gusta organizar información, resolver problemas complejos y trabajar con datos. Prefieres tareas que requieren precisión y análisis.",
        careers: [
            {
                name: "Asistente Administrativo",
                description: "Organizar documentos, gestionar archivos y apoyar en tareas de oficina."
            },
            {
                name: "Analista de Datos Junior",
                description: "Procesar información, crear reportes básicos y mantener bases de datos."
            },
            {
                name: "Asistente Contable",
                description: "Ayudar con tareas de contabilidad básica, facturación y registro de operaciones."
            },
            {
                name: "Soporte Técnico",
                description: "Resolver problemas técnicos básicos y brindar asistencia en sistemas informáticos."
            }
        ]
    },
    practical: {
        title: "Perfil Práctico - Ejecutor",
        icon: "🔧",
        description: "Eres una persona práctica y orientada a la acción. Te gusta trabajar con las manos, ver resultados tangibles y resolver problemas de manera directa y eficiente.",
        careers: [
            {
                name: "Delivery/Mensajería",
                description: "Entregar productos y documentos de manera eficiente por la ciudad."
            },
            {
                name: "Asistente de Taller",
                description: "Ayudar en talleres mecánicos, carpintería o espacios de trabajo manual."
            },
            {
                name: "Repositor/a",
                description: "Organizar y reponer mercadería en supermercados, tiendas y depósitos."
            },
            {
                name: "Operario/a de Producción",
                description: "Participar en procesos de producción, ensamblaje y control de calidad."
            }
        ]
    }
};

// Función para seleccionar una opción
function selectOption(element) {
    // Remover selección previa
    const options = element.parentElement.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    
    // Seleccionar nueva opción
    element.classList.add('selected');
    
    // Guardar respuesta
    answers[currentQuestion] = element.dataset.value;
    
    // Habilitar botón siguiente
    document.getElementById('nextBtn').disabled = false;
}

// Función para actualizar la barra de progreso
function updateProgress() {
    const progress = ((currentQuestion + 1) / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

// Función para mostrar una pregunta 
function showQuestion(questionIndex) {
    // Ocultar todas las preguntas
    const questions = document.querySelectorAll('.question-container');
    questions.forEach(q => q.classList.remove('active'));
    
    // Mostrar pregunta actual
    const currentQuestionEl = document.querySelector(`[data-question="${questionIndex}"]`);
    if (currentQuestionEl) {
        currentQuestionEl.classList.add('active');
    }
    
    // Actualizar botones de navegación
    document.getElementById('prevBtn').disabled = questionIndex === 0;
    document.getElementById('nextBtn').disabled = !answers[questionIndex];
    
    // Cambiar texto del botón en la última pregunta
    if (questionIndex === totalQuestions - 1) {
        document.getElementById('nextBtn').textContent = 'Ver Resultados';
    } else {
        document.getElementById('nextBtn').textContent = 'Siguiente →';
    }
    
    // Actualizar barra de progreso
    updateProgress();
}

// Función para ir a la siguiente pregunta
function nextQuestion() {
    if (currentQuestion < totalQuestions - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        showResults();
    }
}

// Función para ir a la pregunta anterior
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

// Función para calcular el resultado basado en las respuestas
function calculateResult() {
    const scores = {
        social: 0,
        creative: 0,
        analytical: 0,
        practical: 0
    };
    
    // Contar respuestas por categoría
    answers.forEach(answer => {
        if (answer) {
            scores[answer]++;
        }
    });
    
    // Encontrar el perfil con mayor puntaje
    let maxScore = 0;
    let resultProfile = 'social';
    
    for (const [profile, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            resultProfile = profile;
        }
    }
    
    return resultProfile;
}

// Función para mostrar los resultados del quiz
function showResults() {
    const result = calculateResult();
    const profile = profiles[result];
    
    // Ocultar quiz y mostrar resultados
    document.querySelector('.quiz-container').style.display = 'none';
    document.getElementById('resultContainer').classList.add('active');
    
    // Llenar información del resultado
    document.getElementById('resultIcon').textContent = profile.icon;
    document.getElementById('resultTitle').textContent = profile.title;
    document.getElementById('resultDescription').textContent = profile.description;
    
    // Llenar lista de carreras recomendadas
    const careerList = document.getElementById('careerList');
    careerList.innerHTML = '';
    
    profile.careers.forEach(career => {
        const careerItem = document.createElement('div');
        careerItem.className = 'career-item';
        careerItem.innerHTML = `
            <h4>${career.name}</h4>
            <p>${career.description}</p>
        `;
        careerList.appendChild(careerItem);
    });
}

// Función para reiniciar el quiz
function restartQuiz() {
    currentQuestion = 0;
    answers = [];
    
    // Mostrar quiz y ocultar resultados
    document.querySelector('.quiz-container').style.display = 'block';
    document.getElementById('resultContainer').classList.remove('active');
    
    // Limpiar todas las selecciones
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    
    // Mostrar primera pregunta
    showQuestion(0);
}

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Agregar event listeners a todas las opciones
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', function() {
            selectOption(this);
        });
    });
    
    // Inicializar el quiz mostrando la primera pregunta
    showQuestion(0);
});