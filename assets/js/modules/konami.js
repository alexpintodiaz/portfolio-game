function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s';

    setTimeout(() => {
        document.body.style.animation = '';
        alert('🎮 Achievement Unlocked: Konami Master! 🎮');
    }, 2000);
}

export function initKonamiEasterEgg() {
    const konamiCode = [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
        'b',
        'a'
    ];

    let konamiIndex = 0;

    document.addEventListener('keydown', (event) => {
        if (event.key === konamiCode[konamiIndex]) {
            konamiIndex += 1;

            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}
