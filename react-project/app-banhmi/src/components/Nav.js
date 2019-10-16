import React, { Component } from 'react'
import {
  Link,NavLink
} from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
         
    
            <div>
                <div className="container" style={{fontSize: '1rem'}}>
          <span><i className="far fa-clock" /></span> Giờ mở cửa 7h00 - 21h30, Chủ nhật, ngày lễ: 8h00 - 21h30
        </div>
        <nav className="navbar navbar-expand-lg sticky-top navbar-light " style={{backgroundColor: '#f9c86e'}}>
          <div className="container">
            <Link className="navbar-brand" to='/'>TF-Food</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                <NavLink className="nav-link" to="/">Trang chủ</NavLink>
                </li>
                <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/Products">Menu</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/Tintuc">Blogs</NavLink>
                </li>
              </ul>
            </div>
            <Link to='/Cart'><i className="fas fa-shopping-cart fa-2x fa-fw"></i> </Link>
            <button className="btn signup" style={{marginLeft:'0.8rem'}}>Tài khoản</button>
          </div>
        </nav>
            </div>
           
        )
    }
}
