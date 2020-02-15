var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var body=document.querySelector("body");
var btn=document.querySelector(".btn");
var css=document.querySelector("h3");

btn.addEventListener("click", function col(){
    body.style.background="linear-gradient(to right, "+color1.value+"," +color2.value+")";
    css.textContent=body.style.background;
})