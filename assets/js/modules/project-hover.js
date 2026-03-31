export function initProjectCardHover() {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.style.animation = 'glitch 0.3s';

            setTimeout(() => {
                card.style.animation = '';
            }, 300);
        });
    });
}
