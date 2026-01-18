/**
 * ORIHUELA COSTA 2026 - CORE ENGINE (main.js)
 */

document.addEventListener('DOMContentLoaded', () => {
    // Iniciar funciones principales
    initClock();
    checkNightProtocol();
    initNotifications();
    
    console.log("Sistemas de Orihuela Costa 2026 inicializados...");
});

// 1. RELOJ DEL SISTEMA EN TIEMPO REAL
function initClock() {
    const timeDisplay = document.getElementById('current-time');
    
    function updateTime() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('es-ES', { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            hour12: false 
        });
        
        if (timeDisplay) {
            timeDisplay.innerHTML = `<span class="text-red-600 font-bold">[</span> ${timeStr} <span class="text-red-600 font-bold">]</span>`;
        }
    }
    
    setInterval(updateTime, 1000);
    updateTime();
}

// 2. PROTOCOLO NOCTURNO (AMBER MODE)
function checkNightProtocol() {
    const hour = new Date().getHours();
    const body = document.body;
    
    // Se activa de 20:00 a 07:00
    if (hour >= 20 || hour < 7) {
        body.classList.add('night-mode');
        console.log("Protocolo Nocturno: ACTIVADO");
    }
}

// Alternar modo noche manualmente (Para el botón del Header)
function toggleManualNightMode() {
    document.body.classList.toggle('night-mode');
    const isNight = document.body.classList.contains('night-mode');
    showNotification('SISTEMA', `Modo ${isNight ? 'Ámbar (Noche)' : 'Cian (Día)'} activado`);
}

// 3. SISTEMA DE NOTIFICACIONES (LOGS)
function showNotification(title, message) {
    // Si tienes un contenedor de notificaciones en el HTML, puedes inyectarlo aquí
    // Por ahora, lo lanzamos como un log estilizado en consola y un alert suave
    console.log(`%c[${title}] %c${message}`, 'color: cyan; font-weight: bold', 'color: white');
    
    // Opcional: Podrías crear un div temporal para mostrarlo en pantalla
}

// 4. CONTROL DEL MODAL DE ALERTA (BOTÓN FLOTANTE)
function toggleAlertModal() {
    const modal = document.getElementById('alert-modal');
    if (!modal) return;

    if (modal.classList.contains('hidden')) {
        modal.innerHTML = `
            <div class="glass-dark border-2 border-red-600 p-8 rounded-[2rem] max-w-lg w-full font-mono">
                <h2 class="text-red-600 text-2xl font-black mb-4 animate-pulse uppercase tracking-tighter">🚨 Terminal de Incidencias</h2>
                <div class="bg-black/80 p-4 rounded-xl border border-red-900/50 mb-6 text-xs text-red-400">
                    <p>> [INFO] Detectando incidencias en Orihuela Costa...</p>
                    <p>> [OK] Radar meteorológico estable.</p>
                    <p>> [ADVERTENCIA] Alta ocupación en Parking La Zenia.</p>
                </div>
                <button onclick="document.getElementById('alert-modal').classList.add('hidden')" 
                        class="w-full py-4 bg-red-600 text-black font-black rounded-xl hover:bg-white transition-all">
                    CERRAR TERMINAL
                </button>
            </div>
        `;
        modal.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
    }
}
