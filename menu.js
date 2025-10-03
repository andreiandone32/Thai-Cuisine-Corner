history.scrollRestoration = "manual";
 let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        navbar.classList.remove('hide');
        navbar.classList.remove('scrolled');
        return;
      }
      if (currentScroll > lastScroll) {
        navbar.classList.add('hide');
        navbar.classList.remove('scrolled');
      } else {
        navbar.classList.remove('hide');
        navbar.classList.add('scrolled');
      }
      lastScroll = currentScroll;
    });

    // HAMBURGER MENU
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    const logo = document.querySelector('.logo');

    function toggleMenu() {
      menu.classList.toggle('show');
      hamburger.classList.toggle('active');
      logo.style.opacity = menu.classList.contains('show') ? '0' : '1';
    }

    // CLOSE MENU ON OUTSIDE CLICK (RESPONSIVE)
    document.addEventListener('click', (e) => {
      if (menu.classList.contains('show') && !menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('show');
        hamburger.classList.remove('active');
        logo.style.opacity = '1';
      }
    });

    // SMOOTH SCROLL DOAR PENTRU ANCORE EXISTENTE
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e){
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about");
  function handleScroll() {
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (sectionPosition < screenPosition) {
      aboutSection.classList.add("visible");
      window.removeEventListener("scroll", handleScroll);
    }
  }
  window.addEventListener("scroll", handleScroll);

  const footerEnjoy = document.querySelector(".footer-enjoy");
  const originalText = footerEnjoy.textContent.trim();
  footerEnjoy.textContent = "";
  let isTyping = false;

  function typeWriter(index = 0) {
    if (index < originalText.length) {
      footerEnjoy.textContent += originalText.charAt(index);
      setTimeout(() => typeWriter(index + 1), 100);
    } else {
      setTimeout(() => deleteText(originalText.length - 1), 2000);
    }
  }

  function deleteText(index) {
    if (index >= 0) {
      footerEnjoy.textContent = originalText.substring(0, index);
      setTimeout(() => deleteText(index - 1), 50);
    } else {
      setTimeout(() => typeWriter(0), 1000);
    }
  }

  function checkFooterVisibility() {
    const sectionPosition = footerEnjoy.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    if (sectionPosition < screenPosition && !isTyping) {
      isTyping = true;
      typeWriter();
    }
  }

  window.addEventListener("scroll", checkFooterVisibility);
});
const galleryCards = document.querySelectorAll(".gallery .card");
function revealGalleryCards() {
  galleryCards.forEach((card) => {
    const position = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight - 100;
    if (position < screenPosition) {
      card.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealGalleryCards);
revealGalleryCards();

document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.querySelector(".menu-container");
  const categories = document.querySelectorAll(".category");

  menuContainer.classList.add("visible");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  categories.forEach((category) => observer.observe(category));
});

