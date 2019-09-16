let api = 'http://localhost:3000/product';
var xmlhttp = new XMLHttpRequest();
let url= api;
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
    var table = '';
 
    for (i = 0; i <arr.length; i++) { 
      if(arr[i].id >= 58 && arr[i].id <= 73){
      table += ` <div class="itemm card col-sm-12 col-md-6 col-lg-4 col-xl-3" style="margin-bottom:10px;margin-top:10px;>
      <a href="../html/chitietlk.html"><img src="${arr[i].anh}" class="img-fluid card-img-top" alt=""></a>
      <a href="../html/chitietlk.html"><span class="fontsize16 ten card-title">${arr[i].ten}</span></a>
      <span class="fontsize18 ten card-text" style="margin-bottom:0px;color: blue;">Giá: ${arr[i].gia} </span>
      <div class="item1">
          <a type="button" class="btn btn-primary btn-sm" href='dathang.html?id=${arr[i].id}'>Mua</a>
          <button type="button" class="btn btn-primary btn-sm add-to-cart" onclick='add(${arr[i].id})'>Cart</button>
                    
      </div>
  </div>`;}
    }
    document.getElementById("row").innerHTML = table;
  
  }
  let api2 = 'http://localhost:3000/cart';
  function add(n){
    $.ajax({
        type: 'POST',
        url: api2,
        data: {
           cmt:`${n}`
        },
        dataType: 'json',
        success:() => {
            confirm('thêm sản phẩm vào giỏ hàng thành công');
            
        }

    });
    
}
                    

  
 
