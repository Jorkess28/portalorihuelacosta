/**
 * PROFILE ENGINE - Orihuela Costa 2026
 * Gestiona el almacenamiento local y la experiencia 1-Click
 */

// 1. Abrir Modal de Configuración
function openProfileConfig() {
    const modal = document.getElementById('profile-modal');
    
    // Inyectamos el contenido del modal si está vacío
    modal.innerHTML = `
        <div class="glass-dark w-full max-w-md rounded-[2.5rem] border-2 border-cyan-500 shadow-2xl overflow-hidden fade-in-up">
            <div class="bg-cyan-900/50 p-6 flex justify-between items-center border-b border-cyan-500/30">
                <h3 class="font-bold text-white tracking-widest"><i class="fas fa-id-card mr-2"></i>CONFIGURAR_PERFIL</h3>
                <button onclick="closeProfileConfig()" class="text-white hover:text-cyan-400">✕</button>
            </div>
            <div class="p-8">
                <p class="text-gray-400 text-xs mb-6 font-mono">> Introduce tus datos para activar la postulación instantánea en la red local.</p>
                
                <label class="block text-[10px] font-bold text-cyan-500 mb-2 uppercase tracking-widest">Nombre Completo</label>
                <input type="text" id="user-name-input" placeholder="Nombre y Apellidos" 
                       class="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 text-white mb-6 outline-none focus:border-cyan-500 transition-all">
                
                <label class="block text-[10px] font-bold text-cyan-500 mb-2 uppercase tracking-widest">Tu CV Maestro (PDF)</label>
                <div class="border-2 border-dashed border-gray-800 rounded-2xl p-6 text-center cursor-pointer hover:border-cyan-500 transition-colors group" onclick="document.getElementById('profile-file').click()">
                    <i class="fas fa-file-pdf text-3xl text-gray-700 group-hover:text-cyan-500 mb-2"></i>
                    <p id="file-status-text" class="text-xs text-gray-500">Haz clic para vincular PDF</p>
                    <input type="file" id="profile-file" class="hidden" accept=".pdf" onchange="updateFileStatus(this)">
                </div>
                
                <button onclick="saveCandidateProfile()" class="w-full mt-8 bg-cyan-600 py-4 rounded-2xl font-black text-xs text-white hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-900/20 uppercase tracking-[0.2em]">
                    Guardar Cambios
                </button>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
    
    // Si ya existe un nombre guardado, lo ponemos en el input
    const savedName = localStorage.getItem('oc_candidate_name');
    if(savedName) document.getElementById('user-name-input').value = savedName;
}

function closeProfileConfig() {
    document.getElementById('profile-modal').classList.add('hidden');
}

function updateFileStatus(input) {
    const text = document.getElementById('file-status-text');
    if(input.files && input.files[0]) {
        text.innerText = "✅ " + input.files[0].name;
        text.classList.add('text-cyan-400');
    }
}

// 2. Guardar en LocalStorage
function saveCandidateProfile() {
    const name = document.getElementById('user-name-input').value;
    const fileInput = document.getElementById('profile-file');

    if (!name) {
        alert("Por favor, introduce tu nombre.");
        return;
    }

    localStorage.setItem('oc_candidate_name', name);
    localStorage.setItem('oc_profile_ready', 'true');
    
    // Actualizamos la UI inmediatamente
    updateUIFromStorage();
    closeProfileConfig();
    
    // Notificación visual (Si usas main.js showNotification)
    if(typeof showNotification === "function") {
        showNotification('SISTEMA', 'Perfil actualizado con éxito');
    }
}

// 3. Cargar datos al iniciar
function updateUIFromStorage() {
    const name = localStorage.getItem('oc_candidate_name');
    const isReady = localStorage.getItem('oc_profile_ready');
    
    if (name && isReady) {
        const nameDisplay = document.getElementById('profile-name');
        const infoDisplay = document.getElementById('profile-info');
        const iconContainer = document.getElementById('profile-icon');

        if(nameDisplay) nameDisplay.innerText = name;
        if(infoDisplay) infoDisplay.innerText = "SISTEMA 1-CLICK ACTIVADO";
        if(iconContainer) {
            iconContainer.innerHTML = '<i class="fas fa-check text-cyan-400"></i>';
            iconContainer.classList.add('border-cyan-500');
            iconContainer.classList.remove('border-gray-700');
        }
    }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', updateUIFromStorage);
