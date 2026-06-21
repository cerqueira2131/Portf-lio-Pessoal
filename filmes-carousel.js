document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.movie-scroll-container');
    const sections = document.querySelectorAll('.movie-section');
    const backgrounds = document.querySelectorAll('.movie-bg');

    const observerOptions = {
        root: scrollContainer,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add active class to section content for animation
                entry.target.classList.add('in-view');

                // Handle background fade
                const index = entry.target.getAttribute('data-index');
                backgrounds.forEach(bg => {
                    if (bg.getAttribute('data-bg') === index) {
                        bg.classList.add('active');
                    } else {
                        bg.classList.remove('active');
                    }
                });
            } else {
                // Optional: remove in-view to replay animation when scrolling back
                entry.target.classList.remove('in-view');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
