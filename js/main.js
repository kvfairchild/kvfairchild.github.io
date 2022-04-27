//Function To Display Popup
function div_show() {
	document.getElementById('contact-popup').style.display = "block";
	document.getElementById('contact-popup').style.zIndex = 2;
	document.getElementById('panel').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
	document.getElementById('contact-popup').style.display = "none";
	document.getElementById('panel').style.display = "none";
}