history.scrollRestoration = "manual";
function toggleMenu() {
  const menu = document.querySelector(".menu");
  const hamburger = document.querySelector(".hamburger");
  if (menu.classList.contains("show")) {
    menu.style.transition =
      "transform 0.2s ease-in-out, opacity 0.2s ease-in-out";
  } else {
    menu.style.transition =
      "transform 0.15s ease-in-out, opacity 0.15s ease-in-out";
  }
  menu.classList.toggle("show");
  hamburger.classList.toggle("active");
}
window.addEventListener("scroll", function () {
  document
    .querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});

function toggleMenu() {
  const menu = document.querySelector(".menu");
  const hamburger = document.querySelector(".hamburger");
  if (menu.classList.contains("show")) {
    menu.style.transition =
      "transform 0.2s ease-in-out, opacity 0.2s ease-in-out";
  } else {
    menu.style.transition =
      "transform 0.15s ease-in-out, opacity 0.15s ease-in-out";
  }
  menu.classList.toggle("show");
  hamburger.classList.toggle("active");
}
window.addEventListener("scroll", function () {
  document
    .querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
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

document
  .getElementById("testimonialForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("commet").value;

    const reviewItem = document.createElement("li");
    reviewItem.innerHTML = `<strong>${name}</strong> - ${"⭐".repeat(
      rating
    )}<br>${comment}`;

    document.getElementById("reviews").appendChild(reviewItem);

    document.getElementById("testimonialForm").reset();
  });
