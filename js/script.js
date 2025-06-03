const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-items');
const nav = document.querySelector('nav');
const hero = document.querySelector('.hero');
hamburgerButton.addEventListener('click',openMenu);
function openMenu(){
    navMenu.classList.toggle('active');
    hamburgerButton.classList.toggle('active')
    let navHeight = nav.offsetHeight;

    // If nav-items is active (visible), add its height too
    if (navMenu.classList.contains('active')) {
        navHeight += navMenu.offsetHeight;
    }

    hero.style.paddingTop = navHeight + 'px';

}

const navLinks = document.querySelectorAll('.nav-items li')
navLinks.forEach(link=>link.addEventListener('click',closeMenu))
function closeMenu(){
    hamburgerButton.classList.remove('active')
    navMenu.classList.remove('active')
}