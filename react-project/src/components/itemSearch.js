import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ItemSearch extends Component {
   constructor(props){
       super(props);
   }
    render() {
        return (
            <div>
               
                  <div className="card mb-3" key={this.props.key} style={{color:'black'}}>
                  <div className="row ">
                    <div className="col-md-4">
                      <Link to={this.props.name}><img src={this.props.img} className="img-fluid" /></Link>
                    </div>
                    <div className="col-md-8">
                      <div >
                      <Link to={this.props.name}><h5 >{this.props.name}</h5></Link>
                        <p >{this.props.price} vnđ</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
               
                 
            </div>
        )
    }
}
