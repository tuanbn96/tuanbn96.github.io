
$('#form').on('submit',function(){
    let pass = true;
       
    if(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test($('#password').val()) || /[^a-zA-Z0-9]+/.test($('#password').val())){
        alert('invalid password');
        alert($('#password').val());
        pass = false;
    }
    return pass;
});
