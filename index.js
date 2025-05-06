const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
            menu.classList.remove('active');
            menuToggle.classList.remove('open');
        }
    });
});

// Scroll page
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const skills = document.querySelector(".skills");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");
const skill = document.querySelectorAll(".skill-category .skill-item");

window.onload = function () {
    home.classList.add("section")
}


window.onscroll = function () {
    if (window.scrollY >= about.offsetTop - 200) {
        about.classList.add("section")
    }
    if (window.scrollY >= skills.offsetTop - 200) {
        skills.classList.add("section");

        skill.forEach((ele) => {
            const element = ele.querySelector(".progress");
            element.style.width = element.dataset.width;
            const span = ele.querySelector(".skill-info span:last-child");
            const R = span.getAttribute("data-range");

            if (span.innerHTML === "0%") {
                let c = 0;
                let range = setInterval(() => {
                    c++;
                    span.innerHTML = `${c}%`;
                    if (c == R) {
                        clearInterval(range);
                    }
                }, 20);
            }
        });
    }
    if (window.scrollY >= projects.offsetTop - 200) {
        projects.classList.add("section")
    }
    if (window.scrollY >= contact.offsetTop - 200) {
        contact.classList.add("section")
    }
}

// Typed.js Animation
document.addEventListener('DOMContentLoaded', function () {
    const typed = new Typed('.typed-text', {
        strings: ['Front-End Developer', 'React Developer'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
});

