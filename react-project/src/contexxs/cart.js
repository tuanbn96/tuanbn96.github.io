import React, { Component } from 'react';


export const CartContext = React.createContext();
export class CartProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            cartItem:[]
        };

        this.addToCart = this.addToCart.bind(this);
        this.gProduct = this.gProduct.bind(this);
        this.tProduct = this.tProduct.bind(this);
        this.del = this.del.bind(this);
    }
    addToCart(product){
        this.setState({
            cartItem:this.state.cartItem.concat(product)
    });
    }
    tProduct(item){
        let newProducts = this.state.cartItem;
        for(let i = 0;i<newProducts.length;i++) {
            if(newProducts[i] == item){
                newProducts[i].amount +=1
            }
        }
        
         
        this.setState({
            cartItem: newProducts
        })
    }
    
    gProduct(item){
        let newProducts = this.state.cartItem;
       
        for(let i = 0;i<newProducts.length;i++) {
            if(newProducts[i] == item && newProducts[i].amount > 1){
               
                    newProducts[i].amount --;
            }
        }
        
        this.setState({
            cartItem: newProducts
        })
    }
    del(item){
        let newProducts = this.state.cartItem;
        for(let i=0;i<newProducts.length;i++){
            if(newProducts[i] == item){
                newProducts.splice(i,1);
            }
        }
        this.setState({
            cartItem:newProducts
        })
    }
    render(){
        return <CartContext.Provider value={{
            cartItem:this.state.cartItem,
            addToCart:this.addToCart,
            gProduct:this.gProduct,
            tProduct:this.tProduct,
            del:this.del
        }}>{this.props.children}</CartContext.Provider>
    }
}

