import React, { Component } from 'react';
import Navb from '../components/Nav';
import Footer from '../components/Footer';
import '../style/signup.css'
export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            
                name:'',
                mail:'',
                phone:'',
                password:''
            
        }
    }
    name = (a) => {
        let string= a.target.value;
        this.setState({
            name:string
        });
    }
    mail = (a) => {
        let string= a.target.value;
        this.setState({
            mail:string
        });
    }
    phone = (a) => {
        let string= a.target.value;
        this.setState({
           phone:string
        });
    }
    password = (a) => {
        let string= a.target.value;
        this.setState({
            password:string
        });
    }
    render() {
        const {name,phone} = this.state;
        return (
            <div>
                <Navb />
                <div className="container" style={{marginTop:'2rem',paddingTop:'2rem'}} >
                    <div className="row">
                        <div className="login-signup col-sm-12 col-md-6" style={{padding:"1rem"}}>
                                
                                <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="home">
                                    <div className="row">
                                    <div className="col-sm-12 mobile-pull">
                                        <article role="login">
                                        <h3 className="text-center"><i className="fa fa-lock" />Create User Account</h3>
                                        <form className="signup" action="index.html" method="post">
                                            <div className="form-group">
                                            <input type="text" className="form-control" placeholder="UserName" onChange={this.name} />
                                            </div>
                                            <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email Address" onChange={this.mail} />
                                            </div>
                                            <div className="form-group">
                                            <input type="number" className="form-control" placeholder="Phone Number" onChange={this.phone} />
                                            </div>
                                            <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password" onChange={this.password} />
                                            </div>
                                            <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Confirm Password"  />
                                            </div>
                                            <div className="form-group">
                                            <div className="checkbox">
                                                <label>
                                                <input type="checkbox" /> Please accept the terms and conditions to proceed with your request.
                                                </label>
                                            </div>
                                            </div>
                                            <div className="form-group">
                                            <input type="submit" className="btn btn-success btn-block" defaultValue="SUBMIT" />
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
                                    <div role="tabpanel" className="tab-pane active" id="home">
                                        <div className="row">
                                        <div className="col-sm-12 mobile-pull">
                                        <article role="login">
                                        <h3 className="text-center"><i class="far fa-address-card"></i>Membership Card</h3>
                                        <p >Name:{name} </p >
                                        <p >Card Number:{phone}</p >
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
