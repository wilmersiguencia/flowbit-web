import translations from './translations.js';

const langButton = document.getElementById('lang-switch');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

let currentLang = 'es';

// --- Lógica de Idioma ---
langButton.addEventListener('click', () => {
    // 1. Cambiamos el idioma actual
    currentLang = currentLang === 'es' ? 'en' : 'es';
    
    // 2. Buscamos todos los elementos que tengan data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        // 3. Verificamos que la traducción exista en translations.js
        if (translations[currentLang] && translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    console.log(`Idioma cambiado a: ${currentLang}`);
});

// --- Lógica de Modo Oscuro ---
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
});

