// --------------------------------------HERO-----------------------------------------
const images = document.querySelectorAll(".hero__img");
const sliderLine = document.querySelector(".hero__slider-line");
const buttonNext = document.querySelector(".button-next");
const buttonPrev = document.querySelector(".button-prev");

let count = 0;
let width;

function init() {
  width = document.querySelector(".hero__slider-block").offsetWidth;
  sliderLine.style.width = width * images.length + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSlider();
}

window.addEventListener("resize", init);

init();

document.querySelector(".button-prev").addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});

document.querySelector(".button-next").addEventListener("click", function () {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}

buttonNext.addEventListener("click", () => {
  buttonNext.classList.add("active");
});

buttonPrev.addEventListener("click", () => {
  buttonNext.classList.remove("active");
});

buttonPrev.addEventListener("click", () => {
  buttonPrev.classList.add("active");
});

buttonNext.addEventListener("click", () => {
  buttonPrev.classList.remove("active");
});
