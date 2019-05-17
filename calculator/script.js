function so(x){
	document.getElementById("click").value += x;
}

function reset(){
	document.getElementById("click").value = " ";
}

function daubang(){
	document.getElementById("click").value = eval(document.getElementById("click").value);
}

function giaiThua(){
	let x = document.getElementById("click").value;
	let y = 1;
	for(i = 1; i<=x; i++){
		y *= i;
	}
	document.getElementById("click").value = y;
}

function binhphuong(){
	  document.getElementById("click").value = Math.pow(document.getElementById("click").value,2);
}