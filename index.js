var h1 = document.querySelector("h1");
var img = document.querySelector("img");
var carousel = document.querySelector("div#carousel");




document.querySelector("#aboutme").addEventListener("click", function(){
  (carousel).classList.toggle("aboutafter");



});

document.querySelector("#contactme").addEventListener("click", function(){


  (h1).classList.toggle("home");



});
