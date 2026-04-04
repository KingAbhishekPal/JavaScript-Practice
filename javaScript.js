// let a = document.querySelector("h1");
// a.innerText="Welcome to my javaScript website";
// console.log(a.innerHTML);
let i = 0;
let body = document.querySelector("body");
let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    if (i == 0)
    {
        body.style.backgroundColor = "black";
        btn.innerHTML = "ON";
        body.style.color = "white";
        btn.style.color = "black"
        btn.style.backgroundColor = "white";
        i = 1;
    }
    else
    {
        body.style.backgroundColor = "white";
        btn.innerHTML = "OFF";
        body.style.color = "black";
        btn.style.color = "white"
        btn.style.backgroundColor = "black";
        i = 0;
    }
 })