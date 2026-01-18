/**
 * JOBS ENGINE - Orihuela Costa 2026
 * Maneja el filtrado de ofertas y la lógica de postulación.
 */

// 1. FILTRADO DE EMPLEOS
function filterJobs(category) {
    const cards = document.querySelectorAll('.job-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Actualizar estado visual de los botones
    buttons.forEach(btn => {
        if (btn.getAttribute('onclick').includes(`'${category}'`)) {
            btn.classList.add('border-cyan-500', 'text-cyan-500');
            btn.classList.remove('border-gray-800', 'text-gray-500');
        } else {
            btn.classList.remove('border-cyan-500', 'text-cyan-500');
            btn.classList.add('border-gray-800', 'text-gray-500');
        }
    });

    // Filtrar tarjetas con animación
    cards.forEach(card => {
        card.style.opacity = '0';
        setTimeout(() => {
            if (category === 'todos' || card.dataset.category === category) {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 50);
            } else {
                card.style.display = 'none';
            }
        }, 300);
    });
}

// 2. LÓGICA DE POSTULACIÓN (1-CLICK)
function handleJobApplication(jobTitle) {
    const isProfileReady = localStorage.getItem('oc_profile_ready');
    const userName = localStorage.getItem('oc_candidate_name');

    if (isProfileReady === 'true' && userName) {
        // Simulación de envío exitoso
        alert(`🚀 ¡POSTULACIÓN ENVIADA!\n\nHola ${userName}, tu perfil y CV han sido enviados a la oferta: ${jobTitle}.\n\nRevisa tu correo para próximas instrucciones.`);
        
        if (typeof showNotification === 'function') {
            showNotification('ÉXITO', `Postulación enviada para ${jobTitle}`);
        }
    } else {
        // Si no hay perfil, invitamos a crear uno
        alert("⚠️ PERFIL NO DETECTADO\n\nPara usar la postulación 1-Click, primero configura tu perfil en el panel superior.");
        openProfileConfig(); // Abre automáticamente el modal de perfil
    }
}
