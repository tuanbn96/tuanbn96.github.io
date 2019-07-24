var maytinh = [
    { "ten": "CPU intel core i3 9100f 4-cores 4-threads 3,6-4,2ghz", "gia": "2,450,000", "nsx": "intel", "anh": "../img/gear/cpu/i3.jpg" },
    { "ten": "CPU intel core i5 9400f 6-cores 6-threads 2,9-4,1ghz", "gia": "4,150,000", "nsx": "intel", "anh": "../img/gear/cpu/i5f.jpg" },
    { "ten": "CPU intel core i5 9400 6-cores 6-threads 2,9-4,1ghz", "gia": "4,950,000", "nsx": "intel", "anh": "../img/gear/cpu/i5.jpg" },
    { "ten": "CPU intel core i3 9600k 6-cores 6-threads 3,7-4,6ghz", "gia": "6,850,000", "nsx": "intel", "anh": "../img/gear/cpu/i5k.jpg" },
    { "ten": "CPU intel core i7 9700k 8-cores 8-threads 3,6-4,9ghz", "gia": "9,850,000", "nsx": "intel", "anh": "../img/gear/cpu/i7.jpg" },
    { "ten": "CPU intel core i9 9900k 8-cores 16-threads", "gia": "13,550,000", "nsx": "intel", "anh": "../img/gear/cpu/i9.jpg" },
    { "ten": "CPU amd ryzen 3 3200g", "gia": "2,590,000", "nsx": "AMD", "anh": "../img/gear/cpu/r3.jpg" },
    { "ten": "CPU amd ryzen 3 3200g", "gia": "2,590,000", "nsx": "AMD", "anh": "../img/gear/cpu/r3.jpg" },
    { "ten": "CPU amd ryzen 5 3600k", "gia": "5,390,000", "nsx": "AMD", "anh": "../img/gear/cpu/r5k.jpg" },
    { "ten": "CPU amd ryzen 5 3600x", "gia": "6,590,000", "nsx": "AMD", "anh": "../img/gear/cpu/r5x.jpg" },
    { "ten": "CPU amd ryzen 7 3700x", "gia": "8,590,000", "nsx": "AMD", "anh": "../img/gear/cpu/r7x.jpg" },
    { "ten": "CPU amd ryzen 9 3900x", "gia": "10,590,000", "nsx": "AMD", "anh": "../img/gear/cpu/r9x.jpg" }

]

var table = '';

for (i = 0; i < maytinh.length; i++) {
    table += ` <div class="itemm card col-sm-12 col-md-6 col-lg-4 col-xl-3">
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
