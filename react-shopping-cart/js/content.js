

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    id: 1,
                    thumbnail: 'https://colorlib.com/etc/fashe/images/item-10.jpg',
                    name: 'Men Tshirt',
                    price: 1000000,
                    quantity: 2,
                    sao: 3
                },
                {
                    id: 2,
                    thumbnail: 'https://colorlib.com/etc/fashe/images/item-05.jpg',
                    name: 'Mug Adventure',
                    price: 500000,
                    quantity: 10,
                    sao: 5
                }
            ]
        };
    }
    
    tProduct(index){
        const newProducts = this.state.products;    
        newProducts[index].quantity += 1;
        this.setState({
            products: newProducts
        })
    }
    coupon = () => {
        let j = this.refs.ahihi.value;
        const newProducts = this.state.products;
        for(let i = 0; i< newProducts.length; i++){
        if ( j == "tuan"){
            newProducts[i].price = newProducts[i].price - newProducts[i].price *  0.2;       }}
            this.setState({
                products: newProducts
            })
    }

    gProduct(index){
        const newProducts = this.state.products;
        if(newProducts[index].quantity > 1)
        newProducts[index].quantity --;
        this.setState({
            products: newProducts
        })
    }
    
    render() {
        const products = this.state.products;
        let cartItems = [];
        let totalPrice = 0;

        for (let i = 0; i < products.length; i++) {
            const product = products[i];

            totalPrice += product.price * product.quantity

            cartItems.push(
                <tr className="table-row" key={product.id}>
                    <td className="column-1">
                        <div className="cart-img-product b-rad-4 o-f-hidden">
                            <img src={product.thumbnail} alt="IMG-PRODUCT" />
                        </div>
                    </td>
                    <td className="column-2">{product.name} </td>
                    <td className="column-3">VND{product.price}</td>
                    <td className="column-4">
                        <div className="flex-w bo5 of-hidden w-size17">
                            <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2" onClick={() => this.gProduct(i)}>
                                <i className="fs-12 fa fa-minus" aria-hidden="true" />
                            </button>
                            <input className="size8 m-text18 t-center num-product" type="number" name="num-product1" 
                            value={product.quantity} />
                            <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2" onClick={() => this.tProduct(i)}>
                                <i className="fs-12 fa fa-plus" aria-hidden="true" />
                            </button>
                        </div>
                    </td>
                    <td className="column-5">${product.price * product.quantity}</td>
                </tr>
            )
        }
        
        return (
            <div>
                <section className="bg-title-page p-t-40 p-b-50 flex-col-c-m" style={{ backgroundImage: 'url(https://colorlib.com/etc/fashe/images/heading-pages-01.jpg)' }}>
                    <h2 className="l-text2 t-center">
                        Cart
                    </h2>
                </section>
                {/* Cart */}
                <section className="cart bgwhite p-t-70 p-b-100">
                    <div className="container">
                        {/* Cart item */}
                        <div className="container-table-cart pos-relative">
                            <div className="wrap-table-shopping-cart bgwhite">
                                <table className="table-shopping-cart">
                                    <tbody>
                                        <tr className="table-head">
                                            <th className="column-1" />
                                            <th className="column-2">Product</th>
                                            <th className="column-3">Price</th>
                                            <th className="column-4 p-l-70">Quantity</th>
                                            <th className="column-5">Total</th>
                                        </tr>

                                        {/* Danh sach san pham */}
                                        {cartItems}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="flex-w flex-sb-m p-t-25 p-b-25 bo8 p-l-35 p-r-60 p-lr-15-sm">
                            <div className="flex-w flex-m w-full-sm">
                                <div className="size11 bo4 m-r-10">
                                    <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="coupon-code" placeholder="Coupon Code" ref="ahihi" />
                                </div>
                                <div className="size12 trans-0-4 m-t-10 m-b-10 m-r-10">
                                    {/* Button */}
                                    <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4" onClick={this.coupon} >
                                        Apply coupon
                                    </button>
                                </div>
                            </div>
                            <div className="size10 trans-0-4 m-t-10 m-b-10">
                                {/* Button */}
                                <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                                    Update Cart
                                </button>
                            </div>
                        </div>
                        {/* Total */}
                        <div className="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">
                            <h5 className="m-text20 p-b-24">
                                Cart Totals
                            </h5>
                            {/*  */}
                            <div className="flex-w flex-sb-m p-b-12">
                                <span className="s-text18 w-size19 w-full-sm">
                                    Subtotal:
                                </span>
                                <span className="m-text21 w-size20 w-full-sm">
                                    VND {totalPrice}
                                </span>
                            </div>
                            {/*  */}
                            <div className="flex-w flex-sb bo10 p-t-15 p-b-20">
                                <span className="s-text18 w-size19 w-full-sm">
                                    Shipping:
                                </span>
                                <div className="w-size20 w-full-sm">
                                    <p className="s-text8 p-b-23">
                                        There are no shipping methods available. Please double check your address, or contact us if you need any help.
                                    </p>
                                    <span className="s-text19">
                                        Calculate Shipping
                                    </span>
                                    <div className="rs2-select2 rs3-select2 rs4-select2 bo4 of-hidden w-size21 m-t-8 m-b-12">
                                        <select className="selection-2" name="country">
                                            <option>Select a country...</option>
                                            <option>US</option>
                                            <option>UK</option>
                                            <option>Japan</option>
                                        </select>
                                    </div>
                                    <div className="size13 bo4 m-b-12">
                                        <input className="sizefull s-text7 p-l-15 p-r-15" type="text" name="state" placeholder="State /  country" />
                                    </div>
                                    <div className="size13 bo4 m-b-22">
                                        <input className="sizefull s-text7 p-l-15 p-r-15" type="text" name="postcode" placeholder="Postcode / Zip" />
                                    </div>
                                    <div className="size14 trans-0-4 m-b-10">
                                        {/* Button */}
                                        <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                                            Update Totals
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            <div className="flex-w flex-sb-m p-t-26 p-b-30">
                                <span className="m-text22 w-size19 w-full-sm">
                                    Total:
                                </span>
                                <span className="m-text21 w-size20 w-full-sm">
                                    $39.00
                                </span>
                            </div>
                            <div className="size15 trans-0-4">
                                {/* Button */}
                                <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}