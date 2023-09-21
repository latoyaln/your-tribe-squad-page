function initializeCarousel(container) {
  const cid = container.id;
  const carousel = container.querySelector(".carousel");
  const slides = container.querySelectorAll(".carousel-slide");
  const prevButton = container.querySelector(".prev-button");
  const nextButton = container.querySelector(".next-button");
  let currentIndex = 0;

  nextButton.addEventListener("click", () => nextSlide(cid));
  prevButton.addEventListener("click", () => prevSlide(cid));

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

  // Initial call to update the carousel
  updateCarousel();
}

const containers = document.querySelectorAll(".container");

containers.forEach((container) => {
  initializeCarousel(container);
});
