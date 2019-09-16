let api = 'http://localhost:3000/product';

let api2 = 'http://localhost:3000/cart';
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
function getIdQueryParam() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}
const userId = getIdQueryParam();
get(userId);
function get(n){
    let table ='';   
    if( n == 0){
        $.ajax({
            type: 'GET',
            url:  `${api}`,
            
            dataType: 'json',
            
            
            success: function(data) {
                
                let table ='';
               for(i = 0;i< data.length;i++){
                   for(j= 0;j< arrid.length;j++){
                    if(data[i].id == arrid[j]){
                        
                        let b = data[i].gia * data[i].sl;
                        let c = b.toLocaleString();
                        table += `
                        <div>
                                
                                <p class="fontsize24">Tên sản phẩm :<span class="fontsize24" id="tenSp">${data[i].ten}</span></p>
                                <p class="fontsize24">Số lượng :<span class="fontsize24" id="soLuong">${data[i].sl}</span></p>
                                <p class="fontsize24">Đơn giá :<span class="fontsize24" id="thanhTien">${c}</span></p>
                        </div>
                       `
                    }
                   }
                   
                   
               }
               document.getElementById('row').innerHTML = table;
            },
           
        });
    }
    if(n !== 0){
        $.ajax({
            type: 'GET',
            url:  `${api}/${n}`,
            
            dataType: 'json',
            
            
            success: function(data) {
                
                        
                        let b = data.gia * data.sl;
                        let c = b.toLocaleString();
                        table += `
                        <div>
                                
                                <p class="fontsize24">Tên sản phẩm :<span class="fontsize24" id="tenSp">${data.ten}</span></p>
                                <p class="fontsize24">Số lượng :<span class="fontsize24" id="soLuong">${data.sl}</span></p>
                                <p class="fontsize24">Đơn giá :<span class="fontsize24" id="thanhTien">${c}</span></p>
                        </div>
                       `
                   
                   document.getElementById('row').innerHTML = table;
            },
           
        });
    }
           
    
   
}



