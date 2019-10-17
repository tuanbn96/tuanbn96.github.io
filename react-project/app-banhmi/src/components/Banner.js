import React, { Component } from 'react';
import data from '../dataconfig';
import {Link} from 'react-router-dom';

export default class Banner extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:'',
      item:[]
    }
  }
  searchitem = (a) => {
    
    let array = [];
    let string = a.target.value;
    if(string !== ''){
    this.setState({
      value:string.charAt(0).toUpperCase() + string.slice(1)
    });
    for(let i = 0; i< data.length;i++){
      if(data[i].name.indexOf(string) !== -1){
        array.push(data[i])
      }
    }
    this.setState({
      item:array
    });
  }
  if(string == ''){
    this.setState({
      value:'',
      item:[]
    })
  }   
  }
  toSlug = (str) =>
    {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;
    }

    render() {
        
        const {item} = this.state;
        

        return (
            <div>
                <header className="masthead text-white text-center">
                <div className="overlay" />
                <div className="container">
                  <div className="row">
                    <div className="col-xl-9 mx-auto">
                      <h1 className="mb-5">
                        Find your meal</h1>
                    </div>
                    <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                      <form>
                        <div className="form-row">
                          <div className="col-12 col-md-9 mb-2 mb-md-0">
                            <input type="text" className="form-control form-control-lg" value={this.state.value} onChange={this.searchitem} />
                          </div>
                          <div className="col-12 col-md-3">
                            <button type="submit" className="btn btn-block btn-lg btn-primary" >Search</button><br/>
                            
                          </div>
                        </div>
                      </form>
                      <div style={{width:'50%'}}>
                      {item.map(i => (
                        <div className="card mb-3" key={i.id} style={{color:'black'}}>
                        <div className="row ">
                          <div className="col-md-4">
                            <Link to={'/product/' + this.toSlug(i.name + "." + i.id) + '.html'}><img src={i.img} className="img-fluid" /></Link>
                          </div>
                          <div className="col-md-8">
                            <div >
                            <Link to={'/product/' +this.toSlug(i.name + "." + i.id) + '.html'}><h5 >{i.name}</h5></Link>
                              <p >{i.price} vnđ</p>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                      ))}
                      
                      
                      </div>
                    </div>
                  </div>
                </div>
              </header> 
            </div>
        )
    }
}
