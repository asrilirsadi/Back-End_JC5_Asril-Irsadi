import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class Home extends Component
{
    render()
    {
        return (
                <div>
                    
                    {/*banner*/}
                    <div className="banner-w3">
                        <div className="demo-1">            
                            <div id="example1" className="core-slider core-slider__carousel example_1">
                                <div className="core-slider_viewport">
                                    <div className="core-slider_list">
                                        <div className="core-slider_item">
                                            <img src="images/logoGIIAS2018.jpg" style={{height: 800, width: '100%'}} className="img-responsive" alt />
                                        </div>

                                        <div className="core-slider_item">
                                            <img src="images/Audi Q5.jpg" style={{height: 800}} className="img-responsive" alt />
                                        </div>

                                        <div className="core-slider_item">
                                            <img src="images/toyotaCHRmerah.jpg" style={{width: '100%', height: 800}} className="img-responsive" alt />
                                        </div>

                                        <div className="core-slider_item">
                                            <img src="images/fordFocus2018.jpg" style={{height: 800}} className="img-responsive" alt />
                                        </div>
                                    </div>
                                </div>
                  
                                <div className="core-slider_nav">
                                    <div className="core-slider_arrow core-slider_arrow__right" />
                                        <div className="core-slider_arrow core-slider_arrow__left" />
                                </div>
                                
                                <div className="core-slider_control-nav" />
                            </div>
                        </div>
                    </div>	
                    {/*banner*/}

                    {/*content*/}
                    <div className="content">
                        {/*banner-bottom*/}
                        <div className="ban-bottom-w3l">
                            <div className="container">
                                <div className="col-md-6 ban-bottom">
                                    <div className="ban-top">
                                        <img src="./../images/mobilterbaru2018.jpg" style={{height: 350}} className="img-responsive" alt />
                                        
                                        <div className="ban-text">
                                            <h4>Mobil</h4>
                                        </div>
                                        
                                        <div className="ban-text2 hvr-sweep-to-top">
                                            <h4>New<span>2018</span></h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 ban-bottom3">
                                    <div className="ban-top">
                                        <img src="images/sparepart-mobil-honda-terbaru.jpg" style={{height: 160}} className="img-responsive" alt />
                                        
                                        <div className="ban-text1">
                                            <h4>Aksesoris Mobil</h4>
                                        </div>
                                    </div>

                                    <div className="ban-img">
                                        <div className=" ban-bottom1">
                                            <div className="ban-top">
                                                <img src="images/iims2018_boothHondaToyota.jpg" style={{height: 160}} className="img-responsive" alt />
                                                
                                                <div className="ban-text1">
                                                    <h4>Event Otomotif</h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="ban-bottom2">
                                            <div className="ban-top">
                                                <img src="images/covervideoreviewCHR.jpg" style={{height: 160}} className="img-responsive" alt />
                                                
                                                <div className="ban-text1">
                                                    <h4>Video review</h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="clearfix" />
                                    </div>
                                </div>

                                <div className="clearfix" />
                            </div>
                        </div>
                        {/*banner-bottom*/}
                        
                        {/* new-arrivals /// ukuran image 540 x 270 */}
                        <div className="new-arrivals-w3agile">
                            <div className="container">
                                <h2 className="tittle">Mobil Baru</h2>
                                
                                <div className="arrivals-grids">
                                    <div className="col-md-3 arrival-grid simpleCart_shelfItem">
                                        <div className="grid-arr">
                                            <div className="grid-arrival">
                                                <figure>		
                                                    <a href="#" className="new-gri" data-toggle="modal" data-target="#myModal1">
                                                        <div className="grid-img">
                                                            <img src="images/resize_toyotaCHRbiru_3.jpg" className="img-responsive" alt />
                                                        </div>
                                                        
                                                        <div className="grid-img">
                                                            <img src="images/resize_toyotaCHRbiru.jpg" className="img-responsive" alt />
                                                        </div>			
                                                    </a>		
                                                </figure>	
                                            </div>

                                            <div className="ribben">
                                                <p>NEW</p>
                                            </div>

                                            <div className="ribben1">
                                                <p>SALE</p>
                                            </div>

                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>

                                            <div className="mobil"> {/* class lama "women" */}
                                                <h6><a href="single.html">Toyota CHR</a></h6>
                                                <span className="size">Single Tone / Dual Tone</span>
                                                <p><em className="item_price">Mulai Dari IDR 488.500.000</em></p>
                                                <a href="#" data-text="Add To Cart" className="my-cart-b item_add">Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 arrival-grid simpleCart_shelfItem">
                                        <div className="grid-arr">
                                            <div className="grid-arrival">
                                                <figure>		
                                                    <a href="#" className="new-gri" data-toggle="modal" data-target="#myModal2">
                                                        <div className="grid-img">
                                                            <img src="images/resize_suzukiErtiga2018_2.jpg" className="img-responsive" alt />
                                                        </div>
                                                    
                                                        <div className="grid-img">
                                                            <img src="images/resize_suzukiErtiga2018_3.jpg" className="img-responsive" alt />
                                                        </div>			
                                                    </a>		
                                                </figure>	
                                            </div>

                                            <div className="ribben2">
                                                <p>Big Promo</p>
                                            </div>
                                            
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            
                                            <div className="mobil"> {/* class lama "women" */}
                                                <h6><a href="single.html">All New Suzuki Ertiga</a></h6>
                                                <span className="size">GL / GX / GX - ESP </span>
                                                <p><em className="item_price">Mulai Dari IDR 211.500.000</em></p>
                                                <a href="#" data-text="Add To Cart" className=" my-cart-b item_add">Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 arrival-grid simpleCart_shelfItem">
                                        <div className="grid-arr">
                                            <div className="grid-arrival">
                                                <figure>		
                                                    <a href="#" className="new-gri" data-toggle="modal" data-target="#myModal3">
                                                        <div className="grid-img">
                                                            <img src="images/toyotaYaris2018Citrus.jpg" className="img-responsive" alt />
                                                        </div>
                                                    
                                                        <div className="grid-img">
                                                            <img src="images/resize_toyotayaris2018citrus_2.jpg" className="img-responsive" alt />
                                                        </div>			
                                                    </a>		
                                                </figure>	
                                            </div>

                                            <div className="ribben1">
                                                <p>SALE</p>
                                            </div>
                                            
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                                
                                            <div className="mobil"> {/* class lama "women" */}
                                                <h6><a href="single.html">All New Toyota Yaris 2018</a></h6>
                                                <span className="size">E / G / TRD Sportivo </span>
                                                <p><em className="item_price">Mulai dari IDR 235.400.000</em></p>
                                                <a href="#" data-text="Add To Cart" className="my-cart-b item_add">Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 arrival-grid simpleCart_shelfItem">
                                        <div className="grid-arr">
                                            <div className="grid-arrival">
                                                <figure>		
                                                    <a href="#" className="new-gri" data-toggle="modal" data-target="#myModal4">
                                                        <div className="grid-img">
                                                            <img src="images/hondaOdyssey2018.jpg" className="img-responsive" alt />
                                                        </div>
                                                        
                                                        <div className="grid-img">
                                                            <img src="images/resize_hondaodyssey2018_4.jpg" className="img-responsive" alt />
                                                        </div>			
                                                    </a>		
                                                </figure>	
                                            </div>
                                            
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>

                                            <div className="mobil"> {/* class lama "women" */}
                                                <h6><a href="single.html">Honda Odyssey 2018</a></h6>
                                                <span className="size">2.4L / 2.4L Prestige </span>
                                                <p><em className="item_price">Mulai dari IDR 720.000.000</em></p>
                                                <a href="#" data-text="Add To Cart" className="my-cart-b item_add">Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="clearfix" />
                                </div>
                            </div>
                        </div>
                        {/*new-arrivals*/}

                        {/*accessories*/}
                        <div className="accessories-w3l">
                            <div className="container">
                                <h3 className="tittle">Aksesoris</h3>
                                <span>Hot Promo</span>
                                
                                <div className="button">
                                    <a href="#" className="button1"> Shop Now</a>
                                    <a href="#" className="button1"> Quick View</a>
                                </div>
                            </div>
                        </div>
                        {/*accessories*/}
                    
                        <div className="latest-w3">
                            <div className="container">
                                <h3 className="tittle1">Mobil Bekas Paling Dicari</h3>
                                
                                <div className="latest-grids">
                                    <div className="col-md-4 latest-grid">
                                        <div className="latest-top">
                                            <img src="images/nissanMarch_2.jpg" className="img-responsive" style={{height: 200, width: 400}} alt />
                                            
                                            <div className="latest-text">
                                                <h4>Nissan March</h4>
                                                <h5 style={{color: 'white'}}>Small Hatchback</h5>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4 latest-grid">
                                        <div className="latest-top">
                                            <img src="images/hondaJazzputih.jpg" className="img-responsive" style={{height: 200, width: 400}} alt />
                                            
                                            <div className="latest-text">
                                                <h4>Honda Jazz</h4>
                                                <h5 style={{color: 'white'}}>Compact Hatchback</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 latest-grid">
                                        <div className="latest-top">
                                            <img src="images/toyotaAvanza.jpg" className="img-responsive" style={{height: 200, width: 400}} alt />
                                            
                                            <div className="latest-text">
                                                <h4>Toyota Avanza</h4>
                                                <h5 style={{color: 'white'}}>Low MPV</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="clearfix" />
                                </div>

                                <div className="latest-grids">
                                    <div className="col-md-4 latest-grid">
                                        <div className="latest-top">
                                            <img src="images/hondaCRV2012.jpg" className="img-responsive" style={{height: 200, width: 400}} alt />
                                            
                                            <div className="latest-text">
                                                <h4>Honda CRV</h4>
                                                <h5 style={{color: 'white'}}>Medium SUV</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 latest-grid">
                                        <div className="latest-top">
                                            <img src="images/toyotaFortuner.jpg" className="img-responsive" style={{height: 200, width: 400}} alt />
                                            
                                            <div className="latest-text">
                                                <h4>Toyota Fortuner</h4>
                                                <h5 style={{color: 'white'}}>Big SUV</h5>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4 latest-grid">
                                        <div className="latest-top">
                                            <img src="images/nissanSerena.jpg" className="img-responsive" style={{height: 200, width: 400}} alt />
                                            
                                            <div className="latest-text">
                                                <h4>Nissan Serena</h4>
                                                <h5 style={{color: 'white'}}>Big MPV</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="clearfix" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*content*/}
                </div>
                );
    }
}

export default Home;
