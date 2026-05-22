export function initTypewriter(options = {}) {
    const selector = options.selector || '.subtitle';
    const delay = options.delay || 300;
    const speed = options.speed || 100;

    const subtitle = document.querySelector(selector);
    if (!subtitle) {
        return;
    }

    const text = (subtitle.dataset.text || subtitle.textContent || '').trim();
    if (!text) {
        return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        subtitle.textContent = text;
        return;
    }

    subtitle.textContent = '';
    let index = 0;

    function typeNextCharacter() {
        if (index < text.length) {
            subtitle.textContent += text.charAt(index);
            index += 1;
            setTimeout(typeNextCharacter, speed);
        }
    }

    setTimeout(typeNextCharacter, delay);
}
