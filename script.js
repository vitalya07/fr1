const slider = document.querySelector("#slider");
const arrowLeft = document.querySelector(".slider__arrow-left");
const arrowRight = document.querySelector(".slider__arrow-right");
const slides = document.querySelectorAll('.slider__img');
const bottom = document.querySelector('#bottom');

let corruentSlideIndex = 0;
const paginationCircle = [];
const sliderWidth = slider.clientWidth;

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    bottom.appendChild(div);
    paginationCircle.push(div)
}

function addPoginations() {
    slides.forEach(createPaginationCircle);
    paginationCircle[0].classList.add('active');
    paginationCircle.forEach((circle, index ) => {
        circle.addEventListener('click', () => changeSlide(index));
    })
}


function addActiveClass() {
    paginationCircle[corruentSlideIndex].classList.add('active')
};
function removeActiveClass() {
    paginationCircle[corruentSlideIndex].classList.remove('active')
}

function showSlide () {
    slider.style.transform = `translateX(-${corruentSlideIndex * sliderWidth}px)`
}


function changeSlide(slideIndex) {
    removeActiveClass();
    corruentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
}
function nextSlide() {
    let newSlideIndex = corruentSlideIndex + 1;
    if (newSlideIndex > slides.length -1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex)
};

function prewSlide () {
    let newSlideIndex = corruentSlideIndex - 1;
    if (newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex)
}

addPoginations()

arrowLeft.addEventListener('click', prewSlide);
arrowRight.addEventListener('click', nextSlide);
