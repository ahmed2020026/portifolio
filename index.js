const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

// Menu Toggle
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

// Close menu on link click (mobile)
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
            menu.classList.remove('active');
            menuToggle.classList.remove('open');
        }
    });
});

// Scroll Animation
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('nav ul li');

function checkScroll() {
    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('animated');

            // Update active nav item
            navItems.forEach(item => item.classList.remove('active'));
            navItems[index].classList.add('active');

            // Animate skills if it's the skills section
            if (section.id === 'skills') {
                animateSkills();
            }
        }
    });
}

// Initialize first section
window.addEventListener('load', () => {
    sections[0].classList.add('animated');
    navItems[0].classList.add('active');
    checkScroll();
});

// Scroll event with throttling
let isScrolling;
window.addEventListener('scroll', () => {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(checkScroll, 50);
}, { passive: true });

// Skills Animation
function animateSkills() {
    const skillItems = document.querySelectorAll(".skill-item");

    skillItems.forEach(item => {
        const progress = item.querySelector(".progress");
        const percentSpan = item.querySelector(".skill-info span:last-child");
        const targetPercent = percentSpan.getAttribute('data-range');
        const targetWidth = progress.getAttribute('data-width');

        if (percentSpan.textContent === "0%") {
            progress.style.width = targetWidth;

            let current = 0;
            const interval = setInterval(() => {
                current++;
                percentSpan.textContent = `${current}%`;
                if (current >= targetPercent) {
                    clearInterval(interval);
                }
            }, 20);
        }
    });
}

// Typed.js Animation
document.addEventListener('DOMContentLoaded', () => {
    new Typed('.typed-text', {
        strings: ['Front-End Developer', 'React Developer'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
});