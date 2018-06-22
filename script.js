function changetext() {
	document.getElementById('demo').innerHTML = 'Hello JavaScript';
}
function changeImageFB() {
	document.getElementById("img").src = "img/facebook.png";
}
function changeImageLinkedin() {
	document.getElementById("img").src = "img/linkedin.png";
}
function showElement() {
	document.getElementById("img").style.display = "block";
}
function hideElement() {
	document.getElementById("img").style.display = "none";
}
var x = 15;
var y = 9;
document.getElementById("demo").innerHTML = x % y;
/*document.getElementById('demo').style.fontSize = "50px";
*/

