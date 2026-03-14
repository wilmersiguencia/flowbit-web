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

if (langButton) {
    langButton.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        applyTranslations(currentLang);
    });
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Función para animar al hacer scroll
const reveal = () => {
    const elements = document.querySelectorAll(".reveal");

    elements.forEach(window_el => {
        const elementTop = window_el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100 && !window_el.classList.contains("active")) {
            window_el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", reveal);

window.addEventListener('DOMContentLoaded', () => {

    applyTranslations(currentLang);

    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);

    reveal();
})