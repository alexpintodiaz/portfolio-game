export function initRevealOnScroll() {
    const elements = document.querySelectorAll('.experience-item, .project-card');
    if (!elements.length) {
        return;
    }

    if (!('IntersectionObserver' in window)) {
        return;
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1s';
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach((element) => {
        element.style.opacity = '0';
        observer.observe(element);
    });
}
