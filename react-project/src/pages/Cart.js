import React, { Component } from 'react';
import Navb from '../components/Nav';
import Footer from '../components/Footer';
import {CartContext} from '../contexxs/cart';
import { FaTrashAlt } from "react-icons/fa";

export default class Cart extends Component {
    render() {
        var tong = (cartItem) => {
            return cartItem.map(e => e.price*e.amount).reduce(((a,b) => a+b),0);
            
           };
        return (
            <div>
                <Navb />
                <div className="container" >
                    <img src={'http://banhmihanoithaohien.com/upload/hinhanh/quangcao-1-7470.png'} style={{maxWidth:"100%"}}></img>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item " aria-current="page">Home</li>
                            <li className="breadcrumb-item active" aria-current="page">Cart</li>
                        </ol>
                    </nav>
                </div>
                <div className="container" style={{marginTop:'2rem',paddingTop:'2rem'}} >
                    <div className="row">
                        <div className="login-signup col-sm-12 col-md-6" style={{padding:"1rem"}}>
                                
                                <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="home">
                                    <div className="row">
                                    <div className="col-sm-12 mobile-pull">
                                        <article role="login">
                                        <h3 className="text-center"><i class="fas fa-shipping-fast"></i>Thông tin đơn hàng</h3>
                                        <form className="signup" action="index.html" method="post">
                                            <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name"  />
                                            </div>
                                            <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Address " />
                                            </div>
                                            <div className="form-group">
                                            <input type="number" className="form-control" placeholder="Phone Number"  />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleFormControlTextarea1">Ghi chú</label>
                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                            
                                            
                                            <div className="form-group">
                                            <button type="submit" className="btn btn-success btn-block" >Đặt hàng</button>
                                            </div>
                                        </form>
                                        
                                        </article>
                                    </div>
                                    </div>
                                
                                </div>
                            
                                </div>
                            </div>
                        
                        <div className="login-signup col-sm-12 col-md-6" style={{padding:"1rem"}}>
                            <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane active" id="home" >
                                        

                                        <div className="row">
                                        <div className="col-sm-12 mobile-pull">
                                        <article role="login">
                                        <h3 className="text-center"><i class="fas fa-shopping-cart"></i>Giỏ hàng</h3>
                                    <hr/>
                                    <div style={{height:"200px",width:"100%",padding:"10px",overflow:"auto"}}>

                                        <CartContext.Consumer>
                                                {({cartItem,tProduct,gProduct}) => (cartItem.map(item =>( 
                                                <div  key={cartItem.id}>
                                                
                                                <p>Tên:{item.name}</p>
                                                <p>Số lượng: <input className="num-product" type="text" name="num-product1" size='1'
                                            value={item.amount} />
                                                <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2" onClick={() => gProduct(item)}>
                                                    <i className="fs-12 fa fa-minus" aria-hidden="true" />
                                                    </button>
                                                    <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2"  onClick={() => tProduct(item)}>
                                                    <i className="fs-12 fa fa-plus" aria-hidden="true" />
                                                    </button>
                                                    <span style={{paddingRight:"1rem"}}> </span>
                                                    {/*<button onClick={() => del(item)}> <FaTrashAlt/></button>*/}
                                                   
                                                </p>
                                                
                                                <p>Đơn giá: {item.price*item.amount} vnđ</p><hr/>
                                                </div>)))}        
                                                </CartContext.Consumer>
                                                </div>
                                                <CartContext.Consumer>
                                                {({cartItem}) => (<div><p>Apply coupon:
                                                
                                            
                                                <input size="10" type="text" name="num-product1" />
                                                
                                                </p>
                                                <h4 style={{color:'tomato'}}>Thành tiền:{tong(cartItem)} vnđ</h4><br/></div>)}
                                                
                                                            
                                                </CartContext.Consumer>
                                            
                                        <hr/>
                                        <p>50k = 1 điểm.</p>
                                        <p>Mỗi 5 điểm tặng ngay 1 voucher giảm giá 20k.</p>
                                        </article>
                                        </div>
                                        </div>
                                    </div>
                            </div>

                        </div>
                    </div>
                    </div>

                <Footer />
            </div>
        )
    }
}
