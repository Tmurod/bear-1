
const head = document.querySelector(`.head`);
const eyes = document.querySelectorAll(`.bear-eye`);

head.addEventListener(`click`, () => {
  eyes.forEach(eye => {
    eye.classList.toggle(`clik`);
  });
});
head.addEventListener(`mouseover`, () => {
});






