import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import axios from 'axios';

class ProductList extends Component 
{
    state = 
    {
        dataproduct : [],
        // dataprod : [], 
    }

    componentDidMount()
    {
        axios.get('http://localhost:8000/getgambarproduct')
        .then((ambildata) =>
        {
            console.log(ambildata)
            this.setState({
                            dataproduct: ambildata.data
                        })
        })
    }

    render() 
    {
        const prodlist = this.state.dataproduct.map((item,index) =>
                        {
                            var urut = index + 1;
                            var productID = item.id;
                            var merk = item.merk;
                            var model = item.model;
                            var variant = item.variant;
                            var prodyear = item.prodyear;
                            var bodytype = item.body_type;
                            var transmission = item.transmission;
                            var conditioncar = item.conditioncar;
                            var price_Rp = item.price_Rp;
                            var image1 = item.image1;
                            var image2 = item.image2;
                        
                            return <div className="col-md-4 product-tab-grid simpleCart_shelfItem">
                                        <div className="grid-arr">
                                            <div  className="grid-arrival">
                                                <figure>		
                                                    <Link to={{pathname: "/productdetail", state:{productID:productID}}} className="new-gri" data-toggle="modal" data-target="#myModal1">
                                                        <div className="grid-img">
                                                            <img src={'http://localhost:8000/Images/'+ image2} className="img-responsive" alt />
                                                            {/* <img  src="./../images/lipro_toyotayaris2018_citrus2.jpg" className="img-responsive" alt="" /> */}
                                                        </div>

                                                        <div className="grid-img">
                                                        <img src={'http://localhost:8000/Images/'+ image1} className="img-responsive" alt />
                                                            {/* <img  src="./../images/lipro_toyotayaris2018_citrus.jpg" className="img-responsive"  alt="" /> */}
                                                        </div>			
                                                    </Link>		
                                                </figure>	
                                            </div>

                                            <div class="block">
                                                <div class="starbox small ghosting"> </div>
                                            </div>

                                            <div class="women">
                                                <h6><Link to={{pathname: "/productdetail", state:{productID:productID}}}>{merk} {model} {variant} {prodyear}</Link></h6>
                                                <span class="size">{bodytype} {transmission} ({conditioncar})</span>
                                                <p ><em class="item_price">Rp {price_Rp}</em></p>
                                                <a href="#" data-text="Add To Cart" class="my-cart-b item_add">Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                        })

        return (            
                <div>
                    <div className="banner1">
                        <div className="container">
                            <h3><Link to="/">Home</Link> / <span>Product List</span></h3>
                        </div>
                    </div>

                    <div className="content">
                        <div className="products-agileinfo">
                            <h2 className="tittle">Cars List</h2>
                            <div className="container">
                                <div className="product-agileinfo-grids w3l">
                                    <div className="col-md-3 product-agileinfo-grid">
                                        <div className="categories">
                                            <h3>Filter Pencarian</h3>
                                            <ul className="tree-list-pad">
                                                <li><input type="checkbox" id="item-00" /><label htmlFor="item-00">Kondisi</label>
                                                    <ul>
                                                        <li>
                                                            <input type="checkbox" id="item-00-0" /><label htmlFor="item-00-0">Baru</label>
                                                        </li>

                                                        <li>
                                                            <input type="checkbox" id="item-00-1" /><label htmlFor="item-00-1">Bekas</label>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li><input type="checkbox" id="item-0" /><label htmlFor="item-0"><span />Merk Mobil</label>
                                                    <ul>
                                                        <li>
                                                            <input type="checkbox" id="item-0-0" /><label htmlFor="item-0-0">Audi</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="item-0-1" /><label htmlFor="item-0-1">BMW</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="item-0-2" /><label htmlFor="item-0-2">Daihatsu</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="item-0-3" /><label htmlFor="item-0-3">Ford</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="item-0-4" /><label htmlFor="item-0-4">Honda</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="item-0-5" /><label htmlFor="item-0-5">Hyundai</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="item-0-6" /><label htmlFor="item-0-6">Kia</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="item-0-7" /><label htmlFor="item-0-7">Mazda</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="item-0-8" /><label htmlFor="item-0-8">Mercedes-Benz</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="item-0-9" /><label htmlFor="item-0-9">Mini</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="item-0-10" /><label htmlFor="item-0-10">Mitsubishi</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="item-0-11" /><label htmlFor="item-0-11">Nissan</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="item-0-12" /><label htmlFor="item-0-12">Suzuki</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="item-0-13" /><label htmlFor="item-0-13">Toyota</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="item-0-14" /><label htmlFor="item-0-14">Volkswagen</label>
                                                        </li>
                                                    </ul>
                                                </li>
                                                
                                                <li><input type="checkbox" id="item-1" /><label htmlFor="item-1">Wilayah</label>
                                                    <ul>
                                                        <li>
                                                            <input type="checkbox" id="item-1-0" /><label htmlFor="item-1-0">Jabodetabek</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="item-1-1" /><label htmlFor="item-1-1">Jawa Barat</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="item-1-2" /><label htmlFor="item-1-2">Jawa Tengah</label>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li><input type="checkbox" id="item-2" /><label htmlFor="item-2">Warna</label>
                                                    <ul>
                                                        <li>
                                                            <input type="checkbox" id="item-2-0" /><label htmlFor="item-2-0">Abu - Abu</label>	
                                                        </li>

                                                        <li>
                                                            <input type="checkbox" id="item-2-1" /><label htmlFor="item-2-1">Biru</label>
                                                        </li>

                                                        <li>
                                                            <input type="checkbox" id="item-2-1" /><label htmlFor="item-2-1">Citrus</label>
                                                        </li>

                                                        <li>
                                                            <input type="checkbox" id="item-2-2" /><label htmlFor="item-2-2">Hitam</label>
                                                        </li>

                                                        <li>
                                                            <input type="checkbox" id="item-2-3" /><label htmlFor="item-2-3">Merah</label>
                                                        </li>

                                                        <li>
                                                            <input type="checkbox" id="item-2-4" /><label htmlFor="item-2-4">Putih</label>
                                                        </li>

                                                        <li>
                                                            <input type="checkbox" id="item-2-5" /><label htmlFor="item-2-5">Orange</label>
                                                        </li>

                                                        <li>
                                                            <input type="checkbox" id="item-2-6" /><label htmlFor="item-2-6">Silver</label>
                                                        </li>

                                                        <li>
                                                            <input type="checkbox" id="item-2-7" /><label htmlFor="item-2-7">Ungu</label>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li><input type="checkbox" id="item-3" /><label htmlFor="item-3">Tipe Body</label>
                                                    <ul>
                                                        <li>
                                                            <input type="checkbox" id="item-3-0" /><label htmlFor="item-3-0">Hatchback</label>
                                                        </li>
                                                        
                                                        <li>
                                                            <input type="checkbox" id="item-3-1" /><label htmlFor="item-3-1">MPV</label>
                                                        </li>
                                                        
                                                        <li>
                                                            <input type="checkbox" id="item-3-2" /><label htmlFor="item-3-2">SUV</label>
                                                        </li>
                                                        
                                                        <li>
                                                            <input type="checkbox" id="item-3-3" /><label htmlFor="item-3-3">Sedan</label>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li><input type="checkbox" id="item-4" /><label htmlFor="item-4">Jenis Transmisi</label>
                                                    <ul>
                                                        <li>
                                                            <input type="checkbox" id="item-4-0" /><label htmlFor="item-4-0">Manual</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" defaultChecked="checked" id="item-4-1" /><label htmlFor="item-4-1">Otomatis</label>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="price">
                                            <h3>Kisaran Harga (dalam juta)</h3>
                                            <ul className="dropdown-menu6">
                                                <li>                
                                                    <div id="slider-range" />							
                                                    <input type="text" id="amount" style={{border: 0, color: '#ffffff', fontWeight: 'normal'}} />
                                                </li>			
                                            </ul>
                                            <script type="text/javascript" src="./../js/jquery-ui.js"></script>
                                        </div>

                                        <div className="top-rates">
                                            <h3>Aksesoris Paling Diburu</h3>
                                            <div className="recent-grids">
                                                <div className="recent-left">
                                                    <Link to="/single"><img className="img-responsive " src="./../images/Aksesoris Mobil/Headlamp Avanza_375000.jpg" alt /></Link>	
                                                </div>

                                                <div className="recent-right">
                                                    <h6 className="best2"><Link to="/single">Headlamp Avanza</Link></h6>
                                                    <p><em className="item_price">Rp 375.000</em></p>
                                                </div>	
                                                <div className="clearfix"> </div>
                                            </div>

                                            <div className="recent-grids">
                                                <div className="recent-left">
                                                    <Link to="/single"><img className="img-responsive " src="./../images/Aksesoris Mobil/BumperDepanFortuner_1850000.jpg" alt /></Link>	
                                                </div>
                                                
                                                <div className="recent-right">
                                                <h6 className="best2"><Link to="/single">Bumper Depan Fortuner</Link></h6><h6>
                                                    <p><em className="item_price">Rp 1.850.000</em></p>
                                                </h6></div>	
                                                
                                                <div className="clearfix"> </div>
                                            </div>
                                            
                                            <div className="recent-grids">
                                                <div className="recent-left">
                                                    <Link to="/single"><img className="img-responsive " src="./../images/Aksesoris Mobil/MufflerRacingCivicJazzAvanzaXenia_250000.jpg" alt /></Link>	
                                                </div>
                                                
                                                <div className="recent-right">
                                                    <h6 className="best2"><Link to="/single">Muffler Racing</Link></h6>
                                                    <p><em className="item_price">Rp 250.000</em></p>
                                                </div>
                                                
                                                <div className="clearfix"> </div>
                                            </div>
                                            
                                            <div className="recent-grids">
                                                <div className="recent-left">
                                                    <Link to="/single"><img className="img-responsive " src="./../images/Aksesoris Mobil/SpoilerSedanUniversal_175000.jpg" alt /></Link>	
                                                </div>

                                                <div className="recent-right">
                                                    <h6 className="best2"><Link to="/single">Spoiler Sedan Universal</Link></h6>
                                                    <p><em className="item_price">Rp 175.000</em></p>
                                                </div>	
                                                
                                                <div className="clearfix"> </div>
                                            </div>
                                        </div>

                                        <div className="cat-img">
                                            <img className="img-responsive " src="./../images/auto2000.gif" alt />
                                        </div>
                                    </div>

                                    <div className="col-md-9 product-agileinfon-grid1 w3l">
                                        <div className="product-agileinfon-top">
                                            <div className="col-md-6 product-agileinfon-top-left">
                                                <img className="img-responsive " src="./../images/resize_img1_toyotarush2018.jpg" alt />
                                            </div>
                                        
                                            <div className="col-md-6 product-agileinfon-top-left">
                                                <img className="img-responsive " src="./../images/resize_img1_suzukiertiga2018.jpg" alt />
                                            </div>

                                            <div className="clearfix" />
                                        </div>

                                        <div className="mens-toolbar">
                                            <p>Showing 1–9 of 21 results</p>
                                            <p className="showing">Urutkan Berdasarkan
                                                <select>
                                                    <option value> Nama Mobil </option>
                                                    <option value> Rate </option>
                                                    <option value> Warna </option>
                                                    <option value> Harga </option>
                                                </select>
                                            </p> 
                                            
                                            <p>Show
                                                <select>
                                                    <option value> 9 </option>
                                                    <option value> 10 </option>
                                                    <option value> 11 </option>
                                                    <option value> 12 </option>
                                                </select>
                                            </p>

                                            <div className="clearfix" />		
                                        </div>

                                        <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
                                            <ul id="myTab" className="nav1 nav1-tabs left-tab" role="tablist">
                                                <ul>
                                                    <li role="presentation" className="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true"><img src="images/menu1.png" /></a></li>
                                                    <li role="presentation"><a href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile"><img src="images/menu.png" /></a></li>								
                                                </ul>


                                                <div className="container">
                                                    <div className="row">

                                                        { prodlist }
                                                        {/* <div className="col-md-4 product-tab-grid simpleCart_shelfItem">
                                                            <div className="grid-arr">
														        <div  className="grid-arrival">
															        <figure>		
                                                                        <a href="#" className="new-gri" data-toggle="modal" data-target="#myModal1">
                                                                            <div className="grid-img">
                                                                                <img  src="./../images/lipro_toyotayaris2018_citrus2.jpg" className="img-responsive" alt="" />
                                                                            </div>

                                                                            <div className="grid-img">
                                                                                <img  src="./../images/lipro_toyotayaris2018_citrus.jpg" className="img-responsive"  alt="" />
                                                                            </div>			
                                                                        </a>		
                                                                    </figure>	
                                                                </div>

                                                                <div class="block">
                                                                    <div class="starbox small ghosting"> </div>
                                                                </div>

                                                                <div class="women">
                                                                    <h6><a href="single.html">Toyota Yaris 2018</a></h6>
                                                                    <span class="size">TRD Sportivo CVT</span>
                                                                    <p ><em class="item_price">Rp 275.900.000</em></p>
                                                                    <a href="#" data-text="Add To Cart" class="my-cart-b item_add">Add To Cart</a>
                                                                </div>
                                                            </div>
												        </div> */}

                                                        {/* <div className="col-md-4 product-tab-grid simpleCart_shelfItem">
												            <div className="grid-arr">
													            <div  className="grid-arrival">
                                                                    <figure>		
                                                                        <a href="#" className="new-gri" data-toggle="modal" data-target="#myModal1">
                                                                            <div className="grid-img">
                                                                                <img  src="./../images/lipro_daihatsusirion2018_ungu.jpg" className="img-responsive" alt="" />
                                                                            </div>

                                                                            <div className="grid-img">
                                                                                <img  src="./../images/lipro_daihatsusirion2018_ungu2.jpg" className="img-responsive"  alt="" />
                                                                            </div>			
                                                                        </a>		
                                                                    </figure>	
                                                                </div>

                                                                <div className="block">
                                                                    <div className="starbox small ghosting"> </div>
                                                                </div>
													
                                                                <div className="women">
                                                                    <h6><a href="single.html">Daihatsu Sirion 2018</a></h6>
                                                                    <span className="size">A/T</span>
                                                                    <p ><em className="item_price">Rp 193.500.000</em></p>
                                                                    <a href="#" data-text="Add To Cart" className="my-cart-b item_add">Add To Cart</a>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>    
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>       
                );
    }
}

export default ProductList;