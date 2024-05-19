/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.querySelectorAll(".nav");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


////////////////////




/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav__link');
  const mainContainers = document.querySelectorAll('.main-container');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Remove active-link from all nav links
      navLinks.forEach(nav => nav.classList.remove('active-link'));

      // Add active-link to the clicked nav link
      this.classList.add('active-link');

      // Get the target section ID
      const targetSection = this.getAttribute('href').substring(1);

      // Hide all main containers
      mainContainers.forEach(container => container.classList.remove('active'));

      // Show the targeted main container
      document.getElementById(targetSection).classList.add('active');
    });
  });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//   distance: '60px',
//   duration: 2500,
//   delay: 400,
//   // reset: true
// })

// sr.reveal(`.home__header, .section__title`, { delay: 600 })
// sr.reveal(`.home__footer`, { delay: 700 })
// sr.reveal(`.home__img`, { delay: 900, origin: 'top' })

// sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`, { origin: 'top', interval: 100 })
// sr.reveal(`.specs__data, .discount__animate`, { origin: 'left', interval: 100 })
// sr.reveal(`.specs__img, .discount__img`, { origin: 'right' })
// sr.reveal(`.case__img`, { origin: 'top' })
// sr.reveal(`.case__data`)