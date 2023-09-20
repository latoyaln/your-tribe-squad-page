const carouselContainers = document.querySelectorAll(".carousel-container");

carouselContainers.forEach((container) =>{
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let currentIndex = 0;

function updateCarousel() {
  const translateXValue = -currentIndex * 100;
  carousel.style.transform = `translateX(${translateXValue}%)`;

  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// Initial call to update the carousel
updateCarousel();
});




