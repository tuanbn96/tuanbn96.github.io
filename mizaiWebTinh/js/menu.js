let api = 'https://halloo.herokuapp.com/halo';
let menu = document.getElementById('menu');
let modal = document.getElementById('modal');
let data = '';
let value = '';


axios.get(api)
  .then(function (response) {
      let array = response.data;
    for(i=0;i<array.length;i++){
        console.log(array[i]);

        data += `<div class="col-md-4" style="margin-bottom:2rem">
        <div class="gallery-demo">
            <a href="#gal${array[i].id}">
                <img src="${array[i].img}" alt=" " class="img-fluid" />
                <h4 class="p-mask">${array[i].name}<span>${array[i].price}</span></h4>
            </a>
        </div>
    </div>`;
    value += `<div id="gal${array[i].id}" class="pop-overlay">
    <div class="popup">
        <img class="img-fluid" src="${array[i].img}" alt="">
        <h4 class="p-mask">${array[i].name}<span>${array[i].price}</span></h4>
        <a href="login.html" class="button-w3ls active mt-3"  >Order Now
            <span class="fa fa-caret-right ml-1" aria-hidden="true"></span>
        </a>
        <a class="close" href="#gallery">×</a>
    </div>
</div>`;
    }
    menu.innerHTML = data;
    modal.innerHTML = value;
  })
  .catch(function (error) {
    console.log(error);
  });

function cart(item){
    console.log(item);
    axios.post('https://halloo.herokuapp.com/cart', item)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}