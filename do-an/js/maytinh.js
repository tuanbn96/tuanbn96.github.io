
var maytinh =[
  {"ten":"VIO1:I5 9400f, GIGA GTX 1050,RAM 8Gb,SSD 120Gb","gia":"Gía: 16,500,000","anh":"../img/imgpc/Slice.png"},
  {"ten":"VIO2:I5 9400, GIGA GTX 1650,RAM 8Gb,SSD 120Gb","gia":"Gía: 28,500,000","anh":"../img/imgpc/Slice 2.png"},
  {"ten":"VIO1:I7 8700K, MSI RTX 2070,RAM 16Gb,SSD 500Gb ","gia":"Gía: 39,500,000","anh":"../img/imgpc/Slice 3.png"},
  {"ten":"VIO1:I9 9900K, ASUS RTX 2070,RAM 64Gb,SSD 500Gb","gia":"Gía: 69,990,000","anh":"../img/imgpc/Slice 4.png"},
  {"ten":"Rocket :I7 8700K, Asus GTX 1080Ti,RAM 16Gb,SSD 120Gb","gia":"Gía: 34,500,000","anh":"../img/imgpc/Slice 5.png"},
  {"ten":"Rocket 1:I9 9900K, Asus GTX 2080Ti,RAM 64Gb,SSD 500Gb","gia":"Gía: 62,990,000 ","anh":"../img/imgpc/Slice 6.png"},
  {"ten":"Rocket 2:I5 8400, MSI GTX 1650,RAM 8Gb,SSD 120Gb","gia":"Gía: 18,500,000","anh":"../img/imgpc/Slice 7.png"},
  {"ten":"Rocket 2:I3 9100F, MSI GTX 1060,RAM 8Gb,SSD 120Gb","gia":"Gía: 18,500,000","anh":"../img/imgpc/Slice 8.png"},
  {"ten":"RICK1:I7 8700K, MSI RTX 2080,RAM 32Gb,SSD 240Gb","gia":"Gía: 49,500,000","anh":"../img/imgpc/Slice 9.png"},
  {"ten":"RICK1:I9 9900K, MSI RTX 2080Ti,RAM 64Gb,SSD 240Gb","gia":"Gía: 79,500,000","anh":"../img/imgpc/Slice 10.png"},
  {"ten":"RICK3:I5 8600,  ASUS 1650 ,RAM 32Gb,SSD 240Gb ","gia":"Gía: 33,500,000","anh":"../img/imgpc/Slice.png"},
  {"ten":"VIO2:I5 9400f, GIGA GTX 1660,RAM 8Gb,SSD 120Gb","gia":"Gía: 25,500,000","anh":"../img/imgpc/Slice.png"} 
]
;

  
  var table = '';
 
  for (i = 0; i <maytinh.length; i++) { 
    table += ` <div class="itemm card col-sm-12 col-md-6 col-lg-4 col-xl-3" style="margin-bottom:10px;margin-top:10px;>
    <a href="../html/chitietlk.html"><img src="${maytinh[i].anh}" class="img-fluid card-img-top" alt=""></a>
    <a href="../html/chitietlk.html"><span class="fontsize16 ten card-title">${maytinh[i].ten}</span></a>
    <span class="fontsize18 ten card-text" style="margin-bottom:0px;color: blue;">Giá: ${maytinh[i].gia} </span>
    <div class="item1">
        <button type="button" class="btn btn-primary btn-sm">Mua</button>
        <button type="button" class="add-to-cart btn btn-primary btn-sm" data-name="${maytinh[i].ten}" data-price="${maytinh[i].gia}"><img src="../img/icon/shopping-cart.png"
                class="img-fluid" style="width:50%;text-align:center" alt=""></button>
    </div>
</div>`;
  }
  document.getElementById("row").innerHTML = table;
