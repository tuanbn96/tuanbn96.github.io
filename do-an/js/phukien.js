var maytinh = [
    
        {"ten":"Chuột Logitech G502 Spectrum","gia":"1,689,000","nsx":"logitech","anh":"../img/imggear/chuot/l4.jpg"},
        {"ten":"Chuột Logitech G102 Prodigy","gia":"1,589,000","nsx":"logitech","anh":"../img/imggear/chuot/l3.jpg"},
        {"ten":"Chuột Razer Lancehead Wireless 5G","gia":"5,889,000","nsx":"razer","anh":"../img/imggear/chuot/r4.jpg"},
        {"ten":"Chuột Razer Deat Hadder elite","gia":"1,289,000","nsx":"razer","anh":"../img/imggear/chuot/r3.jpg"}
        
    ,
    
        {"ten":"Bàn Phím Logitech G810 RGB","gia":"2,489,000","nsx":"logitech","anh":"../img/imggear/banphim/l4.jpg"},
        {"ten":"Bàn Phím Logitech K270","gia":"489,000","nsx":"logitech","anh":"../img/imggear/banphim/l2.jpg"},
        {"ten":"Bàn Phím Logitech K400","gia":"889,000","nsx":"logitech","anh":"../img/imggear/banphim/l3.jpg"},
        {"ten":"Bàn Phím Logitech k800","gia":"2,889,000","nsx":"logitech","anh":"../img/imggear/banphim/l1.jpg"}
        
    ,
    
        {"ten":"Tai Nghe Razer hammerhead","gia":"1,789,000","nsx":"razer","anh":"../img/imggear/tainghe/r1.jpg"},
        {"ten":"Tai Nghe Razer Kraken 7.1 ","gia":"2,489,000","nsx":"razer","anh":"../img/imggear/tainghe/r2.jpg"},
        {"ten":"Tai Nghe Razer Kraken mobile neon","gia":"2,189,000","nsx":"razer","anh":"../img/imggear/tainghe/r3.jpg"},
        {"ten":"Tai Nghe Razer Mano'war 7.1 analog","gia":"3,289,000","nsx":"razer","anh":"../img/imggear/tainghe/r4.jpg"}
        
        
    ,
    
        {"ten":"Tản nhiệt  khí cpu cooler master v8gts","gia":"1,889,000","nsx":"cooler master","anh":"../img/imggear/tannhiet/c1.jpg"},
        {"ten":"Cooler master ml240l RGB","gia":"1,989,000","nsx":"cooler master","anh":"../img/imggear/tannhiet/c2.jpg"},
        {"ten":"Cooler master masterliquid ml240r","gia":"2,789,000","nsx":"cooler master","anh":"../img/imggear/tannhiet/c3.jpg"},
        {"ten":"Cooler master masterair ma410m","gia":"989,000","nsx":"cooler master","anh":"../img/imggear/tannhiet/c4.jpg"}
        
    
];


var table = '';
 
for ( var i = 0; i< maytinh.length ; i++) { 
   
  table += ` <div class="itemm card col-sm-12 col-md-6 col-lg-4 col-xl-3" style="margin-bottom:10px;margin-top:10px;">
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
