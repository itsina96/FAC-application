// // Declaration
// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImage = document.querySelectorAll('.carousel-slide img');

// // button
// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');

// // counter
// let counter = 1;
// const size = carouselImage[0].clientWidth;

// carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';

// // Listener for prev button
// prevBtn.addEventListener('click', () => {
//     if (counter <= 0) return;
//     carouselSlide.style.transition = "transform 0.4s ease-in-out"
//     counter--;
//     carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
// });

// // Listener for next button
// nextBtn.addEventListener('click', () => {
//     if (counter >= carouselImage.length - 1) return;
//     carouselSlide.style.transition = "transform 0.4s ease-in-out"
//     counter++;
//     carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
// });

// carouselSlide.addEventListener('transitionend',() => {
//     if(carouselImage[counter].id === 'lastClone'){
//         carouselSlide.style.transition = "none";
//         counter = carouselImage.length -2;
//         carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
//     }
//     if(carouselImage[counter].id === 'firstClone'){
//         carouselSlide.style.transition = "none";
//         counter = carouselImage.length - counter;
//         carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
//     }
// });






// Change color of nav bar on click - add & remove active! 
// const child = document.querySelectorAll(".child");

// for(let i = 0; i < child.length; i++) {
//     child[i].onclick = function() {
//         // remove class from sibling
//         let menu = child[0];
//         while(menu) {
//             if(menu.tagName === "A") {
//                 // remove class 
//                 menu.classList.remove("colorOnClick");
//             }
//             // pass to the new sibling 
//             menu = menu.nextSibling;
//         }
//         this.classList.add("colorOnClick");
//     };
// }

// play and pause button
// var i = 0;
// var foto = new Array(3);
// var timer;

// foto[0] = "image1.jpg";
// foto[1] = "image2.jpg";
// foto[2] = "image3.jpg";

// function slide() {
//     document.getElementById("lastClone").src = foto[i];
//     i = (i + 1)%foto.length;
// }

// function setTimer(){
//     if (timer) {
//        // stop 
//        clearInterval( timer );
//        timer=null;
//     }
//     else {
//        timer = setInterval("slide()",1000);
//     }
// }





// var name = prompt("What is your name?");
// var firstLetter = name.slice(0,1).toUpperCase();
// var restLetter = name.slice(1,name.length).toLowerCase();
// alert("Hello " + firstLetter + restLetter);

// // ask user their doggo age
// var dogAge = prompt("How old is your doggo?");
// // calcute 
// var humanAge = ((dogAge - 2) * 4) + 21;
// // give answer back to user in alert
// alert("Your doggo is " + humanAge + " years old in human age. Woof!")



// function scrollAppear() {
//     var myJourney = document.querySelector('.intro-text');
//     var journeyPosition = myJourney.getBoundingClientRect().top;
//     var screenPosition = window.innerHeight;

//     if(journeyPosition < screenPosition) {
//         myJourney.classList.add('.journey-appear');
//     }
// };

// window.addEventListener('scroll', scrollAppear);

function SmoothVerticalScrolling(e, time, where) {
    var eTop = e.getBoundingClientRect().top;
    var eAmt = eTop / 100;
    var curTime = 0;
    while (curTime <= time) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += time / 100;
    }
}

function SVS_B(eAmt, where) {
    if(where == "center" || where == "")
        window.scrollBy(0, eAmt / 2);
    if (where == "top")
        window.scrollBy(0, eAmt);
}
