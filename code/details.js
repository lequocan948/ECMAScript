const API_URL = "http://localhost:3000/";
let detailProducts = (data) => {
    let product01 = data[0];
    return `
    <div class="col-lg-3">
                        <div class="anime__details__pic set-bg" data-setbg="img/anime/${product01.image}">
                            <div class="comment"><i class="fa fa-comments"></i> 11</div>
                            <div class="view"><i class="fa fa-eye"></i> 9141</div>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="anime__details__text">
                            <div class="anime__details__title">
                                <h3>${product01.name}</h3>
                                <span>${product01.price}</span>
                            </div>
                            <div class="anime__details__rating">
                                <div class="rating">
                                    <a href="#"><i class="fa fa-star"></i></a>
                                    <a href="#"><i class="fa fa-star"></i></a>
                                    <a href="#"><i class="fa fa-star"></i></a>
                                    <a href="#"><i class="fa fa-star"></i></a>
                                    <a href="#"><i class="fa fa-star-half-o"></i></a>
                                </div>
                                <span>1.029 Lượt Đánh Giá</span>
                            </div>
                            <p>${product01.detail}</p>
                            <div class="anime__details__widget">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <ul>
                                            <li><span>Loại:</span> Kinh Dị Hành Động, Bạo Lực</li>
                                            <li><span>Studios:</span> Tango GameWork</li>
                                            <li><span>Ngày Phát Hành:</span> 10, 2014</li>
                                            <li><span>Trạng Thái:</span> Đã Ra Mắt</li>
                                            <li><span>Lưu Ý:</span> Từ 16 Tuổi Trở Lên</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <ul>
                                            <li><span>Đánh Giá:</span> 9/10 </li>
                                            <li><span>Số Lượt Tải:</span> 9M </li>
                                            <li><span>Giới Thiệu:</span> Ghê</li>
                                            <li><span>Chất Lượng:</span> HD</li>
                                            <li><span>Dung Lượng:</span> 35GB</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            <div class="anime__details__btn">
                                <a href="#" class="follow-btn"><i class="fa fa-heart-o"></i> Yêu Thích</a>
                                <a href="#" class="watch-btn"><span>Thêm Vào Giỏ Hàng</span> <i
                                    class="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
    `
}
let showDetail = function(id){
    fetch(API_URL + `${id}`)
        .then(function(response){
            response.json().then(function(data){
                console.log(data.image);
                let dtProducts = detailProducts(data);
                let showDT = document.getElementById('detail');
                showDT.innerHTML = dtProducts;
            })
        })
}
showDetail("products");