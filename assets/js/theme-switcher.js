document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeStyle = document.getElementById('theme-style');
    const themeLogo = document.getElementById('theme-logo');
    const html = document.documentElement;
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        setDarkTheme();
    } else {
        setLightTheme();
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        if (html.getAttribute('data-theme') === 'dark') {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    });
    
    function setDarkTheme() {
        html.setAttribute('data-theme', 'dark');
        themeStyle.href = 'assets/css/dark-theme.css';
        themeLogo.src = 'assets/img/logo-dark.png';
        localStorage.setItem('theme', 'dark');
    }
    
    function setLightTheme() {
        html.setAttribute('data-theme', 'light');
        themeStyle.href = 'assets/css/light-theme.css';
        themeLogo.src = 'assets/img/logo-light.png';
        localStorage.setItem('theme', 'light');
    }
});
