import React, { Component } from 'react';
import Navb from '../components/Nav';
import Footer from '../components/Footer';
import '../style/contact.css';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Navb />
                <div className="container animated fadeIn">
                <div className="row">
                  <div style={{width:'100%'}}><h1 className="header-title" style={{textAlign:'center'}}> Contact </h1></div>
                  <hr />
                  <div className="col-sm-12" id="parent">
                    <div className="col-sm-12">
                      <iframe width="100%" height="320px" title="map" frameBorder={0} style={{border: 0}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.865473837358!2d105.7924504147627!3d20.99802898601497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acba8ad197a5%3A0xa55e51322131e722!2zNDggVOG7kSBI4buvdSwgVHJ1bmcgVsSDbiwgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1560764940205!5m2!1sen!2s&fbclid=IwAR2O_kl6MHg5yJKNaTfqJU3zNx5JKWqSDB-N0YrRis_1NEORAq235SsGxAg" allowFullScreen />
                    </div>
                    <div className="col-sm-12">
                      <form action="form.php" className="contact-form" method="post">
                        <div className="form-group">
                          <input type="text" className="form-control" id="name" name="nm" placeholder="Name" required autofocus />
                        </div>
                        <div className="form-group form_left">
                          <input type="email" className="form-control" id="email" name="em" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" id="phone" onkeypress="return event.charCode >= 48 && event.charCode <= 57" maxLength={10} placeholder="Mobile No." required />
                        </div>
                        <div className="form-group">
                          <textarea className="form-control textarea-contact" rows={5} id="comment" name="FB" placeholder="Type Your Message/Feedback here..." required defaultValue={""} />
                          <br />
                          <button className="btn btn-default btn-send"> <span className="glyphicon glyphicon-send" /> Send </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="container second-portion">
                  <div className="row">
                  
                    <div className="col-xs-12 col-sm-6 col-lg-4">
                      <div className="box">							
                        <div className="icon">
                          <div className="image"><i className="fa fa-envelope" aria-hidden="true" /></div>
                          <div className="info">
                            <h3 className="title">MAIL &amp; WEBSITE</h3>
                            <p>
                              <i className="fa fa-envelope" aria-hidden="true" /> &nbsp; nvtuan96bn@gmail.com
                              <br />
                              <br />
                              <i className="fa fa-globe" aria-hidden="true" /> &nbsp; tf-food.dev
                            </p>
                          </div>
                        </div>
                        <div className="space" />
                      </div> 
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-4">
                      <div className="box">							
                        <div className="icon">
                          <div className="image"><i className="fa fa-mobile" aria-hidden="true" /></div>
                          <div className="info">
                            <h3 className="title">CONTACT</h3>
                            <p>
                              <i className="fa fa-mobile" aria-hidden="true" /> &nbsp; 0868892848
                              <br />
                              <br />
                              <i className="fa fa-mobile" aria-hidden="true" /> &nbsp;  0854835049
                            </p>
                          </div>
                        </div>
                        <div className="space" />
                      </div> 
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-4">
                      <div className="box">							
                        <div className="icon">
                          <div className="image"><i className="fa fa-map-marker" aria-hidden="true" /></div>
                          <div className="info">
                            <h3 className="title">ADDRESS</h3>
                            <p>
                              <i className="fa fa-map-marker" aria-hidden="true" /> &nbsp;
                              48 Tố Hữu, Trung Văn, Từ Liêm, Hà Nội
                            </p>
                          </div>
                        </div>
                        <div className="space" />
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
