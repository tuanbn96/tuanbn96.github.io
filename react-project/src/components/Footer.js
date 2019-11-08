import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer font-small blue-grey lighten-5">
          <div className="container text-center text-md-left mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-6 col-lg-5 col-xl-5 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase font-weight-bold">TF-Food</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                <p><i className="fas fa-map-marker-alt" />  Cơ sở 1: 48-Tố Hữu-Nam Từ Liêm -Hà Nội</p>
                <p><i className="fas fa-map-marker-alt" />  Cơ sở 2: 107- Cầu Diễm - Bắc Từ Liêm -Hà Nội</p>
                <p><i className="fas fa-map-marker-alt" />  Cơ sở 3: 203- Cầu Giấy-Hà Nội</p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase font-weight-bold">Products</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                <p>
                  <a href="#!">Foods</a>
                </p>
                <p>
                  <a href="#!">Drinks</a>
                </p>
                <p>
                  <a href="#!">Combo</a>
                </p>
              </div>
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase font-weight-bold">Contact</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                <p>
                  <i className="fas fa-home mr-3" /> 48-Tố Hữu -Từ Liêm -Hà Nội</p>
                <p>
                  <i className="fas fa-envelope mr-3" /> nvtuan96bn@gmail.com</p>
                <p>
                  <i className="fas fa-phone mr-3" /> + 84 868892848</p>
              </div>
            </div>
          </div>
          <div className="container" style={{paddingTop: '10px'}}>
            <div className="row">
              <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                <p className="text-muted small mb-4 mb-lg-0">© Your Website 2019. All Rights Reserved.</p>
              </div>
              <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-3">
                    <a href="#">
                      <i className="fab fa-facebook fa-2x fa-fw" />
                    </a>
                  </li>
                  <li className="list-inline-item mr-3">
                    <a href="#">
                      <i className="fab fa-twitter-square fa-2x fa-fw" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-instagram fa-2x fa-fw" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
            </div>
        )
    }
}
