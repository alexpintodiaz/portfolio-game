export function initNavVisibility() {
    const nav = document.querySelector('nav');
    if (!nav) {
        return;
    }

    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNav() {
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > lastScrollY;
        const passedThreshold = currentScrollY > 96;
        const delta = Math.abs(currentScrollY - lastScrollY);

        if (passedThreshold && scrollingDown && delta > 6) {
            nav.classList.add('nav-hidden');
        } else if (!scrollingDown || currentScrollY <= 24) {
            nav.classList.remove('nav-hidden');
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    window.addEventListener(
        'scroll',
        () => {
            if (!ticking) {
                window.requestAnimationFrame(updateNav);
                ticking = true;
            }
        },
        { passive: true }
    );
}
