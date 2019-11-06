import React, { Component } from 'react';
import Navb from '../components/Nav';
import Footer from '../components/Footer';

export default class Tintuc extends Component {
    render() {
        return (
            <div>
                <Navb />
                <div className="container" >
                    <img src={'http://banhmihanoithaohien.com/upload/hinhanh/quangcao-1-7470.png'} style={{maxWidth:"100%"}}></img>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item " aria-current="page">Home</li>
                            <li className="breadcrumb-item active" aria-current="page">Blog</li>
                        </ol>
                    </nav>
                </div>
                <div className='container' style={{marginTop:'2rem',paddingTop:'2rem'}}>
                <div className="row">
          <div className="col-md-7">
            <a href="#">
              <img className="img-fluid rounded mb-3 mb-md-0" src="https://jarvis.vn/uploaded/tra-sua-tran-chau.jpg" alt="" />
            </a>
          </div>
          <div className="col-md-5">
            <h3> Cách tự làm trà sữa tại nhà</h3>
            <p>Trà sữa trân châu có nguồn gốc từ Đài Loan, đặc biệt lan rộng và phổ biến tại các quốc gia châu Á: Trung Quốc, Hàn Quốc, Hồng Kông,…</p>
            <a className="btn btn-primary" href="#">Xem thêm</a>
          </div>
        </div>
       
        <hr />
        </div>
        
                <Footer />
            </div>
        )
    }
}
