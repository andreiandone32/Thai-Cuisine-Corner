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


// rating form
const reviews = [
  {
    name: "Bex Olori",
    stars: 5,
    comment: "The BEST Thai food I’ve eaten since living in Thailand! AMAZING!! Tom Kha Gal was the most beautiful soup we’ve ever eaten and all other food was perfect too. So flavoursome, absolutely delicious. We ordered through Just Eat and had a couple of items missing but when I called the restaurant this was dealt with immediately and so politely. Can’t wait to order again!!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWCOBcXuPS_WjF4j7pH4FVeU9OBhNNNjvjzxAWp7VLY-z9nOGE3=w60-h60-p-rp-mo-br100",
  },
  {
    name: "Rhetorics",
    stars: 5,
    comment: "Got takeout delivery from this place and was really impressed. Friendly guy dropped it off and the food was genuinely amazing. Packed in the bag with care too. Got thai green curry with sticky rice and was so impressed with the taste of the curry. Highly recommended give them a try!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXQT9KKYIlcyO9gqdFs8xwGhHD-uhGjZeIneaNVWhCgVMP9BiXm=w60-h60-p-rp-mo-br100",
  },
  {
    name: "Kayleigh Todd",
    stars: 5,
    comment: "First time ordering from Thai Cuisine Corner, we were very impressed. The flavours were incredible and the quality of the food was fantastic. We ordered the duck special red curry, it was something very special! The massaman and the Pad Thai were also delicious. We also had some starters of prawn toast, satay chicken and spring rolls, we were very impressed with all of them. We will definitely order from here again. Delicious! Thank you!",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIgK4uDy2bsDGevhzntL9LSV3ds1dkbwT5jFl1MQLQMOeDH7A=w60-h60-p-rp-mo-ba2-br100",
  },
  {
    name: "Stephen",
    stars: 5,
    comment: "Ordered Pad Thai with vegetables and tofu, Thai Yellow Curry with egg fried rice and some chicken wings. All delicious. Highly recommend! I will definitely be ordering again",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWN_RCFHMILqMGk0AnoEgwrUE3Ra5VbC999dGS9mAZ5Kg7keBw=w60-h60-p-rp-mo-ba3-br100",
  },
  {
    name: "Thenailbar Preston",
    stars: 5,
    comment: "The tomyum soup, Thai salad, green curry, and phad Thai we ordered were all absolutely delicious. The flavors were authentic and the quality of the food was outstanding. It's a true gem to have such amazing Thai cuisine nearby. The service was excellent. This is hands down the best Thai food I've ever tried. Highly recommended for anyone craving an unforgettable taste of Thailand. Can't wait to go back and explore more of their menu.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLgwrut9-F3zhXbFeiM56hcVuWa-AsF1_4jf2OxTLYOjv2C3Q=w60-h60-p-rp-mo-br100",
  },
  {
    name: "Tom Ellis",
    stars: 5,
    comment: "We recently placed our first delivery order from here and were pleasantly surprised. Very tasty food delivered promptly. My wife loves Thai food and she said it is the best she has tasted. This will be a regular takeaway for us.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjV37qx1Ys4FjTzcr2fKUXgM3U1dcTATqWnHV50eR6N9ck3H0kmZ=w60-h60-p-rp-mo-br100",
  }
];

const grid = document.getElementById("ratingsGrid");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

const modalAvatar = document.getElementById("modalAvatar");
const modalName = document.getElementById("modalName");
const modalStars = document.getElementById("modalStars");
const modalComment = document.getElementById("modalComment");

reviews.forEach((review, index) => {
  const card = document.createElement("div");
  card.className = "rating-card";
  card.style.animationDelay = `${index * 0.2}s`;

  card.innerHTML = `
    <div class="rating-header">
      <img src="${review.avatar}" alt="${review.name}" class="avatar">
      <div class="client-name">${review.name}</div>
    </div>
    <div class="stars">${"★".repeat(review.stars)}${"☆".repeat(5 - review.stars)}</div>
    <p class="comment">${review.comment.slice(0, 70)}...</p>
    <div class="more-placeholder">More</div>  <!-- More placeholder added here -->
  `;

  // Click anywhere on the card to open the modal
  card.addEventListener("click", () => {
    modalAvatar.src = review.avatar;
    modalName.textContent = review.name;
    modalStars.innerHTML = "★".repeat(review.stars) + "☆".repeat(5 - review.stars);
    modalComment.textContent = review.comment;
    modal.style.display = "flex";
  });

  // Append the card to the grid
  grid.appendChild(card);
});

// Close modal
document.getElementById("closeModal").onclick = () => {
  modal.style.display = "none";
};
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
