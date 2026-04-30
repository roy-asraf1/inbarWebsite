// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => {
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '100%';
    links.style.right = '0';
    links.style.left = '0';
    links.style.background = 'var(--cream)';
    links.style.padding = '20px';
    links.style.gap = '16px';
    links.style.boxShadow = 'var(--shadow-md)';
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
            links.style.display = 'none';
        }
    });
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
            io.unobserve(e.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.service-card, .why-card, .gallery-item, .persona-card, .process-step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    io.observe(el);
});
