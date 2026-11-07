//media query 
const menuIcon = document.getElementById("menu-icon");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
});




const navLinks = document.querySelectorAll('header nav ul li a');
const logo = document.querySelector('#logo');
const sections = document.querySelectorAll('section');
const barsBox = document.querySelector('.bars-box');
const header = document.querySelector('header');

navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        sections.forEach(s => s.classList.remove('active'));
        navLinks.forEach(l => l.classList.remove('active'));

        setTimeout(() => {
            sections[index].classList.add('active');
            link.classList.add('active');
        }, 1100);

        barsBox.classList.remove('active');
        setTimeout(() => barsBox.classList.add('active'), 1100);

        header.classList.remove('active');
        setTimeout(() => header.classList.add('active'), 1100);
    });
});

logo.addEventListener('click', () => {
    sections.forEach(s => s.classList.remove('active'));
    sections[0].classList.add('active');
    navLinks.forEach(l => l.classList.remove('active'));
    navLinks[0].classList.add('active');
});

const btns = document.querySelectorAll('.resume-btn');
const resumeSections = document.querySelectorAll('.resume-details');

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        resumeSections.forEach(section => section.classList.remove('active'));

        btn.classList.add('active');
        resumeSections[index].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrowd-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrowd-left');
const imgSlide = document.querySelector('.portfolio-carousel .image-slide');
const portfolioDetails = document.querySelectorAll('.portfolio-details');

let index = 0; 

const activePortfolio = () => {
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    portfolioDetails.forEach(details => details.classList.remove('active'));
    portfolioDetails[index].classList.add('active');
};

arrowRight.addEventListener('click', () => {
    if (index < portfolioDetails.length - 1) {
        index++;
        arrowLeft.classList.remove('disabled');
    } 
    if (index === portfolioDetails.length - 1) {
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        arrowRight.classList.remove('disabled');
    } 
    if (index === 0) {
        arrowLeft.classList.add('disabled');
    }
    activePortfolio();
});
