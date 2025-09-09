const imageContainerEl = document.querySelector(".image-container");

const prevBtnEl = document.querySelector("#prev");
const nextBtnEl = document.querySelector("#next");

let x = 0;

let timer;

prevBtnEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});

nextBtnEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}

updateGallery();
