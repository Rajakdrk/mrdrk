$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots' 
});


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');


hamberger.addEventListener('click', function(){
    mobileNav.classList.add('open');
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');
});



});


// Progression sectoin
let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if(counter == 80){
        clearInterval();
    }else{
        counter += 1;
        number.innerHTML = counter + "%";
    }
}, 24);

let number2 = document.getElementById("number2");
let counter2 = 0;
setInterval(() => {
    if(counter2 == 70){
        clearInterval();
    }else{
        counter2 += 1;
        number2.innerHTML = counter2 + "%";
    }
}, 24);

let number3 = document.getElementById("number3");
let counter3 = 0;
setInterval(() => {
    if(counter3 == 50){
        clearInterval();
    }else{
        counter3 += 1;
        number3.innerHTML = counter3 + "%";
    }
}, 24);

let number4 = document.getElementById("number4");
let counter4 = 0;
setInterval(() => {
    if(counter4 == 50){
        clearInterval();
    }else{
        counter4 += 1;
        number4.innerHTML = counter4 + "%";
    }
}, 24);