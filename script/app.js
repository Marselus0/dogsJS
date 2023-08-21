console.log('start')



// Слайдер галерея
let viewport = document.getElementById("slider__viewport").offsetWidth;
let btnNext = document.getElementById("slider__control-next");
let btnPrev = document.getElementById("slider__control-prev");
let slider = document.querySelector("div.slider");
let viewSliders = document.querySelectorAll(".viewSlide");
let viewSlide = 0;


viewSliders[0].style.backgroundColor = "red";


btnNext.addEventListener("click", function () {

    viewSliders[viewSlide].style.backgroundColor = "orange";
    if (viewSlide < 7) {
        viewSlide++;
    } else {
        viewSlide = 0;
    }

    viewSliders[viewSlide].style.backgroundColor = "red";
    slider.style.left = -viewSlide * viewport + "px";
});


btnPrev.addEventListener("click", function () {
    viewSliders[viewSlide].style.backgroundColor = "orange";
    if (viewSlide > 0) {
        viewSlide--;
    } else {
        viewSlide = 7;
    }

    viewSliders[viewSlide].style.backgroundColor = "red";
    slider.style.left = -viewSlide * viewport + "px";
});


// Бургер меню
let hamb = document.querySelector('#hamb');
let popup = document.querySelector('#popup');
let menu = document.querySelector('#menu').cloneNode(1);
let body = document.body;

hamb.addEventListener('click',hambHandler);

function hambHandler(e) {
    e.preventDefault();
    console.log('hamb click')
    popup.classList.toggle('open');
    hamb.classList.toggle('active');
    body.classList.toggle('noscroll');
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}

let links  = Array.from(menu.children);

links.forEach((link) => {
    link.addEventListener('click', closeOnClick);
})

function closeOnClick(){
    popup.classList.remove('open');
    hamb.classList.remove('active');
    body.classList.remove('noscroll');
}