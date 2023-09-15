
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