// Define variables for menu bar
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const burgerIcon = document.querySelector('.burger');

header.addEventListener('click', showNav);
function showNav () {
  nav.classList.toggle('navToggle');
}

header.addEventListener('click', crossBurger);
function crossBurger() {
  burgerIcon.classList.toggle('toggle');
}

// Moving eyes on mouse
document.onmousemove = function() {
  let balls = document.querySelectorAll('.ball');
  let x = event.clientX * 100 / window.innerWidth + "%";
  let y = event.clientY * 100 / window.innerHeight + "%";
  
  for(let i = 0; i < 2; i++) {
    balls[i].style.left =  x;
    balls[i].style.top = y;
    balls[i].style.transform = 'translate(-'+x+', -'+y+')';
  }
}

// 'up' button appears after a bit of scrolling down
const btnScrollToTop = document.querySelector('.button-scroll');
window.addEventListener('scroll', btnAppear);
function btnAppear() {
  if(window.pageYOffset > 500) {
    btnScrollToTop.style.display = 'block';
  } else {
    btnScrollToTop.style.display = 'none';
  }
};

// Back to top when 'up' button is clicked 
btnScrollToTop.addEventListener('click', backToTop);
function backToTop () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};



//Define variables for image carousel
const carousel = document.querySelector(".carousel");
const slides = document.querySelector(".slides");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const pauseBtn = document.querySelector(".pause");
const changeBtn = document.querySelector(".changeBtn")
const images = document.querySelectorAll(".slides div");
const size = images[0].clientWidth;

let status = 1;
let counter = 0;
let paused = false;

// Move images automatically
let automatic = setInterval(next, 8000);

function next() {
  if(status != 0 && !paused) goForward();
}

//Toggle automatically looping through all images with a play/pause button
pauseBtn.addEventListener('click', playOrPause);
function playOrPause() {
  if(paused) {
    status = 1;
    paused = false;
    changeBtn.src = 'imgs/pause.png'
  }
  else {
    status = 0;
    paused = true;
    changeBtn.src = 'imgs/play.png'
  }
}

//Listener for prev button
prevBtn.addEventListener('click', goBack);
function goBack() {
  if (counter <= 0) return;
  slides.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

//Listener for next button
nextBtn.addEventListener('click', goForward);
function goForward() {
  if (counter >= images.length -1) return;
  slides.style.transition = "transform 0.4s ease-in-out";
  counter++; 
  slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
} 


//Make an infinite loop of slides
function keepLooping() {
  let size = images[0].clientWidth;
  if (images[counter].id === 'lastClone') {
    slides.style.transition = "none";
    counter = images.length -2;
    slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  if (images[counter].id === 'firstClone') {
    slides.style.transition = "none";
    counter = images.length - counter;
    slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
}
slides.addEventListener('transitionend', keepLooping);


//Allow keyboard navigation with the left/right arrow keys
function keyNav(e) {
  // why === doesn't work? because if the user input is a HTML input text field, it might interpret a number as a string. "37" === 37 false.
  if (e.keyCode == '37') {
    goBack(); 
  } else if (e.keyCode == '39') {
    goForward();
  }
}
window.addEventListener('keydown', keyNav);


// Infinite marquee for the links
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.links-logo");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
