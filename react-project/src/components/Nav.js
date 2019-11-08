import React, {useState } from 'react'
import {
  Link,NavLink
} from "react-router-dom";
import '../style/menu.css';
import logo from '../static/img/logo.png';

import { Button, Modal,  ModalBody,Form, FormGroup, Label, Input,ModalFooter} from 'reactstrap';


export default function Navb(props) {
  


  const {
   
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
        return (
         
    
            <div>
                <div className="container" style={{fontSize: '1rem'}}>
          <span><i className="far fa-clock" /></span> Giờ mở cửa 7h00 - 21h30, Chủ nhật, ngày lễ: 8h00 - 21h30
        </div>
        <nav className="navbar navbar-expand-lg sticky-top " style={{Color: '#f9c86e'}}>
          <div className="container">
            <Link className="navbar-brand" to='/react-project2'>
            <img src={logo} width="50" height="50" alt="" />
              TF-Food</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-align-justify fa-2x" size={5} ></i>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <NavLink className="nav-link" to="/react-project2">Trang chủ</NavLink>
                </li>
                <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/Products">Menu</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/Tintuc">Blogs</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/SignUp">Sign Up</NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{color:'#23bab5'}} onClick={toggle}>Login</a>
                  <Modal isOpen={modal} toggle={toggle} className={className}>
                    
                    <ModalBody>
                    <Form>
                      <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                      </FormGroup>
                      
                      </Form>
                      <Button color="primary" onClick={toggle}>Login</Button>
                    </ModalBody>
                      
                     
                      <ModalFooter></ModalFooter>
                    
                  </Modal>
                </li>
              </ul>
            </div>
            
            <Link to='/Cart'><i className="fas fa-shopping-cart fa-2x fa-fw"></i> </Link>
           
          </div>
        </nav>
            </div>
           
        )
    
}
