import { initSmoothScroll } from './modules/smooth-scroll.js';
import { initTypewriter } from './modules/typewriter.js';
import { initParallax } from './modules/parallax.js';
import { initProjectCardHover } from './modules/project-hover.js';
import { initKonamiEasterEgg } from './modules/konami.js';
import { initRevealOnScroll } from './modules/reveal-on-scroll.js';

function initApp() {
    initSmoothScroll();
    initTypewriter({ selector: '.subtitle', delay: 500, speed: 100 });
    initParallax();
    initProjectCardHover();
    initKonamiEasterEgg();
    initRevealOnScroll();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
