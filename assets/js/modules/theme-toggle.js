const THEME_STORAGE_KEY = 'portfolio-theme';

function getPreferredTheme() {
    try {
        const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (storedTheme === 'light' || storedTheme === 'dark') {
            return storedTheme;
        }
    } catch (error) {
        return document.documentElement.dataset.theme || 'dark';
    }

    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
    }

    return 'dark';
}

function setTheme(theme, toggle) {
    const nextTheme = theme === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;

    if (!toggle) {
        return;
    }

    const isLight = nextTheme === 'light';

    toggle.setAttribute('aria-pressed', String(isLight));
    toggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    toggle.setAttribute('title', isLight ? 'Switch to dark theme' : 'Switch to light theme');
}

function persistTheme(theme) {
    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
        // Theme changes still work for the current page if storage is unavailable.
    }
}

export function initThemeToggle() {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) {
        return;
    }

    setTheme(getPreferredTheme(), toggle);

    toggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.dataset.theme || 'dark';
        const nextTheme = currentTheme === 'light' ? 'dark' : 'light';

        setTheme(nextTheme, toggle);
        persistTheme(nextTheme);
    });
}
