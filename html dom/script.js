var listitem = ['plese,comment say haer'];


function render(){
	var addlist = document.getElementById('ul1');
	var conten = listitem.map(function (item) {
	return '<li>' + item +'</li>';

	});
	addlist.innerHTML = conten.join('');
}
render();

function addfunction(){
	var input = document.getElementById('inputone');
	var newitem = input.value;
	listitem.push(newitem);
	render();
	input.value = "";

}

var button = document.getElementById('botton-one');
//button.onclick = addfunction;bỏ onclick ở html botton đi
//button.addEventListener('click',addfunction);đăng ký đk 2 sự kiện cho một click
//botton.addEventListener('click',function(){
//console.log('hello')});

//chang event
//data
var data


