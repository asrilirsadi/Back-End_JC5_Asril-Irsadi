import React, { Component } from 'react';

import {Link} from 'react-router-dom'; 

class ProductDetail extends Component 
{
    render() 
    {
        return ( 
                <div>
                    <div className="banner1">
                        <div className="container">
                            <h3><Link to="/">Home</Link> / <span><Link to="/productlist">Product List</Link></span> / <span>Product Detail</span></h3>
                        </div>
                    </div>

                    <div className="content">
                        <div className="single-wl3">
                            <div className="container">
                                <div className="single-grids">
                                    <div className="col-md-9 single-grid">
                                        <div clas="single-top">
                                            <div className="single-left">
                                                <div className="flexslider">
                                                    <ul className="slides">
                                                        <li data-thumb="images/Single Product/sipro_HondaCRV2.4PrestigePutih_1.jpg">
                                                            <div className="thumb-image"> <img src="./../images/Single Product/sipro_HondaCRV2.4PrestigePutih_1.jpg" data-imagezoom="true" className="img-responsive" /> </div>
                                                        </li>

                                                        <li data-thumb="images/Single Product/sipro_HondaCRV2.4PrestigePutih_2.jpg">
                                                            <div className="thumb-image"> <img src="./../images/Single Product/sipro_HondaCRV2.4PrestigePutih_2.jpg" data-imagezoom="true" className="img-responsive" /> </div>
                                                        </li>

                                                        <li data-thumb="images/Single Product/sipro_HondaCRV2.4PrestigePutih_6.jpg">
                                                            <div className="thumb-image"> <img src="./../images/Single Product/sipro_HondaCRV2.4PrestigePutih_6.jpg" data-imagezoom="true" className="img-responsive" /> </div>
                                                        </li>
                                                        
                                                        <li data-thumb="images/Single Product/sipro_HondaCRV2.4PrestigePutih_3.jpg">
                                                            <div className="thumb-image"> <img src="./../images/Single Product/sipro_HondaCRV2.4PrestigePutih_1.jpg" data-imagezoom="true" className="img-responsive" /> </div>
                                                        </li>
                                                        
                                                        <li data-thumb="images/Single Product/sipro_HondaCRV2.4PrestigePutih_4.jpg">
                                                            <div className="thumb-image"> <img src="images/Single Product/sipro_HondaCRV2.4PrestigePutih_2.jpg" data-imagezoom="true" className="img-responsive" /> </div>
                                                        </li>
                                                        
                                                        <li data-thumb="images/Single Product/sipro_HondaCRV2.4PrestigePutih_7.jpg">
                                                            <div className="thumb-image"> <img src="./../images/Single Product/sipro_HondaCRV2.4PrestigePutih_6.jpg" data-imagezoom="true" className="img-responsive" /> </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="single-right simpleCart_shelfItem">
                                                <h4>Honda CRV 2.4L Prestige 2013</h4>
                                                <div className="block">
                                                    <div className="starbox small ghosting"> </div>
                                                </div>
                                                <p className="price item_price">Rp 260.000.000</p>
                                                <div className="description">
                                                    <p><span>Quick Overview : </span> </p>
                                                    <p>Kondisi Bekas.</p> 
                                                    <p>Mobil masih tampak seperti baru.</p> 
                                                    <p>Pajak masih panjang.</p> 
                                                    <p>Bebas dari banjir dan tabrakan.</p> 
                                                    <p>Interior mewah dan masih berfungsi dengan baik.</p>
                                                    <p>Eksterior masih tampil elegan seperti mobil baru.</p>
                                                    <p>Kondisi sangat terawat.</p>
                                                </div>

                                                <div className="color-quality">
                                                    <h6>Jumlah :</h6>
                                                    <div className="quantity"> 
                                                        <div className="quantity-select">                           
                                                            <div className="entry value-minus1">&nbsp;</div>
                                                            <div className="entry value1"><span>1</span></div>
                                                            <div className="entry value-plus1 active">&nbsp;</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="women">
                                                    <span className="size">2.4 L Prestige </span>
                                                    <a href="#" data-text="Add To Cart" className="my-cart-b item_add">Add To Cart</a>
                                                </div>

                                                <div className="social-icon">
                                                    <a href="#"><i className="icon" /></a>
                                                    <a href="#"><i className="icon1" /></a>
                                                    <a href="#"><i className="icon2" /></a>
                                                    <a href="#"><i className="icon3" /></a>
                                                </div>
                                            </div>

                                            <div className="clearfix"> </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 single-grid1">
                                        <h3>Mobil Keluaran Baru</h3>
                                        <div className="recent-grids">
                                            <div className="recent-left">
                                                <a href="single.html"><img className="img-responsive " src="./../images/Single Product/rsz_recentgrid_toyotachr2018.jpg" alt /></a>	
                                            </div>

                                            <div className="recent-right">
                                                <h6 className="best2"><Link to="/single">Toyota C-HR 1.8 AT 2018 </Link></h6>
                                                <h6 className="best2"><Link to="/single">Toyota C-HR 1.8 AT 2018 </Link></h6>
                                                <span className=" price-in1"> Rp 488.500.000</span>
                                            </div>	
                                            
                                            <div className="clearfix"> </div>
                                        </div>

                                        <div className="recent-grids">
                                            <div className="recent-left">
                                                <Link to="/single"><img className="img-responsive " src="./../images/Single Product/rsz_1recentgrid_suzukiertiga2018_2.jpg" alt /></Link>	
                                            </div>

                                            <div className="recent-right">
                                                <h6 className="best2"><Link to="/single">Suzuki Ertiga GX 2018</Link></h6>
                                                <span className=" price-in1"> Rp 223.500.000</span>
                                            </div>	
                                            
                                            <div className="clearfix"> </div>
                                        </div>

                                        <div className="recent-grids">
                                            <div className="recent-left">
                                                <Link to="/single"><img className="img-responsive " src="./../images/Single Product/rsz_recentgrid_hondaodyssey2018.jpg" alt /></Link>	
                                            </div>
                                            
                                            <div className="recent-right">
                                                <h6 className="best2"><Link to="/single">Honda Odyssey 2.4L Prestige 2018 </Link></h6>
                                                <span className=" price-in1"> Rp 722.000.000</span>
                                            </div>
                                            
                                            <div className="clearfix"> </div>
                                        </div>

                                        <div className="recent-grids">
                                            <div className="recent-left">
                                                <Link to="/single"><img className="img-responsive " src="./../images/Single Product/rsz_recentgrid_toyotayaris2018.jpg" alt /></Link>	
                                            </div>

                                            <div className="recent-right">
                                                <h6 className="best2"><Link to="/single">Toyota Yaris TRD Sportivo 2018</Link></h6>
                                                <span className=" price-in1">Rp 275.900.000</span>
                                            </div>	
                                            
                                            <div className="clearfix"> </div>
                                        </div>
                                    </div>

                                    <div className="clearfix"> </div>
                                </div>

                                {/*Product Description*/}
                                <div className="product-w3agile">
                                    <h3 className="tittle1">Spesifikasi Mobil</h3>
                                    <div className="product-grids">
                                        <div className="col-md-4 product-grid">
                                            <div id="owl-demo" className="owl-carousel">
                                                <div className="item">
                                                    <div className="recent-grids">
                                                        <div className="recent-left">
                                                            <Link to="/single"><img className="img-responsive " src="./../images/Single Product/rsz_recentgrid_hondajazz2016_hitam.jpg" alt /></Link>	
                                                        </div>

                                                        <div className="recent-right">
                                                            <h6 className="best2"><Link to="/single">Honda Jazz RS 2016</Link></h6>
                                                            {/* <div class="block">
                                                                                                <div class="starbox small ghosting"> </div>
                                                                                            </div> */}
                                                            <span className=" price-in1"><del>Rp 223.805.147</del> Rp 220.000.000</span>
                                                        </div>

                                                        <div className="clearfix"> </div>
                                                    </div>
                                                    <br />

                                                    <div className="recent-grids">
                                                        <div className="recent-left">
                                                            <Link to="/single"><img className="img-responsive " src="./../images/Single Product/rsz_recentgrid_toyotaavanza2016_hitam.jpg" alt /></Link>	
                                                        </div>

                                                        <div className="recent-right">
                                                            <h6 className="best2"><Link to="/single">Toyota Avanza 1.3L G 2016 </Link></h6>
                                                            {/* <div class="block">
                                                                                                <div class="starbox small ghosting"> </div>
                                                                                            </div> */}
                                                            <span className=" price-in1"><del>Rp 158.638.313</del> Rp 157.000.000</span>
                                                        </div>

                                                        <div className="clearfix"> </div>
                                                    </div>
                                                    <br />

                                                    <div className="recent-grids">
                                                        <div className="recent-left">
                                                            <Link to="/single"><img className="img-responsive " src="./../images/Single Product/rsz_recentgrid_nissanserena2014_putih.jpg" alt /></Link>	
                                                        </div>

                                                        <div className="recent-right">
                                                            <h6 className="best2"><Link to="/single">Nissan Serena 2.0L HWS 2014</Link></h6>
                                                            {/* <div class="block">
                                                                                                <div class="starbox small ghosting"> </div>
                                                                                            </div> */}
                                                            <span className=" price-in1"><del>Rp 230.951.612</del> Rp 215.000.000</span>
                                                        </div>

                                                        <div className="clearfix"> </div>
                                                    </div>
                                                    <br />

                                                    <div className="recent-grids">
                                                        <div className="recent-left">
                                                            <Link to="/single"><img className="img-responsive " src="./../images/Single Product/rsz_recentgrid_toyotafortuner2013_putih.jpg" alt /></Link>	
                                                        </div>

                                                        <div className="recent-right">
                                                            <h6 className="best2"><Link to="/single">Toyota Fortuner 2.5L G TRD Sportivo 2013</Link></h6>
                                                            {/* <div class="block">
                                                                                                <div class="starbox small ghosting"> </div>
                                                                                            </div> */}
                                                            <span className=" price-in1"><del>Rp 313.606.741</del> Rp 295.000.000</span>
                                                        </div>	
                                                        
                                                        <div className="clearfix"> </div>
                                                    </div>
                                                </div>

                                                <div className="item">
                                                    <div className="recent-grids">
                                                        <div className="recent-left">
                                                            <Link to="/single"><img className="img-responsive " src="./../images/Single Product/rsz_recentgrid_mercedesbenzc2002011_hitam.jpg" alt /></Link>	
                                                        </div>

                                                        <div className="recent-right">
                                                            <h6 className="best2"><Link to="/single">Mercedes-Benz C200 1.8L CGI </Link></h6>
                                                            <div class="block">
                                                                <div class="starbox small ghosting"> </div>
                                                            </div>
                                                            <span className=" price-in1"><del>Rp 272.564.102</del> Rp 255.000.000</span>
                                                        </div>	
                                                        <div className="clearfix"> </div>
                                                    </div>
                                                    <br />

                                                    <div className="recent-grids">
                                                        <div className="recent-left">
                                                            <Link to="/single"><img className="img-responsive " src="./../images/Single Product/rsz_recentgrid_hondacivic2008_silver.jpg" alt /></Link>	
                                                        </div>

                                                        <div className="recent-right">
                                                            <h6 className="best2"><Link to="/single">Honda Civic 2.0L FD</Link></h6>
                                                            <div class="block">
                                                                <div class="starbox small ghosting"> </div>
                                                            </div>
                                                            <span className=" price-in1"><del>Rp 156.388.392</del> Rp 135.000.000</span>
                                                        </div>	
                                                        
                                                        <div className="clearfix"> </div>
                                                    </div>
                                                    <br />
                                                    
                                                    <div className="recent-grids">
                                                        <div className="recent-left">
                                                            <Link to="/single"><img className="img-responsive " src="./../images/Single Product/rsz_recentgrid_nissanxtrail2006_hitam.jpg" alt /></Link>	
                                                        </div>
                                                        
                                                        <div className="recent-right">
                                                            <h6 className="best2"><Link to="/single">NIssan X-Trail 2.5L ST</Link></h6>
                                                            <div class="block">
                                                                <div class="starbox small ghosting"> </div>
                                                            </div>
                                                            <span className=" price-in1"> <del>Rp 97.521.739</del> Rp 85.000.000</span>
                                                        </div>

                                                        <div className="clearfix"> </div>
                                                    </div>
                                                    <br />
                                                    
                                                    <div className="recent-grids">
                                                        <div className="recent-left">
                                                            <Link to="/single"><img className="img-responsive " src="./../images/Single Product/rsz_recentgrid_bmw525i2001_silver.jpg" alt /></Link>	
                                                        </div>

                                                        <div className="recent-right">
                                                            <h6 className="best2"><Link to="/single">BMW 525i 2.5L</Link></h6>
                                                            <div className="block">
                                                                <div className="starbox small ghosting"> </div>
                                                            </div>
                                                            <span className=" price-in1"><del>Rp 82.000.000</del> Rp 69.000.000</span>
                                                        </div>	

                                                        <div className="clearfix"> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to="http://otospector.co.id/cek-mobil-bekas/?utm_source=mobil123&utm_medium=banner-desktop&utm_campaign=lelangmobil123" target="_blank"><img className="img-responsive " src="./../images/Single Product/banner_Otospector.jpg" alt /></Link>
                                        </div>

                                        <div className="col-md-8 product-grid1">
                                            <div className="tab-wl3">
                                                <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
                                                <ul id="myTab" className="nav nav-tabs left-tab" role="tablist">
                                                    <li role="presentation" className="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">Spesifikasi dan Fitur</a></li>
                                                    <li role="presentation"><a href="#reviews" role="tab" id="reviews-tab" data-toggle="tab" aria-controls="reviews">Reviews (1)</a></li>
                                                </ul>
                                                <div id="myTabContent" className="tab-content">
                                                    <div role="tabpanel" className="tab-pane fade in active" id="home" aria-labelledby="home-tab">
                                                    <div className="descr">
                                                        <button onclick="myFunction('Demo1')" className="sipro-button sipro-block sipro-black sipro-left-align">Spesifikasi Mesin</button>
                                                        <div id="Demo1" className="sipro-hide sipro-container">
                                                        <table>
                                                            <tbody><tr>
                                                                <td id="left">Tipe Mesin</td>
                                                                <td id="right">i-VTEC DOHC + DBW</td>
                                                            </tr>
                                                            <tr>
                                                                <td id="left">Kapasitas Silinder</td>
                                                                <td id="right">2354 cc</td>
                                                            </tr>
                                                            <tr>
                                                                <td id="left">Torsi</td>
                                                                <td id="right">222 Nm</td>
                                                            </tr>
                                                            <tr>
                                                                <td id="left">Tenaga Puncak</td>
                                                                <td id="right">187 Hp</td>
                                                            </tr>
                                                            </tbody></table>
                                                        </div>
                                                        <button onclick="myFunction('Demo2')" className="sipro-button sipro-block sipro-black sipro-left-align">Dimensi</button>
                                                        <div id="Demo2" className="sipro-hide sipro-container">
                                                        <table>
                                                            <tbody><tr>
                                                                <td id="left">Panjang</td>
                                                                <td id="right">4545 mm</td>
                                                            </tr>
                                                            <tr>
                                                                <td id="left">Lebar</td>
                                                                <td id="right">1820 mm</td>
                                                            </tr>
                                                            <tr>
                                                                <td id="left">Tinggi</td>
                                                                <td id="right">1685 mm</td>
                                                            </tr>
                                                            <tr>
                                                                <td id="left">Jarak Sumbu Roda </td>
                                                                <td id="right">2620 mm</td>
                                                            </tr>
                                                            </tbody></table>
                                                        </div>
                                                        <button onclick="myFunction('Demo3')" className="sipro-button sipro-block sipro-black sipro-left-align">Interior</button>
                                                        <div id="Demo3" className="sipro-hide sipro-container">
                                                        <ul type="disc">
                                                            <li>One Push Ignition System</li>
                                                            <li>i-AMD (intelligent Multi Information Display)</li>
                                                            <li>Integrated Audio, Double Double DIN AM/FM, single disc. MP3, WMA, ACC, USB, made for iPod &amp; iPhone</li>
                                                            <li>Automatic AC with dual zone climate controle</li>
                                                            <li>ECON Mode</li>
                                                            <li>Speed sensitive volume compensation audio (SVC)-4 mode</li>
                                                            <li>Tilt &amp; Telescopic Steering Wheel with Leather</li>
                                                            <li>Steering wheel-mounted controls</li>
                                                            <li>Paddle Shift</li>
                                                            <li>Cruise control</li>
                                                            <li>Survisor with vanity mirror</li>
                                                            <li>Combi meter cluster + ECO assist</li>
                                                            <li>Seat adjustment in front cabin</li>
                                                            <li>Arm rest bagian depan in front cabin</li>
                                                            <li>Arm rest + Cup holders in back cabin</li>
                                                            <li>Dual map lights</li>
                                                            <li>Sunglasses box</li>
                                                            <li>One action Seat arrangement</li>
                                                            <li>Central console + rear ac ventilation</li>
                                                        </ul>
                                                        </div>
                                                        <button onclick="myFunction('Demo4')" className="sipro-button sipro-block sipro-black sipro-left-align">Eksterior</button>
                                                        <div id="Demo4" className="sipro-hide sipro-container">
                                                        <ul type="square">
                                                            <li>Projector Headlight</li>
                                                            <li>Foq Lamp</li>
                                                            <li>Heat rejecting green-tinied glass</li>
                                                            <li>Lead high mount stop lamp</li>
                                                            <li>Power retractable side door mirror with LED turning signal</li>
                                                            <li>Shark Fin antenna</li>
                                                        </ul>
                                                        </div>
                                                        <button onclick="myFunction('Demo5')" className="sipro-button sipro-block sipro-black sipro-left-align">Safety</button>
                                                        <div id="Demo5" className="sipro-hide sipro-container">
                                                        <ul type="circle">
                                                            <li>VSA (Vehicle Stability Assist)</li>
                                                            <li>Hill Start Assist</li>
                                                            <li>ABS + EBD</li>
                                                            <li>Dual Airbag</li>
                                                            <li>Front Seatblet with ELR 3 point (x2) with pretensioner and Load Limiter</li>
                                                            <li>Back Seatbelt with ELR 3 point (x3)</li>
                                                            <li>immobilizer with security alarm</li>
                                                            <li>Smart key</li>
                                                            <li>keyless and smart entry</li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div role="tabpanel" className="tab-pane fade" id="reviews" aria-labelledby="reviews-tab">
                                                    <div className="descr">
                                                        <div className="reviews-top">
                                                        <div className="reviews-left">
                                                            <img src="images/men3.jpg" alt=" " className="img-responsive" />
                                                        </div>
                                                        <div className="reviews-right">
                                                            <ul>
                                                            <li><a href="#">Admin</a></li>
                                                            <li><a href="#"><i className="glyphicon glyphicon-share" aria-hidden="true" />Reply</a></li>
                                                            </ul>
                                                            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.</p>
                                                        </div>
                                                        <div className="clearfix" />
                                                        </div>
                                                        <div className="reviews-bottom">
                                                        <h4>Add Reviews</h4>
                                                        <p>Your email address will not be published. Required fields are marked *</p>
                                                        <p>Your Rating</p>
                                                        <div className="block">
                                                            <div className="starbox small ghosting"><div className="positioner"><div className="stars"><div className="ghost" style={{width: '42.5px', display: 'none'}} /><div className="colorbar" style={{width: '42.5px'}} /><div className="star_holder"><div className="star star-0" /><div className="star star-1" /><div className="star star-2" /><div className="star star-3" /><div className="star star-4" /></div></div></div></div>
                                                        </div>
                                                        <form action="#" method="post">
                                                            <label>Your Review </label>
                                                            <textarea type="text" name="Message" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message...';}" required defaultValue={"Message..."} />
                                                            <div className="row">
                                                            <div className="col-md-6 row-grid">
                                                                <label>Name</label>
                                                                <input type="text" defaultValue="Name" name="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" required />
                                                            </div>
                                                            <div className="col-md-6 row-grid">
                                                                <label>Email</label>
                                                                <input type="email" defaultValue="Email" name="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required />
                                                            </div>
                                                            <div className="clearfix" />
                                                            </div>
                                                            <input type="submit" defaultValue="SEND" />
                                                        </form>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div role="tabpanel" className="tab-pane fade" id="custom" aria-labelledby="custom-tab">
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                                {/*Product Description*/}
                            </div>
                        </div>
                    </div>
                </div>
                );
    }
}

export default ProductDetail;