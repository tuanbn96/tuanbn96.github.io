import React, { Component } from 'react'

export default class Introduce extends Component {
    render() {
        return (
            <div>
                <section className="showcase">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: 'url("https://i0.wp.com/congthucmonngon.com/wp-content/uploads/2018/06/banh-mi-kep-thit-ga-nuong-tereyaki.png?w=540&ssl=1")'}} />
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2 style={{color: 'tomato'}}>Câu Chuyện Về Chúng Tôi</h2>
                <p>Thành lập và chính thức hoạt động từ 2018, khởi đầu từ những chàng sinh viên TF-Food được ấp ủ hơn 1 năm bởi 5 thành viên tràn đầy nhiệt huyết </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6 text-white showcase-img" style={{backgroundImage: 'url("https://image.thanhnien.vn/660/uploaded/minhnguyet/2016_12_07/tra-sua_hwnb.jpg")'}} />
              <div className="col-lg-6 my-auto showcase-text">
                <h2 style={{color: 'tomato'}}>Phương Trâm Của Cửa Hàng</h2>
                <p>Mang đến những ổ bánh mì nóng giòn, thơm ngon, dinh dưỡng và hợp vệ sinh với giá cả phải chăng đến tất cả mọi người, mọi hoàn cảnh</p>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: 'url("https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/46491572_732331053790637_2254411935485263872_n.jpg?_nc_cat=108&_nc_oc=AQm7f3H6OLmIArguDLH-r9L-JM_PEmqTqhiX4aIWUeULvqIBQ9S6cdwIN_Nc7D4w3LI&_nc_ht=scontent.fhan2-3.fna&oh=d520f6ef2b57610bbc16f26b1641f6d9&oe=5E581872")'}} />
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2 style={{color: 'tomato'}}> Có Thể Bạn Đã Biết</h2>
                <p>Vào tháng 3 năm 2012, chuyên trang du lịch của The Guardian, một tờ báo nổi tiếng của Vương quốc Anh, đã bình chọn bánh mì Việt Nam thuộc 10 món ăn đường phố ngon và hấp dẫn du khách nhất thế giới.</p>
              </div>
            </div>
          </div>
        </section>
            </div>
        )
    }
}
