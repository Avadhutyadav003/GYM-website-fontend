document.addEventListener('DOMContentLoaded', () => {
  /*=============== SHOW MENU ===============*/
  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

  /*=============== REMOVE MENU MOBILE ===============*/
  const navLink = document.querySelectorAll('.nav__link');

  const linkAction = () => {
    navMenu.classList.remove('show-menu');
  };
  navLink.forEach(n => n.addEventListener('click', linkAction));

  /*=============== CHANGE BACKGROUND HEADER ===============*/
  const scrollHeader = () => {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
      header.classList.add('bg-header');
    } else {
      header.classList.remove('bg-header');
    }
  };
  window.addEventListener('scroll', scrollHeader);

  /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
  const sections = document.querySelectorAll('section[id]');

  const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute('id');

      const sectionLink = document.querySelector(`.nav__menu a[href*='${sectionId}']`);

      if (sectionLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionLink.classList.add('active-link');
        } else {
          sectionLink.classList.remove('active-link');
        }
      }
    });
  };
  window.addEventListener('scroll', scrollActive);

  /*=============== SHOW SCROLL UP ===============*/ 
 /*=============== SCROLL REVEAL ANIMATION ===============*/
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: false // set to true if you want animations to repeat on scroll
  });

  // General content
  sr.reveal(`.home__data, .footer__container, .footer__group`);
  
  // Animating from bottom
  sr.reveal(`.home__img`, { delay: 700, origin: 'bottom' });

  // Sequential reveals
  sr.reveal(`.logos__img, .program__card, .pricing__card`, { interval: 100 });

  // Left side content
  sr.reveal(`.choose__img, .calculate__content`, { origin: 'left' });

  // Right side content
  sr.reveal(`.choose__content, .calculate__img`, { origin: 'right' });
} else {
  console.warn('ScrollReveal is not defined. Please check your script import.');
}


  /*=============== CALCULATE BMI ===============*/
  const calculateForm = document.getElementById('calculate-form'),
        calculateCm = document.getElementById('calculate-cm'),
        calculateKg = document.getElementById('calculate-kg'),
        calculateMessage = document.getElementById('calculate-message');

  if (calculateForm) {
    calculateForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const cm = parseFloat(calculateCm.value),
            kg = parseFloat(calculateKg.value);

      if (!cm || !kg) {
        calculateMessage.classList.remove('color-green');
        calculateMessage.classList.add('color-red');
        calculateMessage.textContent = 'Fill in the Height and Weight';

        setTimeout(() => {
          calculateMessage.textContent = '';
        }, 3000);
        return;
      }

      const bmi = Math.round(kg / ((cm / 100) ** 2));
      let status = '';

      if (bmi < 18.5) status = 'skinny';
      else if (bmi < 25) status = 'healthy';
      else status = 'overweight';

      calculateMessage.classList.add('color-green');
      calculateMessage.textContent = `Your BMI is ${bmi} and you are ${status}`;

      calculateCm.value = '';
      calculateKg.value = '';

      setTimeout(() => {
        calculateMessage.textContent = '';
      }, 4000);
    });
  }

  /*=============== EMAIL JS ===============*/
  const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message'),
        contactUser = document.getElementById('contact-user');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (contactUser.value.trim() === '') {
        contactMessage.classList.remove('color-green');
        contactMessage.classList.add('color-red');
        contactMessage.textContent = 'You must enter Email';

        setTimeout(() => {
          contactMessage.textContent = '';
        }, 3000);
      } else {
        contactMessage.classList.remove('color-red');
        contactMessage.classList.add('color-green');
        contactMessage.textContent = 'Email sent successfully (mock)';

        setTimeout(() => {
          contactMessage.textContent = '';
        }, 3000);

        contactUser.value = '';
      }
    });
  }
});
