import React, { Component } from 'react';
import {Link} from "react-router-dom";



export default class Service extends Component {
    render() {
        return (
            <div>
                 <section className="features-icons bg-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                  <i className="fas fa-shipping-fast m-auto text" />
                  </div>
                  <Link to="/chinhSach"><h3>Free ship</h3></Link>
                  <p className="lead mb-0"> 
                    Applicable for orders from $20 upwards</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                  <i className="fas fa-glass-cheers m-auto text" />
                  </div>
                  <Link to='/Contact'><h3>
                    Contact us to order</h3></Link>
                  <p className="lead mb-0">Accept orders for the party</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                  <i className="fas fa-address-card m-auto text" />
                  </div>
                  <Link to='/Signup'> <h3>Membership Card</h3></Link>
                  <p className="lead mb-0">
                    Use points to exchange gifts and enjoy special promotions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
            </div>
        )
    }
}
