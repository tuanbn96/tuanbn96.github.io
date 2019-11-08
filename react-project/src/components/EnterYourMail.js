import React, { Component } from 'react'

export default class EnterYourMail extends Component {
    render() {
        return (
            <div >
                 <section className="call-to-action text-white text-center">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h2 className="mb-4" style={{color: 'rgb(255, 255, 255)'}}>Enter your email to receive promotional information</h2>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input type="email" className="form-control form-control-lg" placeholder="Enter your email..." />
                    </div>
                    <div className="col-12 col-md-3">
                      <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
            </div>
        )
    }
}
