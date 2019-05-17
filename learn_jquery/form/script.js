let day = '<option>Ngày</option>';
let month = '<option>Tháng</option>';
let year = '<option>Năm</option>';

for (let i = 1; i <= 31; i++) {
	day += `<option>${i}</option>`;
}
for (let i = 1; i <= 12; i++) {
	month += `<option>Tháng ${i}</option>`;
}
for (let i = 2019; i >= 1905; i--) {
	year += `<option>Năm ${i}</option>`;
}

document.getElementById('day').innerHTML = day;
document.getElementById('month').innerHTML = month;
document.getElementById('year').innerHTML = year;

$('#form').on('submit',function(){
    let pass = true;
    if($('#firstName').val().trim() == '' || $('#lastName').val().trim() == ''){
        $('.erroName').text('Name is empty');
        pass = false;
    }else{
        $('.erroName').text('');
    }
    if($('#email').val().match(/^.+@[^\.].*\.[a-z]{2,}$/) == null){
        $('.erroEmail').text('invalid mail');
        pass = false;
    }else{
        $('.erroEmail').text('');
    }
    if($('#pass').val().length <= 6){
        $('.erropass').text('invalid password');
        pass = false;
    }else{
        
        $('.erropass').text('');
    }
    
    return pass;
});



