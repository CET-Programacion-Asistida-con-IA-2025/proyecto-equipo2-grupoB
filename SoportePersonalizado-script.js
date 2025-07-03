function showCVTips() {
    alert('Tips para tu CV:\n\n✓ Mantené máximo 2 páginas\n✓ Usá un email profesional\n✓ Incluí palabras clave del rubro\n✓ Revisá la ortografía\n✓ Adaptá el CV para cada trabajo\n✓ Incluí referencias si tenés');
}

function showJobTips() {
    alert('Consejos para buscar trabajo:\n\n🎯 Aplicá máximo 5 empleos por día con calidad\n📱 Revisá las plataformas diariamente\n🤝 Usá tu red de contactos\n📧 Seguí las postulaciones con emails\n⏰ Aplicá dentro de los primeros 3 días\n🔄 Actualizá tu perfil regularmente');
}

function showSalaryInfo() {
    alert('Rangos salariales para jóvenes en BA (2024):\n\n💰 Retail: $180.000 - $280.000\n🍕 Gastronomía: $160.000 - $250.000\n📞 Call Center: $200.000 - $320.000\n💼 Administración: $220.000 - $350.000\n💻 Tech Junior: $300.000 - $500.000\n📱 Marketing: $240.000 - $400.000\n\n*Valores aproximados, pueden variar según empresa y experiencia');
}

function showTrainingTips() {
    alert('Guía de capacitación:\n\n🎓 Priorizá cursos con certificación\n💻 Aprendé Excel e inglés básico\n🔄 Combiná cursos online y presenciales\n👥 Participá en workshops y networking\n📚 Usá plataformas gratuitas como Coursera\n🏆 Buscá becas y programas gubernamentales');
}

function openZonaJobs() {
    alert('ZonaJobs es el portal de empleos más grande de Argentina. Creá tu perfil completo y configurá alertas de trabajo para recibir notificaciones de nuevas oportunidades.');
}

function openComputrabajo() {
    alert('Computrabajo tiene una gran variedad de empleos para jóvenes. Subí tu CV y aplicá directamente desde la plataforma.');
}

function openLinkedIn() {
    alert('LinkedIn es fundamental para tu carrera profesional. Creá un perfil profesional, conectate con colegas y seguí empresas de tu interés.');
}

function openBumeran() {
    alert('Bumeran es muy popular en Argentina. Ofrecen test psicotécnicos y tienen buenas oportunidades para jóvenes profesionales.');
}

function openIndeed() {
    alert('Indeed es una plataforma global con muchas oportunidades. Podés filtrar por ubicación, salario y tipo de trabajo.');
}

function openCursos() {
    alert('El Gobierno de la Ciudad de Buenos Aires ofrece cursos gratuitos de oficios, idiomas y habilidades digitales. Consultá en la página oficial de GCBA.');
}

function openUTN() {
    alert('La UTN ofrece cursos técnicos y de extensión muy valorados por las empresas. Muchos son gratuitos o de bajo costo.');
}

function openCoderhouse() {
    alert('Coder House ofrece becas para sus cursos de programación, diseño y marketing digital. Postulate a sus programas de becas.');
}

function openDigitalHouse() {
    alert('Digital House tiene excelentes cursos de programación y marketing digital. Consultá sus opciones de financiamiento.');
}

function openYouTube() {
    alert('YouTube tiene miles de tutoriales gratuitos. Recomendamos canales como: FreeCodeCamp, Platzi, y HolaMundo para programación.');
}

function generateAdvice() {
    const age = document.getElementById('age').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const area = document.getElementById('area').value;

    if (!age || !education || !experience || !area) {
        alert('Por favor, completá todos los campos para recibir consejos personalizados.');
        return;
    }

    let advice = '';
    
    // Consejos por edad
    if (age >= 16 && age <= 18) {
        advice += '🎓 <strong>Por tu edad:</strong> Enfocate en trabajos de medio tiempo que te permitan estudiar. Los empleadores valoran la responsabilidad a temprana edad.<br><br>';
    } else if (age >= 19 && age <= 22) {
        advice += '⚡ <strong>Por tu edad:</strong> Tenés flexibilidad para explorar diferentes áreas. Considerá prácticas profesionales y trabajos que te den experiencia.<br><br>';
    } else {
        advice += '🚀 <strong>Por tu edad:</strong> Estás en el momento ideal para establecer tu carrera. Enfocate en posiciones que ofrezcan crecimiento profesional.<br><br>';
    }

    // Consejos por educación
    if (education === 'secundario') {
        advice += '📚 <strong>Educación:</strong> Mientras terminás el secundario, buscá trabajos de medio tiempo en retail o gastronomía. Esto te dará experiencia valiosa.<br><br>';
    } else if (education === 'secundario-completo') {
        advice += '🎯 <strong>Educación:</strong> Con el secundario completo, tenés acceso a más oportunidades. Considerá cursos técnicos para especializarte.<br><br>';
    } else if (education === 'terciario') {
        advice += '📖 <strong>Educación:</strong> Buscá trabajos relacionados con tu carrera, aunque sea como junior. Las prácticas profesionales son excelentes.<br><br>';
    } else {
        advice += '🎓 <strong>Educación:</strong> Con tu título, apuntá a posiciones que requieran tu nivel educativo. Destacá tus conocimientos especializados.<br><br>';
    }

    // Consejos por experiencia
    if (experience === 'ninguna') {
        advice += '💪 <strong>Experiencia:</strong> Sin experiencia no es problema. Destacá tus habilidades, voluntariados, y proyectos personales. Mostrá ganas de aprender.<br><br>';
    } else if (experience === 'temporal') {
        advice += '⭐ <strong>Experiencia:</strong> Tu experiencia temporal es valiosa. Destacá las habilidades que desarrollaste y la responsabilidad que demostraste.<br><br>';
    } else {
        advice += '🏆 <strong>Experiencia:</strong> Con experiencia formal, tenés ventaja. Enfocate en roles que te permitan crecer y usar tus habilidades previas.<br><br>';
    }

    // Consejos por área
    const areaAdvice = {
        'retail': '🛍️ <strong>Retail/Ventas:</strong> Destacá tu capacidad de comunicación y trabajo en equipo. Muchas empresas buscan jóvenes con energía para ventas.',
        'gastronomia': '🍕 <strong>Gastronomía:</strong> Es un sector con mucha demanda. Mostrá tu capacidad de trabajo bajo presión y atención al detalle.',
        'administracion': '💼 <strong>Administración:</strong> Enfatizá tu organización y conocimientos de Office. Muchas empresas buscan asistentes administrativos.',
        'tecnologia': '💻 <strong>Tecnología:</strong> Sector en crecimiento. Aprendé constantemente y creá un portfolio con tus proyectos.',
        'marketing': '📱 <strong>Marketing:</strong> Mostrá tu creatividad y conocimiento de redes sociales. Las empresas buscan jóvenes con perspectiva digital.',
        'educacion': '👨‍🏫 <strong>Educación:</strong> Destacá tu paciencia y habilidades de comunicación. Considerá dar clases particulares para ganar experiencia.'
    };

    advice += areaAdvice[area] || '';

    advice += '<br><br>🎯 <strong>Tu próximo paso:</strong> Actualizá tu CV con esta información y aplicá a 3-5 empleos esta semana. ¡Vas por buen camino!';

    document.getElementById('adviceContent').innerHTML = advice;
    document.getElementById('personalizedResult').style.display = 'block';
}