import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'; 

import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

class Cart extends Component 
{
    state = 
    {
        dataCart : [],
    }

    componentWillMount()
    {
        var userID = cookies.get('sessionID')
        axios.post('http://localhost:8000/cart', 
            {
                userID: userID
            })
            .then((response) =>
            {
                this.setState({
                                dataCart: response.data
                            })
            })
    }
    delete = (event) =>
    {
        console.log(event);
        axios.post(`http://localhost:8000/hapuscart`,
            {
                cartID : event
            }
        )
        window.location.reload();
    }

    render() 
    {
        if (cookies.get('sessionID') === undefined)
        {
            return <Redirect to = '/login' />;
        }

        const DataCart= this.state.dataCart.map((isi, index) =>
                    {
                        // var urutan = index + 1;
                        var cartID = isi.id;
                        var productID =isi.product_id;
                        var userID = isi.usercustomer_id;

                        return  <tr key={index} style={{textAlign: 'center'}}>
                                    <td>{index+1}</td>
                                    <td>{userID}</td>
                                    <td>{productID}</td>
                                    <td><button className='btn btn-danger' onClick={() => this.delete(cartID)}>Cancel</button></td>
                                </tr>
                    })

        return (
                <div>
                    <div className="banner1">
                        <div className="container">
                            <h3><Link to="/">Home</Link> / <span>Cart</span></h3>
                        </div>
                    </div>

                    <div className="content">
                        <div className="cart-items">
                            <div className="container">
                                <h2>My Shopping Bag</h2>

                                <table className="Cart table-striped" border="2px">
                                    <tr className="JudulC">
                                        <th>
                                            No    
                                        </th>
                                        <th className="text-left">
                                            <p className="nama">User ID</p>
                                        </th>
                                        <th>Product ID</th>
                                        <th className="Cancel">
                                            Cancel Product
                                        </th>
                                    </tr>
                                    {DataCart}
                                </table>

                                <div>
                                    <Link to='/checkout'><button type="button" className="btn btn-info" >Go to Checkout</button></Link>	
                                </div>
                                    {/*REVIEW ORDER
                                    <div className="col-md-8" style={{left:'15%',right:'50%'}}>
                                        <div className="panel panel-info">
                                        <div className="panel-heading">
                                            Review Order <div className="pull-right"><small><a className="afix-1" href="#">Edit Cart</a></small></div>
                                        </div>
                                        <div className="panel-body">
                                            <div className="form-group">
                                            <div className="col-sm-3 col-xs-3">
                                                <img className="img-responsive" src="//c1.staticflickr.com/1/466/19681864394_c332ae87df_t.jpg" />
                                            </div>
                                            <div className="col-sm-6 col-xs-6">
                                                <div className="col-xs-12">Product name</div>
                                                <div className="col-xs-12"><small>Quantity:<span>1</span></small></div>
                                            </div>
                                            <div className="col-sm-3 col-xs-3 text-right">
                                                <h6><span>$</span>25.00</h6>
                                            </div>
                                            </div>
                                            <div className="form-group"><hr /></div>
                                            <div className="form-group">
                                            <div className="col-sm-3 col-xs-3">
                                                {/* <img className="img-responsive" src="//c1.staticflickr.com/1/466/19681864394_c332ae87df_t.jpg" /> 
                                            </div>
                                            <div className="col-sm-6 col-xs-6">
                                                <div className="col-xs-12">Product name</div>
                                                <div className="col-xs-12"><small>Quantity:<span>1</span></small></div>
                                            </div>
                                            <div className="col-sm-3 col-xs-3 text-right">
                                                <h6><span>$</span>25.00</h6>
                                            </div>
                                            </div>
                                            <div className="form-group"><hr /></div>
                                            <div className="form-group">
                                            <div className="col-sm-3 col-xs-3">
                                                {/* <img className="img-responsive" src="//c1.staticflickr.com/1/466/19681864394_c332ae87df_t.jpg" /> 
                                            </div>
                                            <div className="col-sm-6 col-xs-6">
                                                <div className="col-xs-12">Product name</div>
                                                <div className="col-xs-12"><small>Quantity:<span>2</span></small></div>
                                            </div>
                                            <div className="col-sm-3 col-xs-3 text-right">
                                                <h6><span>$</span>50.00</h6>
                                            </div>
                                            </div>
                                            <div className="form-group"><hr /></div>
                                            <div className="form-group">
                                            <div className="col-xs-12">
                                                <strong>Subtotal</strong>
                                                <div className="pull-right"><span>$</span><span>200.00</span></div>
                                            </div>
                                            <div className="col-xs-12">
                                                <small>Shipping</small>
                                                <div className="pull-right"><span>-</span></div>
                                            </div>
                                            </div>
                                            <div className="form-group"><hr /></div>
                                            <div className="form-group">
                                            <div className="col-xs-12">
                                                <strong>Order Total</strong>
                                                <div className="pull-right"><span>$</span><span>150.00</span></div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                                <div>
                                            <Link to='/checkout'><button type="button" className="btn btn-info">Go to Checkout</button></Link>	
                                        </div>

                                        </div>*/}
        
                                
                            </div>
                        </div>	
                    </div>
                </div>
                );
    }
}

export default Cart;