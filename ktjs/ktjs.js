//bài 1 .
function soLonThu2(x) {
	x.sort(function (a,b) {return b - a;});
	console.log(x[1]);
}

//bài 2
function str(x) {
	let a = [];
	let b = [];
	for (var i = 0; i < x.length; i++) {
		a[i] = a.push(x[i].length);
	}
	a.sort(function (a,b) {return b - a;});
	let c = a[0];
	for (var i = 0; i < x.length; i++) {
		if(x[i].length == c){
			b.push(x[i]) ;
		}
	}
	console.log(b);
}



//bai3
function search(str, target){
	let a = str.length;
	let b = target.length;
	let c = a - b ;
	let d = str.slice(c);
	if(d == target){return true;}else{return false;}
}

//bai4
function kt(x){
	for (var i = 0; i < x.length  ; i++) {
		for (var j =0; j<x.length;j++) {
			if(i !== j ){
				if(x[i] == x[j]){
					return true ;
				}else {false;}
			}
		}
	}
}

//bai 5





