import { initSmoothScroll } from './modules/smooth-scroll.js';
import { initTypewriter } from './modules/typewriter.js';
import { initProjectCardHover } from './modules/project-hover.js';
import { initKonamiEasterEgg } from './modules/konami.js';
import { initRevealOnScroll } from './modules/reveal-on-scroll.js';
import { initThemeToggle } from './modules/theme-toggle.js';
import { initNavVisibility } from './modules/nav-visibility.js';

function initApp() {
    initThemeToggle();
    initNavVisibility();
    initSmoothScroll();
    initTypewriter({ selector: '.subtitle', delay: 500, speed: 100 });
    initProjectCardHover();
    initKonamiEasterEgg();
    initRevealOnScroll();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
