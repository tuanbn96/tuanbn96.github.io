import React, { Component } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../style/signup.css'
export default class SignUp extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container" style={{marginTop:'2rem',paddingTop:'2rem',border:'solid 1px gray',borderRadius:'20px'}} >
                <div className="login-signup">
                        <div className="row">
                        <div className="col-sm-12 nav-tab-holder">
                            <ul className="nav nav-tabs row" role="tablist">
                            <li role="presentation" className="active col-sm-12"><a href="#home" aria-controls="home" className='btn btn-lg' role="tab" data-toggle="tab">Sign up</a></li>
                            <li role="presentation" className="col-sm-12"><a href="#profile" className='btn btn-lg' aria-controls="profile" role="tab" data-toggle="tab">Log in</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="home">
                            <div className="row">
                            <div className="col-sm-12 mobile-pull">
                                <article role="login">
                                <h3 className="text-center"><i className="fa fa-lock" />Create User Account</h3>
                                <form className="signup" action="index.html" method="post">
                                    <div className="form-group">
                                    <input type="text" className="form-control" placeholder="UserName" />
                                    </div>
                                    <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email Address" />
                                    </div>
                                    <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Phone Number" />
                                    </div>
                                    <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Confirm Password" />
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
                     
                        <div role="tabpanel" className="tab-pane" id="profile">
                            <div className="row">
                            <div className="col-sm-12 mobile-pull">
                                <article role="login">
                                <h3 className="text-center"><i className="fa fa-lock" /> Login</h3>
                                <form className="signup" action="index.html" method="post">
                                    <div className="form-group">
                                    <input type="text" className="form-control" placeholder="UserName" />
                                    </div>
                                   
                                    <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" />
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
                </div>
                <Footer />
            </div>
        )
    }
}
