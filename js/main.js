import translations from './translations.js';

const langButton = document.getElementById('lang-switch');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

//cargamos el idioma guardado pro defecto 
let currentLang = localStorage.getItem('preferredLang') || 'en';

const applyTranslations = (lang) => {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    localStorage.setItem('preferredLang', lang);
};

// --- Lógica de Idioma ---
langButton.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    applyTranslations(currentLang);
    console.log(`Idioma cambiado a: ${currentLang}`);
});

// --- Lógica de Modo Oscuro ---
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

//al cargar la pagina
window.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLang);

    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    reveal();
});

// Función para animar al hacer scroll
const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(window_el => {
        const windowHeight = window.innerHeight;
        const revealTop = window_el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 150) {
            window_el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", reveal);