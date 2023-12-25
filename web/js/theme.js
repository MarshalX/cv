const changeIconsTheme = (isDark) => document.querySelectorAll('img').forEach(icon => {
    icon.src = icon.src.replace(isDark ? 'dark' : 'light', isDark ? 'light' : 'dark');
});

window.matchMedia && changeIconsTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', e => changeIconsTheme(e.matches));
