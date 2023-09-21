// Initialize slide index
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Function to show slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Function to handle scroller
function handleScroller(scroller, e) {
  if (!active) return;
  const x = e.pageX - scroller.parentElement.getBoundingClientRect().left;
  scrollIt(x, scroller);
}

// Function to update scroller
function scrollIt(x, scroller) {
  const transform = Math.max(0, Math.min(x, scroller.parentElement.offsetWidth));
  scroller.parentElement.querySelector(".after").style.width = transform + "px";
  scroller.style.left = transform - 25 + "px";
}

// Event listener for mousemove
document.body.addEventListener("mousemove", function (e) {
  if (!active) return;
  const activeScroller = document.querySelector(".scroller.scrolling");
  if (activeScroller) {
    handleScroller(activeScroller, e);
  }
});

// Event listener for mousedown
document.querySelectorAll(".scroller").forEach((scroller) => {
  scroller.addEventListener("mousedown", function (e) {
    active = true;
    this.classList.add("scrolling");
    handleScroller(this, e);
  });

  // Reset scroller position to the left on click
  scroller.style.left = "0px";
});

// Event listener for mouseup and mouseleave
document.body.addEventListener("mouseup", function () {
  active = false;
  document.querySelectorAll(".scroller").forEach((scroller) => {
    scroller.classList.remove("scrolling");
  });
});

document.body.addEventListener("mouseleave", function () {
  active = false;
  document.querySelectorAll(".scroller").forEach((scroller) => {
    scroller.classList.remove("scrolling");
  });
});

// Initialize scroller
scrollIt(0); // Set initial position to the left


const card = document.querySelector(".card");

card.addEventListener("mousemove", cardMouseMove);

function cardMouseMove(event){
const cardWidth = card.offsetWidth;
const cardHeight = card.offsetHeight;
const centerX = card.offsetLeft + cardWidth/2;
const centerY = card.offsetTop + cardHeight/2;
const mouseX = event.clientX - centerX;
const mouseY = event.clientY - centerY;
const rotateX = ((-1)*25*mouseY/(cardHeight/2)).toFixed(2);
const rotateY = (25*mouseX/(cardWidth/2)).toFixed(2);

card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

const expandButton = document.querySelector('header button')
expandButton.addEventListener('click', expand)

function expand () {
  document.body.classList.toggle('expand')
}

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
