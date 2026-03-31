export function initParallax() {
    const parallaxGrid = document.querySelector('.bg-grid');
    if (!parallaxGrid) {
        return;
    }

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        parallaxGrid.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
}
