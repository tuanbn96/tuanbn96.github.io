import React, { Component } from 'react';
import Navb from '../components/Nav';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import data from '../dataconfig';




export default function Product() {
    let { id } = useParams();
    let string = id.split("").reverse().join("").slice(0,2);
    let numberid = string.split("").reverse().join("");
    let item = data.filter((itemm) => {
        return itemm.id == numberid;
    })
    console.log(item);
    return (
        <div>
            <div>
                <Navb />
                <div className="container" >
                    <img src={'http://banhmihanoithaohien.com/upload/hinhanh/quangcao-1-7470.png'} style={{maxWidth:"100%"}}></img>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item " aria-current="page">Home</li>
                            <li className="breadcrumb-item active" aria-current="page">{item[0].name}</li>
                        </ol>
                    </nav>
                </div>
                <div className='container' style={{marginTop:'2rem',paddingTop:'2rem'}}>
                <div className="row">
          <div className="col-md-7">
            <a href="#">
              <img className="img-fluid rounded mb-3 mb-md-0" src={item[0].img} alt="" />
            </a>
          </div>
          <div className="col-md-5">
            <h3> {item[0].name}</h3>
            <p>Gía: {item[0].price}</p>
            <a className="btn btn-primary" href="#">Oder</a>
          </div>
        </div>
       
        <hr />
        </div> 
                <Footer />
            </div>
        </div>
    )
}

