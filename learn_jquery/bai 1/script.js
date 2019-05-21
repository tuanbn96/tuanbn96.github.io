let students = [
    {name:'Nguyên Văn Tuân', age:'23', sex:'male', phoneNumber:'0368892848',avata:'img/11.jpg',mail:'abc12345@gmail.com'},
    {name:'Nguyên Anh Thư', age:'21', sex:'female', phoneNumber:'0468892848',avata:'img/12.jpg',mail:'gggfdg45@yahoo.com'},
    {name:'Nguyên Anh Tú', age:'20', sex:'male', phoneNumber:'0868592888',avata:'img/13.jpg',mail:'hhhhhf45@gmail.com'},
    {name:'Nguyên Thị Vân', age:'20', sex:'female', phoneNumber:'0868894444',avata:'img/14.jpg',mail:'sad45@gmail.com'},
    {name:'Nguyên thị Hương', age:'19', sex:'female', phoneNumber:'086889555',avata:'img/15.jpg',mail:'ab345@gmail.com'},
    {name:'Nguyên Văn Doanh', age:'19', sex:'male', phoneNumber:'0868896666',avata:'img/16.jpg',mail:'abc345@gmail.com'},
    {name:'Nguyên Y Vân', age:'18', sex:'female', phoneNumber:'0868897777',avata:'img/17.jpg',mail:'c12345@gmail.com'},
    {name:'Nguyên Hải Huân', age:'22', sex:'male', phoneNumber:'0868898888',avata:'img/18.jpg',mail:'a12345@gmail.com'},
    {name:'Nguyên Văn Thuận', age:'19', sex:'male', phoneNumber:'0868899999',avata:'img/19.jpg',mail:'ab2345@gmail.com'},
    {name:'Lê Dung Sai', age:'21', sex:'male', phoneNumber:'0868890000',avata:'img/12.jpg',mail:'abc125@gmail.com'},
    {name:'Hoàng Yến Xuân', age:'20', sex:'female', phoneNumber:'0800092848',avata:'img/13.jpg',mail:'abc145@gmail.com'},
    {name:'Nguyên Phi Yến', age:'21', sex:'female', phoneNumber:'0888888888',avata:'img/14.jpg',mail:'ab345@gmail.com'},
    {name:'Nguyên Văn Tân', age:'18', sex:'male', phoneNumber:'0909090909',avata:'img/15.jpg',mail:'c1345@gmail.com'}
];

function addData(arr){
    let value ='';
    for (const i of arr) {
    value += `<tr class='sort'><td><div><img src=${i.avata} alt = 'anh' width = '40px' height = '40px'></div></td><td>${i.name}</td><td>${i.age}</td><td>${i.sex}</td><td>${i.phoneNumber}</td></td><td>${i.mail}</td></tr>`
    }
    document.getElementById('student').innerHTML = value;
}



$('select:eq(0)').change(function(){
    let value = $(this).val();
    if(value == 'all'){
        addData(students);
        style();
    }else if(value == 'down'){
        students.sort(compareValues('age','desc'));
        addData(students);
        style();
    }
    else{
        let filterage = students.filter(function (std) {
            return std.age == value;
        });
        addData(filterage);
        style();
    }
});

$('select:eq(1)').change(function(){
    let value = $(this).val();
    if(value == 'all'){
        addData(students);
        style();
    }else{
        let filtersex = students.filter(function (std) {
            return std.sex === value;
        });
        addData(filtersex);
        style();
    }
});


function compareValues(key, order = 'asc') {
    return function(a, b) {
      if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
  
      const varA = (typeof a[key] === 'string') ?
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ?
        b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? (comparison * -1) : comparison
      );
    };
}

 $('#sort').click(() => { 
    students.sort(compareValues('name'));
    addData(students);
    style();
});


$('#search').click(() => {
   let c = $('#fiterName').val().trim();
   if(c.length > 1 && c.length < 10 ){
       alert('text is full name or number');
   }
   if(c.length >= 10 && c.length <= 12){
        
        let filter = students.filter(function (std) {
        return std.phoneNumber == c;
        });
        addData(filter);
        style();
        
   }
   if(c.length > 12){
       if(c.indexOf('@') !== -1){
            let filter = students.filter(function (std) {
            return std.mail == c;
            });
            addData(filter);
            style();
       }else{
            let filter = students.filter(function (std) {
            return std.name == c;
            });
            addData(filter);
            style();
       }
   }  
});

addData(students);

function style(){
    $('th').css('height','50px');
    $('th').css('padding','10px');
    $('th').css('border','1px solid gray');
    $('table tr:even').css('background-color','#cde0ef');
    $('table tr:even').hover(function () {
        $(this).css('background-color','#9dcff7');    
    }, function () {
        $(this).css('background-color','#cde0ef');
    });

    $('table tr:odd').css('background-color','#ccc0c0');
    $('table tr:odd').hover(function () {
        $(this).css('background-color','#f9b8b8');    
    }, function () {
        $(this).css('background-color','#ccc0c0');
    });
    $('table').css('border-collapse','collapse');
    $('table td').css('border','1px solid gray');
    $('table td').css('padding','10px');
    $('img').css('border-radius',' 50%')
    $('table tr:first').css('font-weight','bold');
}
style();


















