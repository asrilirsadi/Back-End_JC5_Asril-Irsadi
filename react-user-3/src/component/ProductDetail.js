import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import axios from 'axios';

class ProductDetail extends Component 
{
    
    // myFunction = (id) => 
    // {
    //     var x = document.getElementById(id);
    //     if (x.className.indexOf("sipro-show") == -1) 
    //     {
    //         x.className += " sipro-show";
    //         x.previousElementSibling.className = 
    //         x.previousElementSibling.className.replace("sipro-black", "sipro-red");
    //     } 
    //     else 
    //     { 
    //         x.className = x.className.replace(" sipro-show", "");
    //         x.previousElementSibling.className = 
    //         x.previousElementSibling.className.replace("sipro-red", "sipro-black");
    //     }
    // }
    
   
    state = 
    {
        //state for product data
        productID: '',
        merk: '',
        model: '',
        model_id: '',
        variant: '',
        variant_id: '',
        bodytype: '',
        bodytype_id: '',
        prodyear: '',
        conditioncar: '',
        price_Rp: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        overview: '',
        
        //state for spec
        engine: '',
        torque: '',
        power: '',
        width: '',
        height: '',
        wheelbase: '',
        groudclearance: '',
        interior: '',
        exterior: '',
        safety: '',
    }

    componentDidMount()
    {
        var productID = this.props.location.state.productID;
        //console.log(productID);
        this.setState({productID:productID})
        // var modelID = '';
        // var variantID = '';
        // var bodytypeID = '';
        // var prodyear = '';

        axios.post('http://localhost:8000/getproductchoosen/' + productID)
        .then((ambildata) => 
        {
            // var modelID = '';
            // var variantID = '';
            // var bodytypeID = '';
            // var prodyear = '';
            
            // modelID = ambildata.data[0].model_id;
            // variantID = ambildata.data[0].variant_id;
            // bodytypeID = ambildata.data[0].bodytype_id;
            // prodyear = ambildata.data[0].prodyear;
            
            // console.log(modelID);
            // console.log(variantID);
            // console.log(bodytypeID);
            // console.log(prodyear);
            //console.log(ambildata);
            this.setState({
                            model_id : ambildata.data[0].model_id,
                            variant_id : ambildata.data[0].variant_id,
                            bodytype_id : ambildata.data[0].bodytype_id,
                            prodyear : ambildata.data[0].prodyear,

                            merk: ambildata.data[0].merk,
                            model: ambildata.data[0].model,
                            variant: ambildata.data[0].variant,
                            bodytype: ambildata.data[0].body_type,
                            
                            conditioncar: ambildata.data[0].conditioncar,
                            price_Rp: ambildata.data[0].price_Rp,
                            image1: ambildata.data[0].image1,
                            image2: ambildata.data[0].image2,
                            image3: ambildata.data[0].image3,
                            image4: ambildata.data[0].image4,
                            overview: ambildata.data[0].overview,
                        })

                        // console.log(this.state.model_id);
                        // console.log(this.state.variant_id);
                        // console.log(this.state.bodytype_id);
                        // console.log(this.state.prodyear);

        });

        

        var modelID = this.state.model_id;
        var variantID = this.state.variant_id;
        var bodytypeID = this.state.bodytype_id;
        var prodyear = this.state.prodyear;
        console.log(modelID);
        console.log(variantID);
        console.log(bodytypeID);
        console.log(prodyear);

        // axios.post('http://localhost:8000/getproductspec',
        // {
        //     modelID : modelID,
        //     variantID : variantID,
        //     bodytypeID : bodytypeID,
        //     prodyear : prodyear  
        axios.post('http://localhost:8000/getproductspec/'+modelID+ '/' +variantID+ '/' +bodytypeID+ '/' +prodyear)
        .then((response) => 
        {
            console.log(response);
            this.setState({
                            engine: response.data[0].engine_cc,
                            torque: response.data[0].torque_Nm,
                            power: response.data[0].power_hp,
                            width: response.data[0].width_mm,
                            height: response.data[0].height_mm,
                            wheelbase: response.data[0].wheelbase_mm,
                            groudclearance: response.data[0].groudclearance_mm,
                            interior: response.data[0].interior,
                            exterior: response.data[0].exterior,
                            safety: response.data[0].safety,
                        })
        })
    }

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
                                                        <li data-thumb={`http://localhost:8000/` + `Images/${this.state.image1}`}>
                                                            <div className="thumb-image"> <img src={`http://localhost:8000/` + `Images/${this.state.image1}`} data-imagezoom="true" className="img-responsive" /> </div>
                                                        </li>

