const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
// const prevButton = document.querySelector(".prev-button");
// const nextButton = document.querySelector(".next-button");
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

function updateSlider() {
  const translateX = -currentIndex * 100;
  slider.style.transform = `translateX(${translateX}%)`;
}

// nextButton.addEventListener("click", nextSlide);
// prevButton.addEventListener("click", prevSlide);

// Automatically slide every 5 seconds
setInterval(nextSlide, 5000);
