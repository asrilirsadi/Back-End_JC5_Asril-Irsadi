import React, { Component } from 'react';

import {Link} from 'react-router-dom'; 

class Cart extends Component 
{
    render() 
    {
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
                                <h2>My Shopping Bag (2)</h2>
                                <div className="cart-header">
                                    <div className="close1"> </div>
                                        <div className="cart-sec simpleCart_shelfItem">
                                            <div className="cart-item cyc">
                                                <img src="./../images/Single Product/sipro_HondaCRV2.4PrestigePutih_1.jpg" className="img-responsive" alt />
                                            </div>
                                            <div className="cart-item-info">
                                                <h3><a href="#"> Honda CR-V 2.4L 2013 Putih </a><span>Pickup time:</span></h3>
                                                <ul className="qty">
                                                    <li><p>Min. order value:</p></li>
                                                    <li><p>FREE delivery</p></li>
                                                </ul>

                                                <div className="delivery">
                                                    <p>Service Charges : Rp 3.000.000</p>
                                                    <span>Delivered in 1-1:30 hours</span>
                                                    <div className="clearfix" />
                                                </div>	
                                            </div>

                                            <div className="clearfix" />
                                    </div>
                                </div>

                                <div className="cart-header2">
                                    <div className="close2"> </div>
                                    <div className="cart-sec simpleCart_shelfItem">
                                        <div className="cart-item cyc">
                                            <img src="./../images/KnalpotRacingHondaCR-V_Spoon Muffler_935000.jpg" className="img-responsive" alt />
                                        </div>

                                        <div className="cart-item-info">
                                            <h3><a href="#"> Knalpot Racing - Spoon Muffler </a><span>Pickup time:</span></h3>
                                            <ul className="qty">
                                                <li><p>Min. order value:</p></li>
                                                <li><p>FREE delivery</p></li>
                                            </ul>
                                            
                                            <div className="delivery">
                                                <p>Service Charges : Rp 200.000</p>
                                                <span>Delivered in 1-1:30 hours</span>
                                                <div className="clearfix" />
                                            </div>	
                                        </div>
                                        <div className="clearfix" />					
                                    </div>
                                </div>

                                <div>
                                    <a href="invoice.html"><button type="button" className="btn btn-info">Go to Invoice</button></a>	
                                </div>
                            </div>
                        </div>	
                    </div>
                </div>
                );
    }
}

export default Cart;