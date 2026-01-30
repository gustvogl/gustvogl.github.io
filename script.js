/* --- script.js --- */

// 1. Inicializa as Animações de Scroll (AOS)
AOS.init({
    duration: 1000, // Duração da animação (1 segundo)
    once: true,     // Anima apenas uma vez ao descer
});

// 2. Efeito de Digitação (Typed.js)
var typed = new Typed(".auto-type", {
    strings: ["Estudante de Sistemas", "Dev Front-End", "Apaixonado por Tecnologia"],
    typeSpeed: 100,  // Velocidade para digitar
    backSpeed: 50,   // Velocidade para apagar
    loop: true       // Fica repetindo
});

// 3. Menu Mobile (Para celular)
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});