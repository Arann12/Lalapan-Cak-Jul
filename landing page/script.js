let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    if (index >= slides.length) { currentSlideIndex = 0; }
    if (index < 0) { currentSlideIndex = slides.length - 1; }
    slides[currentSlideIndex].classList.add('active');
}

function changeSlide(step) {
    currentSlideIndex += step;
    showSlide(currentSlideIndex);
}

// Auto-play slider setiap 5 detik
setInterval(() => {
    changeSlide(1);
}, 5000);