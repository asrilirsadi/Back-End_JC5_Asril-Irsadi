import React, { Component } from 'react';

// import {Link} from 'react-router-dom'; 

class Footer extends Component
{
    render()
    {
        return (
                // <!---footer--->
                <div className="footer-w3l">
                    <div className="container">
                        <div className="footer-grids">
                            <div className="col-md-3 footer-grid">
                                <h4>About </h4>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                <div className="social-icon">
                                    <a href="#"><i className="icon"></i></a>
                                    <a href="#"><i className="icon1"></i></a>
                                    <a href="#"><i className="icon2"></i></a>
                                    <a href="#"><i className="icon3"></i></a>
                                </div>
                            </div>
                            
                            <div className="col-md-3 footer-grid">
                                <h4>My Account</h4>
                                <ul>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="registered.html"> Create Account </a></li>
                                </ul>
                            </div>
                        
                            <div className="col-md-3 footer-grid">
                                <h4>Information</h4>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="products.html">Products</a></li>
                                    <li><a href="codes.html">Short Codes</a></li>
                                    <li><a href="mail.html">Mail Us</a></li>
                                    <li><a href="products1.html">products1</a></li>
                                </ul>
                            </div>

                            <div className="col-md-3 footer-grid foot">
                                <h4>Contacts</h4>
                                <ul>
                                    <li><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i><a href="#">E Comertown Rd, Westby, USA</a></li>
                                    <li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i><a href="#">1 599-033-5036</a></li>
                                    <li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:example@mail.com"> example@mail.com</a></li>
                                    
                                </ul>
                            </div>
                            
                            <div className="clearfix"> </div>
                        </div>
                    
                    </div>
                </div>
                );
    }
}

export default Footer;