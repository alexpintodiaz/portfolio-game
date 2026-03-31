export function initSmoothScroll() {
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            const selector = anchor.getAttribute('href');
            const target = selector ? document.querySelector(selector) : null;

            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}
