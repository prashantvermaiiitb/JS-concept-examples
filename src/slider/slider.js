
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const maxSlides = slides.length;
const dotContainer = document.querySelector('#action-dots');

function changeDotBackground(currentSlide) {
    const dots = dotContainer.querySelectorAll(`div[data-slide-count]`);
    dots.forEach((dot, i) => {
        const slideCount = Number.parseInt(dot.dataset.slideCount);
        dot.style.backgroundColor = (slideCount === Number.parseInt(currentSlide)) ? 'red' : '#cacaca';
    });
};


/**
 * Going to a particular slide
 * @param {*} slideNumber 
 */
function gotoSlide(currentSlide) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
        // console.log("🚀 ~ file: slider.js:8 ~ slides.forEach ~ slide:", slide, slide.style, `translateX(${i * 100})%`);
    });
    changeDotBackground(currentSlide);
}
function createDots() {
    for (let i = 0; i < maxSlides; i++) {
        const div = document.createElement('div');
        div.style.borderRadius = '50%';
        div.style.height = '20px';
        div.style.width = '20px';
        // div.style.backgroundColor = i === 0 ? 'red' : '#cacaca';
        div.style.backgroundColor = '#cacaca';
        div.setAttribute('data-slide-count', i);
        // console.log(div);
        dotContainer.append(div);
    }
    if (maxSlides > 1) {
        dotContainer.style.display = 'flex';
        dotContainer.style.columnGap = '10px';
    }
}
function attachDomEvents() {
    document.getElementById('next').addEventListener('click', function (e) {
        if (currentSlide === maxSlides - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        gotoSlide(currentSlide);
    });
    document.getElementById('prev').addEventListener('click', function (e) {
        if (currentSlide === 0) {
            currentSlide = maxSlides - 1;
        } else {
            currentSlide--;
        }
        gotoSlide(currentSlide);
    });

    dotContainer.addEventListener('click', function (e) {
        const slideCount = e.target.dataset.slideCount;
        console.log("🚀 ~ file: slider.js:52 ~ slideCount:", slideCount);
        if (slideCount === undefined) return;

        gotoSlide(slideCount);
    });
}


function init() {
    createDots();
    attachDomEvents();
    gotoSlide(0);
}

init();