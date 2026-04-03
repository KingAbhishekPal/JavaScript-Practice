const text = document.getElementById("text");
const count = document.getElementById("count");

text.addEventListener("input", () => {

    let length = text.value.length;

    count.textContent = length;

});