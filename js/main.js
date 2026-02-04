import translations from './translations.js';

const themeThoggle = document.getElementById('theme-toggle');
const langButton = document.getElementById('lang-switch');
const body = document.body;

let currentLang = 'es';

langButton.addEventListener('click', () => {
    //cambiamos el idioma
    currentLang = currentLang === 'es' ? 'en' : 'es';

    //buscamoas todos los elementos en el atributo data-i18n
    document.querySelectorAll('[data-i18n}').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

});

//logica de modo oscuro
themeThoggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
});

