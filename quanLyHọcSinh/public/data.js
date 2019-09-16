var xmlhttp = new XMLHttpRequest();
let url='http://localhost:3000/list';
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      myFunction(myArr);
    }
  };
xmlhttp.open('GET',url, true);
xmlhttp.send();
let arrid = [];
let array =[];
function myFunction(arr) {
    array = arr;
    let print='';
    for(i=0;i<arr.length;i++){
          print+= `
          
          <tr>
          <th scope="col">${i +1} <input type="checkbox" name="del" id="${arr[i].id}"> </th>
          <th scope="row" id="name">${arr[i].name}</th>
          <td id="age">${arr[i].age}</td>
          <td id="mail">${arr[i].mail}</td>
          <td id="mail">${arr[i].phone}</td>
          <td>
              <div class="d-fex"><a class="btn" href="edit.html?id=${arr[i].id}" style="border:none" role="button">Cập nhật</a> | <button type="button" class="btn btn-outline-secondary" style="color:red;
                      border:none" onclick='del(${arr[i].id})'>Xóa</button></div>
                      
          </td>
         
          </tr>`;
          
          arrid.push(arr[i].id);
        }
    document.getElementById("tb").innerHTML = print;
  }

 function dele(){
  let a = confirm("Bạn có chắc muốn xóa");
 
   for(i = 0;i< arrid.length;i++){
     if(document.getElementById(arrid[i]).checked == true){
      $.ajax({
        type: 'DELETE',
        url: `${url}/${arrid[i]}`,
        });
     }
   }
   if(document.getElementById('del').checked == true){
     for(i=0;i<arrid.length;i++){
      
      $.ajax({
        type: 'DELETE',
        url: `${url}/${arrid[i]}`,
        });
     }
   }
   location.reload();
 }
 document.getElementById('del').onclick = function(e){
  if (this.checked){
    for(i=0;i<arrid.length;i++){
      document.getElementById(arrid[i]).checked = true;
      
     }
  }
  else{
    for(i=0;i<arrid.length;i++){
      document.getElementById(arrid[i]).checked = false;
      
     }
  }
};
function timkiem(){
  let a = $("#search").val();
  for(i = 0; i< array.length; i++){
    for (const key in array[i]) {
      if (array[i][key].indexOf(a) !== -1) {
        $.ajax({
          type: 'GET',
          url:  `${url}/${array[i].id}`,
          
          dataType: 'json',
          
          
          success: function(data) {
            let print = `
          
            <tr>
            <th scope="col"> 1 <input type="checkbox" name="del" id="${data.id}"> </th>
            <th scope="row" id="name">${data.name}</th>
            <td id="age">${data.age}</td>
            <td id="mail">${data.mail}</td>
            <td id="mail">${data.phone}</td>
            <td>
                <div class="d-fex"><a class="btn" href="edit.html?id=${data.id}" style="border:none" role="button">Cập nhật</a> | <button type="button" class="btn btn-outline-secondary" style="color:red;
                        border:none" onclick='del(${data.id})'>Xóa</button></div>
                        
            </td>
           
            </tr>`;
            
            
          
      document.getElementById("tb").innerHTML = print;
             console.log(data) 
          },
         
      });
        
      }
    }
  }
  location.reload();
}

