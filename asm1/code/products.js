const API_URL = "http://localhost:3000/";
function show(){
    let html = "";
    fetch(API_URL + "products")
    .then(function(response){
        response.json().then(function(data){
            const showProducts = document.getElementById('showProducts');
            data.forEach(element => {
                html += `
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg="img/popular/${element.image}">
                            <div class="ep">${element.price}</div>
                                <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                </div>
                                <div class="product__item__text">
                                    <ul>
                                        <li>Active</li>
                                        <li>Movie</li>
                                    </ul>
                                <h5><a href="anime-details.html">${element.name}</a></h5>
                            </div>
                    </div>
                </div>
                `
            });
            showProducts.innerHTML=html;
        })
    })
}
show();