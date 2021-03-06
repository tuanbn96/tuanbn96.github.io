import React, { Component } from 'react';
import Navb from '../components/Nav';
import Footer from '../components/Footer';
import {CartContext} from '../contexxs/cart';
import axios from 'axios';
import data from '../dataconfig';
import {Link} from 'react-router-dom';
import '../style/card.css';


export default class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            product :data
        }
    }
    componentDidMount(){
        axios.get("https://api-app-banhmi.herokuapp.com/products").then(res => {
            this.setState({
                product:res.data
            });
        });
        
    }

     toSlug = (str) =>
    {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;
    }
   
    render() {
        const {product} = this.state;
       var tong = (cartItem) => {
        return cartItem.map(e => e.price*e.amount).reduce(((a,b) => a+b),0);
        
       };
        return (
            <div>
                <Navb />
                <div className="container-fluid" >
                    <img src='http://banhmihanoithaohien.com/upload/hinhanh/quangcao-1-7470.png' style={{maxWidth:"100%"}}></img>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item " aria-current="page">Home</li>
                            <li className="breadcrumb-item active" aria-current="page">Menu</li>
                        </ol>
                    </nav>
                </div>
                
                <div className='container-fluid' >
                <div className="title-section text-center mb-md-5 mb-4">
                            <h3 className="w3ls-title mb-3">Our <span>Menu</span></h3>
                            
                        </div>
                    <div className='row'>
                    
                        <div className='col-lg-9 col-xl-9 col-md-9 col-sm-12'>
                       
                            <div className='row'>
                            {product.map(item =>(
                                <div key={item.id} className='col-lg-4 col-xl-4 col-md-6 col-sm-12' style={{marginBottom:'20px'}}>
                                    <div className="card" style={{maxWidth: '100%'}}>
                                        <Link to={'/Ctproduct/' + this.toSlug(item.name + "." + item.id) + '.html'}><img src={item.img} className="card-img-top" /></Link>
                                        <div className="card-body">
                                        <Link to={'/Ctproduct/' + this.toSlug(item.name + "." + item.id) + '.html'}><h5 className="card-title">{item.name}</h5></Link>
                                        <p className="card-text">{item.price} vnđ</p>
                                        <CartContext.Consumer>
                                            {({addToCart}) => (<button  className="btn btn-primary" onClick={() => addToCart(item)}>Order Now</button>)}
                                        
                                        </CartContext.Consumer>
                                        </div>
                                    </div>
                                </div>
                            ))}
                                
                            </div>
                        </div>
                        <div className='col-lg-3 col-xl-3 col-md-3 col-sm-12'>
                            <div style={{maxWidth:'100%',textAlign:'center',height:'3rem',backgroundColor:'#e5d417',color:'white',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}>
                                <h2>Order List</h2>
                                
                            </div>
                            <div style={{height:"250px",width:"100%",padding:"10px",overflow:"auto"}}>
                            <CartContext.Consumer>
                                {({cartItem,tProduct,gProduct}) => (cartItem.map(item =>( 
                                <div  key={cartItem.id} >
                                
                                  <p>Tên:{item.name}</p>
                                  <p>Số lượng: <input className="num-product" type="text" name="num-product1" size='1'
                            value={item.amount} />
                                  <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2" onClick={() => gProduct(item)}>
                                    <i className="fs-12 fa fa-minus" aria-hidden="true" />
                                    </button>
                                    <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2" onClick={() => tProduct(item)}>
                                    <i className="fs-12 fa fa-plus" aria-hidden="true" />
                                    </button>
                                  </p>
                                 
                                  <p>Đơn giá: {item.price*item.amount} vnđ</p><hr/>
                                </div>)))}        
                                </CartContext.Consumer>
                                </div>
                                <CartContext.Consumer>
                                {({cartItem}) => (<div>
                                 <h4 style={{color:'tomato'}}>Thành tiền:{tong(cartItem)} vnđ</h4><br/></div>)}
                                </CartContext.Consumer>
                                
                                 
                                <div style={{maxWidth:'100%',textAlign:'center',height:'3rem',color:'white',borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px'}}>
                                <Link className="btn btn-primary" to='/Cart' style={{margin:"auto",justifyContent:"center"}} role="button">Đặt hàng</Link>
                                <hr/>
                                
                            </div>
                        </div>
                    </div>
                        
                    

                </div>
                <Footer />
            </div>
        )
    }
}

