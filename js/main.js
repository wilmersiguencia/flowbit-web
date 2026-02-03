const themeThoggle = document.getElementById('theme-toggle');
const body = document.body;

//logica de modo oscuro
themeThoggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
});

