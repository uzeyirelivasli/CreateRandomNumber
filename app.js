const minimum = document.querySelector("#minimum");
const maximum = document.querySelector("#maximum");
const button = document.querySelector(".random");
const rText = document.querySelector("#random-text");

button.addEventListener("click", () => {
    let result = Math.floor(Math.random() * (maximum.value - minimum.value) + +(minimum.value));
    rText.innerHTML = result;

})