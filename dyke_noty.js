"use strict";
let element;
if (document.getElementById("dyke_noty")) {
	element = document.getElementById("dyke_noty");
	window.onload = function(){
		var type = element.getAttribute("data-type");
		element.style.position = "absolute";
		element.style.color = "white";
		element.style.zIndex = "10000";
		element.style.minWidth = "150px";
		element.style.textAllign = "right";
		element.style.padding = "10px 15px";
		element.style.right = "10px";
		element.style.top = "20px";
		element.style.display = "block";
		if (type == 'success') {		
			element.style.backgroundColor = "#99d683";
			element.style.borderBottom = "5px solid #263";
		}
		if (type == 'warning') {		
			element.style.backgroundColor = "#ffca4a";
			element.style.borderBottom = "5px solid #ffca4f";
		}
		if (type == 'error') {		
			element.style.backgroundColor = "#f96262";
			element.style.borderBottom = "5px solid #f96269";
		}
		if (type == 'info') {		
			element.style.backgroundColor = "#aaa";
			element.style.borderBottom = "5px solid #eee";
		}
		element.onclick = function(){
			element.style.display = "none";
		};
		window.setTimeout(function(){
			element.style.display = "none";
		},5000);
	};
}
