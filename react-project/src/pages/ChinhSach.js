import React, { Component } from 'react';
import Navb from '../components/Nav';
import Footer from '../components/Footer';

export default class ChinhSach extends Component {
    render() {
        return (
            <div>
            <Navb />
            <div className="container" style={{marginTop:'2rem',paddingTop:'2rem',border:'solid 1px gray',borderRadius:'20px',textAlign:'center'}}><h4 className="title"><span>Đơn hàng của bạn sẽ được bảo quản như thế nào?</span></h4><span><p className="font15">Now sẽ bảo quản đơn của bạn bằng túi &amp; thùng để chống nắng mưa, giữ nhiệt... trên đường đi một cách tốt nhất. </p></span><img src="https://www.now.vn/desktop-app/assets/img/Box-food-preservation-footer.jpg?42147a4a586d72f2b7a21ea97478898e" alt="food preservation" /></div>
            <Footer />
            </div>
        )
    }
}
