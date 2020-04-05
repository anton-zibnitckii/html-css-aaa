document.addEventListener('click', function () {
    moveSlider();
});

function moveSlider() {
    let step = 0;
    let img = document.querySelectorAll('.slider__img');
    let link = document.querySelectorAll('.slider__link');
    console.log(img);
    let image = document.createElement('img');
    image.classList.add("slider__img");
    image.src = img[step].src;
    link[step].remove();
    img[step].remove();
    let a = document.createElement("a");
    a.classList.add("slider__link");
    a.href = "#";
    a.appendChild(image);
    document.querySelector(".slider__container").appendChild(a);
}

setInterval(moveSlider, 3000);