document.addEventListener('click', function () {
    moveSlider();
});
let left = 0;

function moveSlider() {
    let container = document.querySelector(".slider__container");
    left = left - 260;
    if (left < -1560) {
        left = 0;
    }
    container.style.left = left + 'px';
}

setInterval(moveSlider, 3000);