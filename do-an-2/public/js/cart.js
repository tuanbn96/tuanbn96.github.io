let api = 'https://tuanbn96.github.io/do-an-2/product.json';

let api2 = 'https://tuanbn96.github.io/do-an-2/cart.json';
let arrid = [];
$.ajax({
    type: 'GET',
    url:  `${api2}`,
    
    dataType: 'json',
    
    
    success: function(data) {
       for(i = 0; i< data.length;i++){
           arrid.push(data[i].cmt);
       }
     
    },
   
});
arrid.sort((a,b) => a-b);
$.ajax({
    type: 'GET',
    url:  `${api}`,
    
    dataType: 'json',
    
    
    success: function(data) {
        
        let table ='';
       for(i = 0;i< data.length;i++){
           for(j= 0;j< arrid.length;j++){
            if(data[i].id == arrid[j]){
                table += `<tr>
                <td style="width:20%"><img src="${data[i].anh}" style="width:100%"/></td>
                <td style="width:30%">${data[i].ten}</td>
                <td style="width:20%" id="gia">${data[i].gia}</td>
                
                <td style="width:20%"><input type="text" size="1rem" id="sl" value="${data[i].sl}" />
                <button onclick="tru()" style="width:20px">-</button><button onclick="cong()" style="width:20px">+</button></td>
                <td><input type="checkbox" name="del" id="${data[i].id}"></td>
              </tr>`
            }
           }
           
           
       }
       document.getElementById('cart').innerHTML = table;
    },
   
});
  
function cong(){
  let a = $("#sl").val();
  $("#sl").val(a+1);
}
function tru(){
  
  let a = $("#sl").val();
  if(a > 1){
  $("#sl").val(a-1);}
}
function dele(){
    let a = confirm("Bạn có chắc muốn xóa sản phẩm khỏi giỏ hàng");
   
     for(i = 0;i< arrid.length;i++){
       if(document.getElementById(arrid[i]).checked == true){
        $.ajax({
          type: 'DELETE',
          url: `${api2}/${arrid[i]}`,
          });
       }
     }
     if(document.getElementById('del').checked == true){
       for(i=0;i<arrid.length;i++){
        
        $.ajax({
          type: 'DELETE',
          url: `${api}/${arrid[i]}`,
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

  


                    

  
 
