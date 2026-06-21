(function () {
    'use strict';

    const html = document.documentElement;
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const themeToggle = document.querySelector('.theme-toggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const revealElements = document.querySelectorAll('.reveal');
    const skillBars = document.querySelectorAll('.skill-progress');
    const contactForm = document.getElementById('contact-form');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    let lastScroll = 0;
    const scrollThreshold = 50;

    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = savedTheme || (prefersDark ? 'dark' : 'light');
        html.setAttribute('data-theme', theme);
    }

    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    function handleScroll() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }

    function toggleMobileMenu() {
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    function closeMobileMenu() {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
    }

    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    function handleNavClick(e) {
        const href = e.currentTarget.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            smoothScroll(href);
            closeMobileMenu();
        }
    }

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }

    function animateSkillBars() {
        skillBars.forEach(bar => {
            const windowHeight = window.innerHeight;
            const barTop = bar.getBoundingClientRect().top;
            const progress = bar.getAttribute('data-progress');

            if (barTop < windowHeight - 50 && !bar.classList.contains('animated')) {
                setTimeout(() => {
                    bar.style.width = progress + '%';
                    bar.classList.add('animated');
                }, 200);
            }
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const submitBtn = form.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = `
            <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="32">
                    <animate attributeName="stroke-dashoffset" values="32;0" dur="1s" repeatCount="indefinite"/>
                </circle>
            </svg>
            Enviando...
        `;
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Mensagem Enviada!
            `;
            submitBtn.style.background = 'linear-gradient(135deg, #ffffff, #cccccc)';
            submitBtn.style.color = '#070707';

            setTimeout(() => {
                form.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 2500);
        }, 1500);
    }

    function handleScrollIndicatorClick() {
        const sobreSection = document.getElementById('sobre');
        if (sobreSection) {
            const offsetTop = sobreSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    function init() {
        initTheme();

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('scroll', revealOnScroll, { passive: true });
        window.addEventListener('scroll', animateSkillBars, { passive: true });

        themeToggle.addEventListener('click', toggleTheme);

        mobileMenuBtn.addEventListener('click', toggleMobileMenu);

        navLinks.forEach(link => {
            link.addEventListener('click', handleNavClick);
        });

        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmit);
        }

        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', handleScrollIndicatorClick);
        }

        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') &&
                !navMenu.contains(e.target) &&
                !mobileMenuBtn.contains(e.target)) {
                closeMobileMenu();
            }
        });

        revealOnScroll();
        animateSkillBars();

        // Clickable interest cards
        const projetoCards = document.querySelectorAll('.projeto-card[data-href]');
        projetoCards.forEach(card => {
            card.addEventListener('click', function () {
                const href = this.getAttribute('data-href');
                if (href) {
                    window.location.href = href;
                }
            });
        });

        window.addEventListener('load', () => {
            document.body.style.opacity = '1';
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();