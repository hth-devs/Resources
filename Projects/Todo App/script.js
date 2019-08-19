var butoon = document.getElementsByTagName("button")[0];
var input = document.getElementsByTagName("input")[0];
var ul = document.getElementsByTagName("ul")[0];

function addList(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value= "";
}

butoon.addEventListener("click", function(){
	if(input.value.length > 0){addList();}
});

input.addEventListener("keypress", function(event){
	if(input.value.length > 0 && event.keyCode === 13){addList();}
});
