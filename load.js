// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM cargado completamente');
    
    // Variables
    let progress = 0;
    const maxProgress = 90;
    const heart = document.getElementById('heartClick');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const loadingText = document.getElementById('loadingText');
    const loadingProgress = document.getElementById('loadingProgress');
    const preloader = document.getElementById('preloader');
    const container = document.querySelector('.container');
    const section = document.querySelector('.photo-section');
    const partUp = document.querySelector('.partUp')
    
    // Verificar que todos los elementos existen
    console.log('Elementos encontrados:');
    console.log('- heart:', heart);
    console.log('- progressFill:', progressFill);
    console.log('- progressText:', progressText);
    console.log('- loadingText:', loadingText);
    console.log('- loadingProgress:', loadingProgress);
    console.log('- preloader:', preloader);
    console.log('- container:', container);
    
    // Si no encuentra el corazón, mostrar error
    if (!heart) {
        console.error('❌ No se encontró el elemento con ID "heartClick"');
        return;
    }
    
    // Circunferencia del círculo
    const circumference = 2 * Math.PI * 45;
    
    // Pasos de progreso
    const pasos = [17, 33, 50, 72, 90];
    let pasoIndex = 0;
    
    // Textos personalizados
    const mensajes = {
        17: 'Sigue así :D',
        33: 'Otra vez',
        50: 'Un poquito más >:D',
        72: '¡La última vez!',
        90: 'Buena Gigante'
    };
    
    // Función para actualizar el progreso
    function updateProgress() {
        progressText.textContent = `${progress}%`;
        const offset = circumference - (progress / 90) * circumference;
        progressFill.style.strokeDashoffset = offset;
        
        if (mensajes[progress]) {
            loadingProgress.textContent = mensajes[progress];
        }
        
        if (progress > 80) {
            progressFill.style.stroke = '#e74c3c';
        } else if (progress > 50) {
            progressFill.style.stroke = '#e67e22';
        } else {
            progressFill.style.stroke = '#9de58a';
        }
    }
    
    heart.addEventListener('click', function(e) {
        e.stopPropagation();
        
        
        if (progress >= maxProgress) {
            return;
        }
        
        if (pasoIndex < pasos.length) {
            progress = pasos[pasoIndex];
            pasoIndex++;
        }
        
        console.log(`Progreso: ${progress}%`);
        updateProgress();
        
        // Animación
        this.style.transform = 'scale(1.3)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
        
        if (progress >= maxProgress) {
            completarCarga();
        }
    });
    
    // Función completar carga
    function completarCarga() {
        section.classList.add("section1");
        partUp.classList.add("section2");
        heart.style.pointerEvents = 'none';
        
        heart.style.transform = 'scale(1.5)';
        setTimeout(() => {
            heart.style.transform = 'scale(1)';
        }, 300);
        
        setTimeout(() => {
            preloader.style.transition = 'opacity 0.8s ease';
            preloader.style.opacity = '0';
            
            setTimeout(() => {
                preloader.style.display = 'none';
                if (container) {
                    container.style.display = 'block';
                    container.style.opacity = '1';
                    container.classList.add('visible');
                }
                window.dispatchEvent(new Event('scroll'));
            }, 800);
        }, 1000);
    }
    
    // Inicializar
    function init() {
        progressFill.style.strokeDasharray = circumference;
        progressFill.style.strokeDashoffset = circumference;
        progressText.textContent = '0%';
        loadingProgress.textContent = 'Toca el corazón';
        pasoIndex = 0;
        progress = 0;
        
        if (container) {
            container.style.display = 'none';
            container.style.opacity = '0';
        }
        
        heart.style.pointerEvents = 'auto';
        heart.style.cursor = 'pointer';
    }
    
    init();
});

// Si el DOM ya está cargado, ejecutar inmediatamente
if (document.readyState === 'complete') {
    document.dispatchEvent(new Event('DOMContentLoaded'));
}