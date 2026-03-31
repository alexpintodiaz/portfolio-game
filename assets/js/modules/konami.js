function activateEasterEgg() {
    const effectTargets = document.querySelectorAll('main, footer, .bg-grid, .scanlines');

    effectTargets.forEach((element) => {
        element.style.animation = 'rainbow 2s';
    });

    setTimeout(() => {
        effectTargets.forEach((element) => {
            element.style.animation = '';
        });
    }, 2000);
}

export function initKonamiEasterEgg() {
    const arrowCombo = [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight'
    ];

    let comboIndex = 0;

    document.addEventListener('keydown', (event) => {
        if (!event.key.startsWith('Arrow')) {
            comboIndex = 0;
            return;
        }

        if (event.key === arrowCombo[comboIndex]) {
            comboIndex += 1;
        } else if (event.key === arrowCombo[0]) {
            comboIndex = 1;
        } else {
            comboIndex = 0;
        }

        if (comboIndex === arrowCombo.length) {
            activateEasterEgg();
            comboIndex = 0;
        }
    });
}