                                                        <li data-thumb={'http://localhost:8000/Images/'+ this.state.image2}>
                                                            <div className="thumb-image"> <img src={'http://localhost:8000/Images/'+ this.state.image2} data-imagezoom="true" className="img-responsive" /> </div>
                                                        </li>

                                                        <li data-thumb={'http://localhost:8000/Images/'+ this.state.image3}>
                                                            <div className="thumb-image"> <img src={'http://localhost:8000/Images/'+ this.state.image3} data-imagezoom="true" className="img-responsive" /> </div>
                                                        </li>
                                                        
                                                        <li data-thumb={'http://localhost:8000/Images/'+ this.state.image4}>
                                                            <div className="thumb-image"> <img src={'http://localhost:8000/Images/'+ this.state.image4} data-imagezoom="true" className="img-responsive" /> </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="single-right simpleCart_shelfItem">
                                                <h4>{this.state.merk} {this.state.model} {this.state.variant} {this.state.conditioncar} {this.state.prodyear} ({this.state.conditioncar})</h4>
                                                <div className="block">
                                                    <div className="starbox small ghosting"> </div>
                                                </div>
                                                <p className="price item_price">Rp {this.state.price_Rp}</p>
                                                <div className="description">
                                                    <p><span>Quick Overview : </span> </p>
                                                    <p>{this.state.overview}</p> 
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
                                                    {/* <span className="size">2.4 L Prestige </span> */}
                                                    <Link to='/cart' data-text="Add To Cart" className="my-cart-b item_add">Add To Cart</Link>
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
                                                            <div className="block">
                                                                <div className="starbox small ghosting"> </div>
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
                                                            <div className="block">
                                                                <div className="starbox small ghosting"> </div>
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
                                                            <div className="block">
                                                                <div className="starbox small ghosting"> </div>
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
                                            <div className="container">
                                                <div className="row">
                                                        <div role="tabpanel" className="tab-pane" id="home" aria-labelledby="home-tab">
                                                            <div className="descr">
                                                                <button onClick={() => this.myFunction("Demo1")} className="sipro-button sipro-block sipro-black sipro-left-align">Engine Specification</button>
                                                                <div id="Demo1" className="sipro-show sipro-container">
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td id="left">Engine (cc)</td>
                                                                                <td id="right">{this.state.engine}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td id="left">Torque (Nm)</td>
                                                                                <td id="right">{this.state.torque}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td id="left">Power (Hp)</td>
                                                                                <td id="right">{this.state.power}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                                <button onClick={() => this.myFunction('Demo2')} className="sipro-button sipro-block sipro-black sipro-left-align">Dimension</button>
                                                                <div id="Demo2" className="sipro-show sipro-container">
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td id="left">Height (mm)</td>
                                                                                <td id="right">{this.state.height}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td id="left">Width (mm)</td>
                                                                                <td id="right">{this.state.width}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td id="left">Wheelbase (mm)</td>
                                                                                <td id="right">{this.state.wheelbase}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td id="left">Ground Clearance (mm)</td>
                                                                                <td id="right">{this.state.groudclearance}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                                <button onClick={() => this.myFunction('Demo3')} className="sipro-button sipro-block sipro-black sipro-left-align">Interior</button>
                                                                <div id="Demo3" className="sipro-show sipro-container">
                                                                    <ul>
                                                                        {this.state.interior}
                                                                    </ul>
                                                                </div>

                                                                <button onClick={() => this.myFunction('Demo4')} className="sipro-button sipro-block sipro-black sipro-left-align">Exterior</button>
                                                                <div id="Demo4" className="sipro-show sipro-container">
                                                                    <ul>
                                                                        {this.state.exterior}
                                                                    </ul>
                                                                </div>

                                                                <button onClick={() => this.myFunction('Demo5')} className="sipro-button sipro-block sipro-black sipro-left-align">Safety</button>
                                                                <div id="Demo5" className="sipro-show sipro-container">
                                                                    <ul>
                                                                        {this.state.safety}
                                                                    </ul>
                                                                </div>
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