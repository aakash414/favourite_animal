//header
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', function() {
  nav.classList.toggle('open');
});





// Add a hover effect to the cards
const cards = document.querySelectorAll('.card');

function handleCardHover() {
  this.classList.toggle('card-hover');
}

cards.forEach(card => card.addEventListener('mouseenter', handleCardHover));
cards.forEach(card => card.addEventListener('mouseleave', handleCardHover));







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
