let offset = 0;
const sliderLine = document.querySelector(".thank_letters .slider-line");

document.querySelector(".thank_letters .img_next").addEventListener('click', function () {
    offset = offset + 900;
    if (offset > 5400) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector(".thank_letters .img_prev").addEventListener('click', function () {
    offset = offset - 900;
    if (offset < 0) {
        offset = 5400;
    }
    sliderLine.style.left = -offset + 'px';
});