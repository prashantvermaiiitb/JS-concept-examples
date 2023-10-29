const slides = document.querySelectorAll('.slide');
// console.log("🚀 ~ file: slider.js:2 ~ slides:", slides);

let currentSlide = 0;
const maxSlides = slides.length;

function gotoSlide(slideNumber) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
        console.log("🚀 ~ file: slider.js:8 ~ slides.forEach ~ slide:", slide, slide.style, `translateX(${i * 100})%`);
    });
}
gotoSlide(0);
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


