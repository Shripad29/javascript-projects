const count = document.querySelector(".count");
const minusBtn = document.querySelector(".minus_btn");
const plusBtn = document.querySelector(".plus_btn");
const changeBy = document.querySelector(".changeBy");
const resetBtn = document.querySelector(".reset-btn");


minusBtn.addEventListener("click", () => {
    const countValue = parseInt(count.innerText);
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue - changeByValue;
  });

plusBtn.addEventListener("click", () => {
  const countValue = parseInt(count.innerText);
  const changeByValue = parseInt(changeBy.value)
  count.innerText = countValue + changeByValue;
});



resetBtn.addEventListener("click", () => {
  count.innerText = 0;
});
