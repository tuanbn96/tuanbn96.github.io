import React, { Component } from 'react'

export default class Feedback extends Component {
    render() {
        return (
            <div>
                 <section className="testimonials text-center bg-light">
          <div className="container">
            <h2 className="mb-5">What people are saying...</h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img className="img-fluid rounded-circle mb-3" src="https://2.bp.blogspot.com/-fjf5yU5r1Jk/WE1VD1BBKpI/AAAAAAAAjgI/bXwGoigAPJYvScMPtzJtzbOJfoGQO2C_ACEw/s1600/15349541_533868826819201_3350340522319981193_n.jpg" alt="" />
                  <h5>Mai</h5>
                  <p>Bị nghiện vài món ở đây</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img className="img-fluid rounded-circle mb-3" src="https://img2.thuthuatphanmem.vn/uploads/2018/12/25/nhung-hinh-anh-gai-xinh-cuc-dep_012909400.jpg" alt="" />
                  <h5>Thùy Cute</h5>
                  <p>Phục vụ xinh đẹp , nhiệt tình dễ thương</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img className="img-fluid rounded-circle mb-3" src="http://kenh14cdn.com/2016/2015-04-17-964964337171551811-1481439588546.jpg" alt="" />
                  <h5>Minh Anh</h5>
                  <p>Gía hợp lý, chất lượng tuyệt vời</p>
                </div>
              </div>
            </div>
          </div>
        </section>
            </div>
        )
    }
}
