var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementsByTagName("body")[0];
var h3 = document.querySelector("h3")

function addBackground(){
	body.style.background = "linear-gradient(to right,"+ color1.value +","+ color2.value +  ")";
	h3.textContent = "linear-gradient(to right,"+ color1.value +","+ color2.value +  ");";
}

color1.addEventListener("input",addBackground)
color2.addEventListener("input",addBackground)