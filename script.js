let redBtn = document.getElementById("redBtn");
let greenBtn = document.getElementById("greenBtn");
let yellowBtn = document.getElementById("yellowBtn");

redBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
});

greenBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
});

yellowBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "yellow";
});