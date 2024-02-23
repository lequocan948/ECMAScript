let cart = [];
const API_URL = "http://localhost:3000/";
function show(){
    let stt = 1;
    let html = "";
    fetch(API_URL + "products")
    .then(function(response){
        response.json().then(function(data){
            const showProducts = document.getElementById('showProducts');
            data.forEach(element => {
                html += `
                <tr>
            <td class="cell">${stt++}</td>
            <td class="cell"><span class="truncate">${element.name}</span></td>
            <td class="cell">
                <a class="btn-sm app-btn-secondary bg-info" href="#">Sửa</a> 
                <a class="btn-sm app-btn-secondary bg-danger text-white" value="xoá"onclick="detele(${element.id})">Xóa</a>
            </td>
        </tr>
                `
            });
            showProducts.innerHTML=html;
        })
    })
}

show();


function sendData(data,callback){
    var options = {
       method : 'POST',
       headers: {
           'Content-Type':'application/json'
       },
       body : JSON.stringify(data)
      
    };
    fetch(API_URL + "products",options)
       .then(function(response){
           response.json();;
       })
       .then(callback);
   }

   //thêm sản phẩm
   function addProduct(){
       var addProduct = document.querySelector('#addpro');
       addProduct.onclick = function(){
          var name = document.querySelector('input[name="name"]').value;
          var price = document.querySelector('input[name="price"]').value;
          var image = document.querySelector('input[name="image"]').value.split('\\').pop();
          var detail = document.querySelector('input[name="detail"]').value;
          var cate_id = document.querySelector('input[name="cate_id"]').value;
          var sale = document.querySelector('input[name="sale"]').value
          var product= {
           name : name,
           price : price,
           image: image,
           detail:detail,
           cate_id:cate_id,
           sale:sale
          }
          if(!name || !price || !image || !detail || !cate_id || !sale ){
           alert('Thêm sản phẩm thất bại. Vui lòng nhập đầy đủ thông tin sản phẩm');
          }else{
           sendData(product);
           alert('Thêm sản phẩm thành công!');
           window.location.href="./ui-buttons.html";
          }
          
       }
   }
   addProduct();

   //xóa sản phẩm
function detele(id) {
  var options = {
      method : 'DELETE',
      headers: {
          'Content-Type':'application/json'
      }
   };
   fetch(API_URL + 'products' + '/'+ id ,options)
      .then(function(response){
          response.json();;
      })
      .then(function(){
          var deteleItem = document.querySelector('.product' + id);
          if(deteleItem){
              deteleItem.remove();
             
          }
      });
}
