import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import Cookies from 'universal-cookie';

const cookies = new Cookies();

// import img_1 from './../images/toyotaCHR.jpg';
// import img_2 from './../images/hondaCIVICHatchback.jpg'; 
// import img_3 from './../images/sarung_jok.jpg';
// import img_4 from './../images/StainlessSteelExhaust.jpg';
// import img_5 from './../images/logoIIMS2018.jpg';
// import img_6 from './../images/logoGIIAS2018.png';
// import img_7 from './../images/bag.png';

class Header extends Component
{
    logout() 
    {
        cookies.remove('sessionID')
    }
    render()
    {
       

        return (
                    <div className="header">
                        <div className="header-top container-fluid">
                            <div className="col-md-offset-1">
                                <div className="top-left">
                                    <a id="nolink"> Help  <i className="glyphicon glyphicon-phone" aria-hidden="true" /> +0123-456-789</a>
                                </div>

                                <div className="top-right">
                                    <ul>
                                        <li><Link to="/profile">My Account</Link></li>
                                        <li><Link to="/checkout">Checkout</Link></li>
                                        <li><Link to="/login">Login</Link></li>
                                        <li><Link to="/login" onClick={() => this.logout()}>Logout</Link></li>
                                        <li><Link to="/register"> Register </Link></li>
                                    </ul>
                                </div>   
                            </div>
                        </div>

                        <div className="heder-bottom">
                            <div className="container">
                                <div className="logo-nav">
                                    <div className="logo-nav-left">
                                        <h1><a href="index.html">Auto Shop <span>for Your Auto</span></a></h1>
                                    </div>

                                    <div className="logo-nav-left1">
                                        <nav className="navbar ">
                                        {/* Brand and toggle get grouped for better mobile display */}
                                            <div className="navbar-header nav_2">
                                                <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                                                    <span className="sr-only">Toggle navigation</span>
                                                    <span className="icon-bar" />
                                                    <span className="icon-bar" />
                                                    <span className="icon-bar" />
                                                </button>
                                            </div> 

                                            <div className="collapse navbar-collapse">
                                                <ul className="nav list-inline">
                                                    <li className="active"><a href="index.html" className="act">Home</a></li>	
                                                    
                                                    {/* Mega Menu */}
                                                    <li className="dropdown">
                                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Mobil</a>
                                                        <ul className="dropdown-menu multi-column columns-3">
                                                            <div className="row">
                                                                <div className="col-sm-3  multi-gd-img">
                                                                    <ul className="multi-column-dropdown">
                                                                        <h6>Beli Mobil</h6>
                                                                        <li><Link to="/productlist">Mobil Baru</Link></li>
                                                                        <li><Link to="/productlist">Mobil Bekas</Link></li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-sm-3  multi-gd-img">
                                                                    <Link to="/productlist"><img src="images/toyotaCHR.jpg" style={{height: 100}} alt=" " /></Link>
                                                                </div> 

                                                                <div className="col-sm-3  multi-gd-img">
                                                                    <Link to="/productlist"><img src="images/hondaCIVICHatchback.jpg" style={{height: 100}} alt=" " /></Link>
                                                                </div>

                                                                <div className="clearfix" />
                                                            </div>
                                                        </ul>
                                                    </li>

                                                    <li className="dropdown">
                                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">News</a>
                                                        <ul className="dropdown-menu multi-column columns-3">
                                                            <div className="row">
                                                                <div className="col-sm-3  multi-gd-img">
                                                                    <ul className="multi-column-dropdown">
                                                                        <h6>Berita</h6>
                                                                        <li><a href="#">Mobil Terbaru</a></li>
                                                                        <li><a href="#">Event Otomotif</a></li>
                                                                    </ul>
                                                                </div>
                                                            
                                                                <div className="col-sm-3  multi-gd-img">
                                                                    <ul className="multi-column-dropdown">
                                                                        <h6>Review</h6>
                                                                        <li><a href="#">Mobil Baru</a></li>
                                                                        <li><a href="#">Owning Experience</a></li>
                                                                    </ul>
                                                                </div>
                                                                
                                                                <div className="col-sm-3  multi-gd-img">
                                                                    <a href="products1.html"><img src="images/logoIIMS2018.jpg" style={{height: 80}} alt=" " /></a>
                                                                </div> 
                                                                
                                                                <div className="col-sm-3  multi-gd-img">
                                                                    <a href="products1.html"><img src="images/logoGIIAS2018.png" style={{height: 80}} alt=" " /></a>
                                                                </div> 
                                                                
                                                                <div className="clearfix" />
                                                            </div>
                                                        </ul>
                                                    </li>
                                                
                                                    <li><a href="mail.html">Kontak Kami</a></li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                    
                                    <div className="logo-nav-right">
                                        <ul className="cd-header-buttons">
                                            <li><a className="cd-search-trigger" href="#cd-search"> <span /></a></li>
                                        </ul> {/* cd-header-buttons */}
                                        
                                        <div id="cd-search" className="cd-search">
                                            <form action="#" method="post">
                                                <input name="Search" type="search" placeholder="Search..." />
                                            </form>
                                        </div>	
                                    </div>
                                    
                                    <div className="header-right2">
                                        <div className="cart box_1">
                                            <a href="checkout.html">
                                                <h3> 
                                                    <div className="total">
                                                        <span className="simpleCart_total" /> (<span id="simpleCart_quantity" className="simpleCart_quantity" /> items)
                                                    </div>
                                                    
                                                    <img src="images/bag.png" alt />
                                                </h3>
                                            </a>

                                            <p><a href="javascript:;" className="simpleCart_empty">Empty Cart</a></p>

                                            <div className="clearfix"> </div>
                                        </div>	
                                    </div>
                                    
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default Header;