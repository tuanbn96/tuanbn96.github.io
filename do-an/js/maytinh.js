
let data = [
    { name: 'VIO2:I5 9400, GIGA GTX 1650,RAM 8Gb,SSD 120Gb', price:'28,500,000', image:'../img/imgpc/pc1.jpg'},
    {name:'VIO1:I7 8700K, MSI RTX 2070,RAM 16Gb,SSD 500Gb',price:'39,500,000 ',image:'../img/imgpc/pc2.png'},
    {name:'VIO3:I9 9900K, ASUS RTX 2070,RAM 64Gb,SSD 500Gb',price:'69,990,000 ',image:'../img/imgpc/pc3.png'},
    { name: 'VIO2:I5 9400, GIGA GTX 1650,RAM 8Gb,SSD 120Gb', price:'28,500,000', image:'../img/imgpc/pc8.jpg'},
    {name:'VIO1:I7 8700K, MSI RTX 2070,RAM 16Gb,SSD 500Gb',price:'39,500,000 ',image:'../img/imgpc/pc5.jpg'},
    {name:'VIO3:I9 9900K, ASUS RTX 2070,RAM 64Gb,SSD 500Gb',price:'69,990,000 ',image:'../img/imgpc/vocasethermaltakecorep3xiemytrongsuotcuanguoidep.png'},
    { name: 'VIO2:I5 9400, GIGA GTX 1650,RAM 8Gb,SSD 120Gb', price:'28,500,000', image:'../img/imgpc/pc1.jpg'},
    {name:'VIO1:I7 8700K, MSI RTX 2070,RAM 16Gb,SSD 500Gb',price:'39,500,000 ',image:'../img/imgpc/pc2.png'},
    {name:'VIO3:I9 9900K, ASUS RTX 2070,RAM 64Gb,SSD 500Gb',price:'69,990,000 ',image:'../img/imgpc/pc3.png'},
    { name: 'VIO2:I5 9400, GIGA GTX 1650,RAM 8Gb,SSD 120Gb', price:'28,500,000', image:'../img/imgpc/pc8.jpg'},
    {name:'VIO1:I7 8700K, MSI RTX 2070,RAM 16Gb,SSD 500Gb',price:'39,500,000 ',image:'../img/imgpc/pc5.jpg'},
    {name:'VIO3:I9 9900K, ASUS RTX 2070,RAM 64Gb,SSD 500Gb',price:'69,990,000 ',image:'../img/imgpc/vocasethermaltakecorep3xiemytrongsuotcuanguoidep.png'}

];
var value = '';

for (let i = 0; i < data.length; i++) {
    value += `<div class="col-sm-12 col-md-6 col-lg-3 col-xl-4 card" style="width: 18rem;">
    <img src="${data[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
      
      <p class="card-text">${data[i].name}</p>
      <p class="card-text">Giá : ${data[i].price}</p>
    </div>
  </div>`;
    
}
document.getElementById('row').innerHTML = value;