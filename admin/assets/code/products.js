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
                <a class="btn-sm app-btn-secondary" href="#">Sửa</a>
                <a class="btn-sm app-btn-secondary bg-danger text-white" href="#">Xóa</a>
            </td>
        </tr>
                `
            });
            showProducts.innerHTML=html;
        })
    })
}
show();