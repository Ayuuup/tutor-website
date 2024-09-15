const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-items');
hamburgerButton.addEventListener('click',openMenu);
function openMenu(){
    navMenu.classList.toggle('active');
    hamburgerButton.classList.toggle('active')
}

const navLinks = document.querySelectorAll('.nav-items li')
navLinks.forEach(link=>link.addEventListener('click',closeMenu))
function closeMenu(){
    hamburgerButton.classList.remove('active')
    navMenu.classList.remove('active')
}