var x = 0;
var y = 1;

function addClick() {
	document.getElementById('addition').value = ++x;
	document.getElementById('addition2').value = ++y;
}

function toggle(element) {
	var e = document.getElementById(element);
	if(e.style.display == "block") {
		e.style.display = "none";
	} else {
		e.style.display = "block";
	}
};