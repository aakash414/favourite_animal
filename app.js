//header
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', function() {
  nav.classList.toggle('open');
});




// img and feature transform

const container = document.querySelector('.container');
const leftSection = document.querySelector('.left-section');
const rightSection = document.querySelector('.right-section');

function parallax() {
  const scrollY = window.pageYOffset;
  leftSection.style.transform = `translateY(${scrollY * 0.4}px)`;
  rightSection.style.transform = `translateY(${scrollY * 0.4}px)`;
}

window.addEventListener('scroll', parallax);






//footer icon transform

const socialMediaLinks = document.querySelectorAll('.social-media-links a');

socialMediaLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.2)';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });
});
