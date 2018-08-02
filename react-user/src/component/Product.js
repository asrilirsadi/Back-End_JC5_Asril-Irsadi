import React, { Component } from 'react';

import {Link} from 'react-router-dom'; 

class Product extends Component 
{
    render() 
    {
        return (            
                <div>
                    <div className="banner1">
                        <div className="container">
                            <h3><Link to="/">Home</Link> / <span>Products</span></h3>
                        </div>
                    </div>

                    <div className="content">
                        <div className="products-agileinfo">
                            <h2 className="tittle">Mobil Baru</h2>
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
                                                            <ul>
                                                                <li><a href="products.html">A3</a></li>
                                                                <li><Link to="/product">A3</Link></li>
                                                                <li><Link to="/product">A4</Link></li>
                                                                <li><Link to="/product">Q3</Link></li>
                                                                <li><Link to="/product">Q5</Link></li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <input type="checkbox" id="item-0-1" /><label htmlFor="item-0-1">BMW</label>
                                                            <ul>
                                                                <li><Link to="/product">3 Series</Link></li>
                                                                <li><Link to="/product">5 Series</Link></li>
                                                                <li><Link to="/product">7 Series</Link></li>
                                                                <li><Link to="/product">M</Link></li>
                                                                <li><Link to="/product">X</Link></li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <input type="checkbox" id="item-0-2" /><label htmlFor="item-0-2">Daihatsu</label>
                                                            <ul>
                                                                <li><Link to="/product">Ayla</Link></li>
                                                                <li><Link to="/product">Gran Max</Link></li>
                                                                <li><Link to="/product">Sigra</Link></li>
                                                                <li><Link to="/product">Sirion</Link></li>
                                                                <li><Link to="/product">Terios</Link></li>
                                                                <li><Link to="/product">Xenia</Link></li>
                                                            </ul>
                                                        </li>
                                                        
                                                        <li>
                                                            <input type="checkbox" id="item-0-3" /><label htmlFor="item-0-3">Ford</label>
                                                            <ul>
                                                                <li><Link to="/product">Ecosport</Link></li>
                                                                <li><Link to="/product">Everest</Link></li>
                                                                <li><Link to="/product">Fiesta</Link></li>
                                                                <li><Link to="/product">Focus</Link></li>
                                                                <li><Link to="/product">Mustang</Link></li>
                                                                <li><Link to="/product">Ranger</Link></li>
                                                            </ul>
                                                        </li>
                                                        
                                                        <li>
                                                            <input type="checkbox" id="item-0-4" /><label htmlFor="item-0-4">Honda</label>
                                                            <ul>
                                                                <li><Link to="/product">Accord</Link></li>
                                                                <li><Link to="/product">BR-V</Link></li>
                                                                <li><Link to="/product">Brio</Link></li>
                                                                <li><Link to="/product">City</Link></li>
                                                                <li><Link to="/product">Civic</Link></li>
                                                                <li><Link to="/product">CR-V</Link></li>
                                                                <li><Link to="/product">CR-Z</Link></li>
                                                                <li><Link to="/product">HR-V</Link></li>
                                                                <li><Link to="/product">Jazz</Link></li>
                                                                <li><Link to="/product">Mobilio</Link></li>
                                                                <li><Link to="/product">Odyssey</Link></li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <input type="checkbox" id="item-0-5" /><label htmlFor="item-0-5">Hyundai</label>
                                                            <ul>
                                                                <li><Link to="/product">Grand i10</Link></li>
                                                                <li><Link to="/product">H-1</Link></li>
                                                                <li><Link to="/product">i10</Link></li>
                                                                <li><Link to="/product">i20</Link></li>
                                                                <li><Link to="/product">Santa Fe</Link></li>
                                                                <li><Link to="/product">Sonata</Link></li>
                                                                <li><Link to="/product">Tucson</Link></li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <input type="checkbox" id="item-0-6" /><label htmlFor="item-0-6">Kia</label>
                                                            <ul>
                                                                <li><Link to="/product">Grand Sedona</Link></li>
                                                                <li><Link to="/product">Picanto</Link></li>
                                                                <li><Link to="/product">Rio</Link></li>
                                                                <li><Link to="/product">Sorento</Link></li>
                                                                <li><Link to="/product">Sportage</Link></li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <input type="checkbox" id="item-0-7" /><label htmlFor="item-0-7">Mazda</label>
                                                            <ul>
                                                                <li><Link to="/product">2</Link></li>
                                                                <li><Link to="/product">3</Link></li>
                                                                <li><Link to="/product">5</Link></li>
                                                                <li><Link to="/product">6</Link></li>
                                                                <li><Link to="/product">8</Link></li>
                                                                <li><Link to="/product">Biante</Link></li>
                                                                <li><Link to="/product">CX-3</Link></li>
                                                                <li><Link to="/product">CX-5</Link></li>
                                                                <li><Link to="/product">CX-7</Link></li>
                                                                <li><Link to="/product">CX-9</Link></li>
                                                                <li><Link to="/product">MX-5</Link></li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <input type="checkbox" id="item-0-8" /><label htmlFor="item-0-8">Mercedes-Benz</label>
                                                            <ul>
                                                                <li><Link to="/product">A-Class</Link></li>
                                                                <li><Link to="/product">AMG GT</Link></li>
                                                                <li><Link to="/product">B-Class</Link></li>
                                                                <li><Link to="/product">C-Class</Link></li>
                                                                <li><Link to="/product">CLA-Class</Link></li>
                                                                <li><Link to="/product">GLA-Class</Link></li>
                                                                <li><Link to="/product">GLC-Class</Link></li>
                                                                <li><Link to="/product">GLS-Class</Link></li>
                                                                <li><Link to="/product">S-Class</Link></li>
                                                                <li><Link to="/product">SLC-Class</Link></li>													
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <input type="checkbox" id="item-0-9" /><label htmlFor="item-0-9">Mini</label>
                                                            <ul>
                                                                <li><Link to="/product">Cooper</Link></li>
                                                                <li><Link to="/product">Countryman</Link></li>													
                                                            </ul>
                                                        </li>
                                                        
                                                        <li>
                                                            <input type="checkbox" id="item-0-10" /><label htmlFor="item-0-10">Mitsubishi</label>
                                                            <ul>
                                                                <li><Link to="/product">Colt-FE</Link></li>
                                                                <li><Link to="/product">Delica</Link></li>
                                                                <li><Link to="/product">Lancer</Link></li>
                                                                <li><Link to="/product">Mirage</Link></li>
                                                                <li><Link to="/product">Outlander Sport</Link></li>
                                                                <li><Link to="/product">Pajero Sport</Link></li>
                                                                <li><Link to="/product">Strada Triton</Link></li>
                                                                <li><Link to="/product">Xpander</Link></li>													
                                                            </ul>
                                                        </li>
                                                        
                                                        <li>
                                                            <input type="checkbox" id="item-0-11" /><label htmlFor="item-0-11">Nissan</label>
                                                            <ul>
                                                                <li><Link to="/product">Elgrand</Link></li>
                                                                <li><Link to="/product">Evalia</Link></li>
                                                                <li><Link to="/product">Grand Livina</Link></li>
                                                                <li><Link to="/product">Juke</Link></li>
                                                                <li><Link to="/product">March</Link></li>
                                                                <li><Link to="/product">Navara</Link></li>
                                                                <li><Link to="/product">Serena</Link></li>
                                                                <li><Link to="/product">Teana</Link></li>
                                                                <li><Link to="/product">X-Trail</Link></li>													
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <input type="checkbox" id="item-0-12" /><label htmlFor="item-0-12">Suzuki</label>
                                                            <ul>
                                                                <li><Link to="/product">APV</Link></li>
                                                                <li><Link to="/product">Baleno</Link></li>
                                                                <li><Link to="/product">Carry Pick Up</Link></li>
                                                                <li><Link to="/product">Ertiga</Link></li>
                                                                <li><Link to="/product">Grand Vitara</Link></li>
                                                                <li><Link to="/product">Ignis</Link></li>
                                                                <li><Link to="/product">Karimun Wagon R</Link></li>
                                                                <li><Link to="/product">Swift</Link></li>
                                                                <li><Link to="/product">SX4 S-Cross</Link></li>													
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <input type="checkbox" id="item-0-13" /><label htmlFor="item-0-13">Toyota</label>
                                                            <ul>
                                                                <li><Link to="/product">86</Link></li>
                                                                <li><Link to="/product">Agya</Link></li>
                                                                <li><Link to="/product">Alphard</Link></li>
                                                                <li><Link to="/product">Avanza</Link></li>
                                                                <li><Link to="/product">CH-R</Link></li>
                                                                <li><Link to="/product">Calya</Link></li>
                                                                <li><Link to="/product">Camry</Link></li>
                                                                <li><Link to="/product">Corolla Altis</Link></li>
                                                                <li><Link to="/product">Fortuner</Link></li>	
                                                                <li><Link to="/product">Kijang Innova</Link></li>
                                                                <li><Link to="/product">Land Cruiser</Link></li>
                                                                <li><Link to="/product">Rush</Link></li>
                                                                <li><Link to="/product">Sienta</Link></li>
                                                                <li><Link to="/product">Vellfire</Link></li>
                                                                <li><Link to="/product">Vios</Link></li>
                                                                <li><Link to="/product">Voxy</Link></li>
                                                                <li><Link to="/product">Yaris</Link></li>														
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <input type="checkbox" id="item-0-14" /><label htmlFor="item-0-14">Volkswagen</label>
                                                            <ul>
                                                                <li><Link to="/product">Beetle</Link></li>
                                                                <li><Link to="/product">Caravelle</Link></li>
                                                                <li><Link to="/product">Golf</Link></li>
                                                                <li><Link to="/product">Polo</Link></li>
                                                                <li><Link to="/product">Scirocco</Link></li>
                                                                <li><Link to="/product">Tiguain</Link></li>													
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                
                                                <li><input type="checkbox" id="item-1" /><label htmlFor="item-1">Wilayah</label>
                                                    <ul>
                                                        <li><input type="checkbox" id="item-1-0" /><label htmlFor="item-1-0">Jabodetabek</label>
                                                            <ul>
                                                                <li><Link to="/product">Jakarta Utara</Link></li>
                                                                <li><Link to="/product">Jakarta Barat</Link></li>
                                                                <li><Link to="/product">Jakarta Timur</Link></li>
                                                                <li><Link to="/product">Jakarta Pusat</Link></li>
                                                                <li><Link to="/product">Jakarta Selatan</Link></li>
                                                                <li><Link to="/product">Kota Bekasi</Link></li>
                                                                <li><Link to="/product">Kota Bogor</Link></li>
                                                                <li><Link to="/product">Kota Depok</Link></li>
                                                                <li><Link to="/product">Kota Tangerang</Link></li>
                                                                <li><Link to="/product">Kabupaten Bekasi</Link></li>
                                                                <li><Link to="/product">Kabupaten Bogor</Link></li>
                                                                <li><Link to="/product">Kabupaten Tangerang</Link></li>
                                                            </ul>
                                                        </li>

                                                        <li><input type="checkbox" id="item-1-1" /><label htmlFor="item-1-1">Jawa Barat</label>
                                                            <ul>
                                                                <li><Link to="/product">Kota Bandung</Link></li>
                                                                <li><Link to="/product">Kota Cimahi</Link></li>
                                                                <li><Link to="/product">Kota Cirebon</Link></li>
                                                                <li><Link to="/product">Kota Tasik</Link></li>
                                                                <li><Link to="/product">Kabupaten Bandung</Link></li>
                                                                <li><Link to="/product">Kabupaten Cianjur</Link></li>
                                                                <li><Link to="/product">Kabupaten Garut</Link></li>
                                                                <li><Link to="/product">Kabupaten Karawang</Link></li>
                                                                <li><Link to="/product">Kabupaten Sukabumi</Link></li>	
                                                            </ul>
                                                        </li>

                                                        <li><input type="checkbox" id="item-1-2" /><label htmlFor="item-1-2">Jawa Tengah</label>
                                                            <ul>
                                                                <li><Link to="/product">Kota Magelang</Link></li>
                                                                <li><Link to="/product">Kota Semarang</Link></li>
                                                                <li><Link to="/product">Kota Surakarta</Link></li>
                                                                <li><Link to="/product">Kota Tegal</Link></li>
                                                                <li><Link to="/product">Kabupaten Banyumas</Link></li>
                                                                <li><Link to="/product">Kabupaten Brebes</Link></li>
                                                                <li><Link to="/product">Kabupaten Demak</Link></li>
                                                                <li><Link to="/product">Kabupaten Kudus</Link></li>
                                                                <li><Link to="/product">Kabupaten Pemalang</Link></li>	
                                                            </ul>
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
                                                        
                                                        <li><input type="checkbox" defaultChecked="checked" id="item-4-1" /><label htmlFor="item-4-1">Otomatis</label>
                                                        {/* <ul>
                                                                <li><Link to="/product">Automatic Gear Shift (AGS)</Link></li>
                                                                <li><Link to="/product">Countinous Variable Transmission (CVT)</Link></li>
                                                                <li><Link to="/product">Dual Clutch</Link></li>
                                                                <li><Link to="/product">Konvensional 4 Percepatan (Torque Converter)</Link></li>
                                                            </ul> */}
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
                                                    <option value> Nama Mobil</option>
                                                    <option value>  Rate</option>
                                                    <option value> Warna </option>
                                                    <option value> Harga </option>
                                                </select>
                                            </p> 
                                            
                                            <p>Show
                                                <select>
                                                    <option value> 9</option>
                                                    <option value>  10</option>
                                                    <option value> 11 </option>
                                                    <option value> 12 </option>
                                                </select>
                                            </p>

                                            <div className="clearfix" />		
                                        </div>

                                        <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
                                            <ul id="myTab" className="nav1 nav1-tabs left-tab" role="tablist">
                                                <ul id="myTab" className="nav nav-tabs left-tab" role="tablist">
                                                    <li role="presentation" className="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true"><img src="images/menu1.png" /></a></li>
                                                    <li role="presentation"><a href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile"><img src="images/menu.png" /></a></li>								
                                                </ul>

                                                <div id="myTabContent" className="tab-content">
                                                    <div role="tabpanel" className="tab-pane fade in active" id="home" aria-labelledby="home-tab">
                                                        <div className="product-tab">
                                                            <div className="col-md-4 product-tab-grid simpleCart_shelfItem">
                                                                <div className="grid-arr">
                                                                    <div className="grid-arrival">
                                                                        <figure>		
                                                                            <a href="#" className="new-gri" data-toggle="modal" data-target="#myModal1">
                                                                                <div className="grid-img">
                                                                                <img src="./../images/lipro_toyotayaris2018_citrus2.jpg" className="img-responsive" alt />
                                                                                </div>
                                                                                <div className="grid-img">
                                                                                <img src="./../images/lipro_toyotayaris2018_citrus.jpg" className="img-responsive" alt />
                                                                                </div>			
                                                                            </a>		
                                                                        </figure>	
                                                                    </div>

                                                                    <div className="block">
                                                                        <div className="starbox small ghosting"> </div>
                                                                    </div>

                                                                    <div className="women">
                                                                        <h6><Link to="/single">All New Toyota Yaris 2018</Link></h6>
                                                                        <span className="size">TRD Sportivo CVT</span>
                                                                        <p><em className="item_price">Rp 275.900.000</em></p>
                                                                        <a href="#" data-text="Add To Cart" className="my-cart-b item_add">Add To Cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4 product-tab-grid simpleCart_shelfItem">
                                                                <div className="grid-arr">
                                                                    <div className="grid-arrival">
                                                                        <figure>		
                                                                        <a href="#" className="new-gri" data-toggle="modal" data-target="#myModal1">
                                                                            <div className="grid-img">
                                                                                <img src="./../images/lipro_daihatsusirion2018_ungu.jpg" className="img-responsive" alt />
                                                                            </div>
                                                                            
                                                                            <div className="grid-img">
                                                                                <img src="./../images/lipro_daihatsusirion2018_ungu2.jpg" className="img-responsive" alt />
                                                                            </div>			
                                                                        </a>		
                                                                        </figure>	
                                                                    </div>

                                                                    <div className="block">
                                                                        <div className="starbox small ghosting"> </div>
                                                                    </div>
                                                                    
                                                                    <div className="women">
                                                                        <h6><a href="single.html">All New Daihatsu Sirion 2018</a></h6>
                                                                        <span className="size">A/T</span>
                                                                        <p><em className="item_price">Rp 193.500.000</em></p>
                                                                        <a href="#" data-text="Add To Cart" className="my-cart-b item_add">Add To Cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="clearfix" />
                                                        </div>
                                                    </div>

                                                    <div role="tabpanel" className="tab-pane fade" id="profile" aria-labelledby="profile-tab">
                                                        <div className="product-tab1">
                                                            <div className="col-md-4 product-tab1-grid">
                                                                <div className="grid-arr">
                                                                    <div className="grid-arrival">
                                                                        <figure>		
                                                                        <a href="#" className="new-gri" data-toggle="modal" data-target="#myModal1">
                                                                            <div className="grid-img">
                                                                            <img src="./../images/lipro_toyotayaris2018_citrus2.jpg" className="img-responsive" alt />
                                                                            </div>
                                                                            <div className="grid-img">
                                                                            <img src="./../images/lipro_toyotayaris2018_citrus.jpg" className="img-responsive" alt />
                                                                            </div>			
                                                                        </a>		
                                                                        </figure>	
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-8 product-tab1-grid1 simpleCart_shelfItem">
                                                                <div className="block">
                                                                    <div className="starbox small ghosting"> </div>
                                                                </div>
                                                                
                                                                <div className="women">
                                                                    <h6><Link to="/single">All New Toyota Yaris 2018</Link></h6>
                                                                    <span className="size">TRD Sportivo CVT </span>
                                                                    <p>Kondisi: Baru</p>
                                                                    <p>Merk Mobil: Toyota</p>
                                                                    <p>Wilayah: Jakarta Selatan</p>
                                                                    <p>Warna: Citrus</p>
                                                                    <p>Tipe Body: Hatchback</p>
                                                                    <p>Jenis Transmisi: Otomatis CVT</p>
                                                                    {/* <p>Torsi: 140 NM, Tenaga: 106 HP, 1496cc </p>
                                                                                                <p>Exterior: LED DRL, LED Rear Combination, TRD Rear Roof Spoiler, Bold Front Bumper, Sporty Rear Bumper</p>
                                                                                                <p>Interior: Head Unit(iPod/Iphone Connectivity, Miracast), Leather Steering Wheel with Audio and TFT Switch, Paddle Shift, Sport and Eco Mode, TFT MID</p>
                                                                                                <P>Safety: VSC, HSA, 7 Airbags, ABS+EBD+BA, Isofix with Tether Anchor</p> */}
                                                                    <p><em className="item_price">IDR 275.900.000&lt;</em></p>
                                                                    <a href="#" data-text="Add To Cart" className="my-cart-b item_add">Add To Cart</a>
                                                                </div>
                                                            </div>

                                                            <div className="clearfix" />
                                                        </div>
                                                        <div className="product-tab1 prod3">
                                                            <div className="col-md-4 product-tab1-grid">
                                                                <div className="grid-arr">
                                                                    <div className="grid-arrival">
                                                                        <figure>		
                                                                        <a href="#" className="new-gri" data-toggle="modal" data-target="#myModal1">
                                                                            <div className="grid-img">
                                                                                <img src="./../images/lipro_daihatsusirion2018_ungu.jpg" className="img-responsive" alt />
                                                                            </div>
                                                                            
                                                                            <div className="grid-img">
                                                                                <img src="./../images/lipro_daihatsusirion2018_ungu2.jpg" className="img-responsive" alt />
                                                                            </div>			
                                                                        </a>		
                                                                        </figure>	
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-8 product-tab1-grid1 simpleCart_shelfItem">
                                                                <div className="block">
                                                                    <div className="starbox small ghosting"> </div>
                                                                </div>
                                                                
                                                                <div className="women">
                                                                    <h6><Link to="/single">All New Daihatsu Sirion 2018</Link></h6>
                                                                    <span className="size">A/T </span>
                                                                    <p>Kondisi: Baru</p>
                                                                    <p>Merk Mobil: Daihatsu</p>
                                                                    <p>Wilayah: Jakarta Timur</p>
                                                                    <p>Warna: Ungu</p>
                                                                    <p>Tipe Body: Hatchback</p>
                                                                    <p>Jenis Transmisi: Otomatis Konvensional 4 Percepatan (Torque Converter)</p>
                                                                    {/* <p>Torsi: 120 NM, Tenaga: 94 HP, 1329cc </p>
                                                                                                <p>Exterior: LED Rear Combination Lamp, Front Bumper and Chrome Grille, Chrome Fog Lamp, Auto Rear Wiper, Front Speed Sensing Wiper, New Head Lamp with Follow Me Home and Levelling Adjuster</p>
                                                                                                <p>Interior: 2DIN Touch Screen, Leather Steering Wheel with Audio and Phone Handsfree, New Meter Combination with LCD Meter, Digital AC (with Memory, Steering Switch Start Stop Button, Shopping Hooks and Side and Back Pocket,  USB Charger (2) and Power Outlet(1) </p>		
                                                                                                <P>Safety: VSC and TRC, Front and Side Airbags Airbags, ABS+EBD, Isofix System, Key Free with Immobilizer</P> */}
                                                                    <p><em className="item_price">IDR 193.500.000</em></p>
                                                                    <a href="#" data-text="Add To Cart" className="my-cart-b item_add">Add To Cart</a>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="clearfix" />
                                                        </div>
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

export default Product;