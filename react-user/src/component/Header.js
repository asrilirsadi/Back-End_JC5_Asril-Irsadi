import React, { Component } from 'react';


// import './../css/bootstrap.css';
// import './../css/style.css';
// import './../css/font-awesome.css';

import img_1 from './../images/toyotaCHR.jpg';
import img_2 from './../images/hondaCIVICHatchback.jpg'; 
import img_3 from './../images/sarung_jok.jpg';
import img_4 from './../images/StainlessSteelExhaust.jpg';
import img_5 from './../images/logoIIMS2018.jpg';
import img_6 from './../images/logoGIIAS2018.png';
import img_7 from './../images/bag.png';

import {Link} from 'react-router-dom'; 

class Header extends Component 
{
    render() 
    {
        return (
                   
                // <!--header-->
                <div className="header">
                    <div className="header-top">
                        <div className="container">
                            <div className="top-left">
                                <a href="#"> Help  <i className="glyphicon glyphicon-phone" aria-hidden="true"></i> +0123-456-789</a>
                            </div>

                            <div className="top-right">
                                <ul>
                                    <li><Link to="/profile">My Account</Link></li>
                                    <li><Link to="/checkout">Checkout</Link></li>
                                    {/* <li><a href="login.html">Login</a></li> */}
                                    <li><Link to ="/login">Login</Link></li>
                                    {/* <li><a href="registered.html"> Register </a></li> */}
                                    <li><Link to ="/register">Register</Link></li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>

                    <div className="heder-bottom">
                        <div className="container">
                            <div className="logo-nav">
                                <div className="logo-nav-left">
                                    {/* <h1><a href="index.html">Auto Shop <span>for Your Auto</span></a></h1> */}
                                    <h1><Link to="/">Auto Shop <span>for Your Auto</span></Link></h1>
                                </div>
                                
                                <div className="logo-nav-left1">
                                    <nav className="navbar navbar-default">
                                        {/* Brand and toggle get grouped for better mobile display */}
                                        <div className="navbar-header nav_2">
                                            <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                                                <span className="sr-only">Toggle navigation</span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </button>
                                        </div> 
                                        
                                        <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                                            <ul className="nav navbar-nav">
                                                <li className="active"><Link to="/" className="act">Home</Link></li>	
                                                
                                                {/* <!-- Mega Menu --> */}
                                                <li className="dropdown">
                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Mobil<b className="caret"></b></a>
                                                    <ul className="dropdown-menu multi-column columns-3">
                                                        <div className="row">
                                                            <div className="col-sm-3  multi-gd-img">
                                                                <ul className="multi-column-dropdown">
                                                                    <h6>Beli Mobil</h6>
                                                                    <li><Link to="/product">Mobil Baru</Link></li>
                                                                    <li><Link to="/product">Mobil Bekas</Link></li>
                                                                
                                                                </ul>
                                                            </div>
                                                                
                                                            <div className="col-sm-3  multi-gd-img">
                                                                <ul className="multi-column-dropdown">
                                                                    <h6>Jual Mobil</h6>
                                                                    <li><Link to="/product">Pasang Iklan</Link></li>
                                                                    
                                                                </ul>
                                                            </div>

                                                            <div className="col-sm-3  multi-gd-img">
                                                                <Link to="/product"><img src={img_1} id="imgmenuheader" alt=" "/></Link>
                                                            </div> 

                                                            <div className="col-sm-3  multi-gd-img">
                                                                <Link to="/product"><img src={img_2} id="imgmenuheader" alt=" "/></Link>
                                                            </div>
                                                            <div className="clearfix"></div>
                                                        </div>
                                                    </ul>
                                                </li>

                                                <li className="dropdown">
                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Aksesoris <b className="caret"></b></a>
                                                    <ul className="dropdown-menu multi-column columns-3">
                                                        <div className="row">
                                                            <div className="col-sm-3  multi-gd-img">
                                                                <ul className="multi-column-dropdown">
                                                                    <h6>Eksterior</h6>
                                                                    <li><Link to="/product">Spoiler</Link></li>
                                                                    <li><Link to="/product">Muffler</Link></li>
                                                        
                                                                </ul>
                                                            </div>
                                                                
                                                            <div className="col-sm-3  multi-gd-img">
                                                                <ul className="multi-column-dropdown">
                                                                    <h6>Interior</h6>
                                                                    <li><Link to="/product">Head Unit</Link></li>
                                                                    <li><Link to="/product">Sarung Jok</Link></li>
                                                                    
                                                                </ul>
                                                            </div>
                                                                
                                                            <div className="col-sm-3  multi-gd-img">
                                                                <Link to="/product"><img src={img_3} id="imgmenuheader" alt=" "/></Link>
                                                            </div> 
                                                                
                                                            <div className="col-sm-3  multi-gd-img">
                                                                <Link to="/product"><img src={img_4} id="imgmenuheader" alt=" "/></Link>
                                                            </div>
                                                                
                                                            <div className="clearfix"></div>
                                                        </div>
                                                    </ul>
                                                </li>

                                                <li className="dropdown">
                                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">News <b className="caret"></b></a>
                                                        <ul className="dropdown-menu multi-column columns-3">
                                                            <div className="row">
                                                                <div className="col-sm-3  multi-gd-img">
                                                                    <ul className="multi-column-dropdown">
                                                                        <h6>Berita</h6>
                                                                        <li><Link to="/product">Mobil Terbaru</Link></li>
                                                                        <li><Link to="/product">Event Otomotif</Link></li>
                                                            
                                                                    </ul>
                                                                </div>
                                                                    
                                                                <div className="col-sm-3  multi-gd-img">
                                                                    <ul className="multi-column-dropdown">
                                                                        <h6>Review</h6>
                                                                        <li><Link to="/product">Mobil Baru</Link></li>
                                                                        <li><Link to="/product">Owning Experience</Link></li>
                                                                        
                                                                    </ul>
                                                                </div>
                                                                    
                                                                <div className="col-sm-3  multi-gd-img">
                                                                    <Link to="/product"><img src={img_5} id="imgmenuheader2" alt=" "/></Link>
                                                                </div> 

                                                                <div className="col-sm-3  multi-gd-img">
                                                                    <Link to="/product"><img src={img_6}  id="imgmenuheader2" alt=" "/></Link>
                                                                </div> 
                                                                    
                                                                <div className="clearfix"></div>
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
                                        <li><a className="cd-search-trigger" href="#cd-search"> <span></span></a></li>
                                    </ul> 
                                    {/* <!-- cd-header-buttons --> */}
                                    
                                    <div id="cd-search" className="cd-search">
                                        <form action="#" method="post">
                                            <input name="Search" type="search" placeholder="Search..."></input>
                                        </form>                                	
                                    </div>
                                    
                                    <div className="header-right2">
                                        <div className="cart box_1">
                                            <Link to="/checkout">
                                                <h3> 
                                                    <div className="total">
                                                        <span className="simpleCart_total"></span> (<span id="simpleCart_quantity" className="simpleCart_quantity"></span> items)
                                                    </div>
                                                    <img src={img_7} alt="" />
                                                </h3>
                                                </Link>
                                                <p><a href="javascript:;" className="simpleCart_empty">Empty Cart</a></p>
                                                <div className="clearfix"> </div>
                                        </div>	
                                    </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                // <!--header-->
                    
                );
    }
}

export default Header;
