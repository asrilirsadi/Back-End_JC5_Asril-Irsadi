import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'; 
import axios from 'axios';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

class ProductDetail extends Component 
{
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
    //  image4: '',
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

        redirectCart: false,
        redirectLogin: false,
    }
    
    componentDidMount = () =>
    {
        var productID = this.props.location.state.productID;
        // console.log(productID);
        // this.setState({productID:productID})
        axios.post('http://localhost:8000/productdetail2', {
            productID: productID
        })
        .then((ambildata) => 
        {
            // console.log(ambildata.data[0].result[0])
            // console.log(ambildata.data[1].result2[0])
            this.setState({
                            merk: ambildata.data[0].result[0].merk,
                            model: ambildata.data[0].result[0].model,
                            variant: ambildata.data[0].result[0].variant,
                            bodytype: ambildata.data[0].result[0].body_type,
                            prodyear: ambildata.data[0].result[0].prodyear,
                            conditioncar: ambildata.data[0].result[0].conditioncar,
                            price_Rp: ambildata.data[0].result[0].price_Rp,
                            overview: ambildata.data[0].result[0].overview,
                            image1: ambildata.data[0].result[0].image1,
                            image2: ambildata.data[0].result[0].image2,
                            image3: ambildata.data[0].result[0].image3,

                            engine: ambildata.data[1].result2[0].engine_cc,
                            torque: ambildata.data[1].result2[0].torque_Nm,
                            power: ambildata.data[1].result2[0].power_hp,
                            width: ambildata.data[1].result2[0].engine_cc,
                            height: ambildata.data[1].result2[0].height_mm,
                            wheelbase: ambildata.data[1].result2[0].wheelbase_mm,
                            groudclearance: ambildata.data[1].result2[0].width_mm,
                            interior: ambildata.data[1].result2[0].interior,
                            exterior: ambildata.data[1].result2[0].exterior,
                            safety: ambildata.data[1].result2[0].safety,
                        })     
        }) 
    }

    order = (ordered) =>
    {
        var userID = cookies.get('sessionID')

        if(userID !== undefined)
        {
            axios.post('http://localhost:8000/order',
            {
                userID: userID,
                productID: ordered.productID.value
            })
            .then((response) =>
            {
                var storestat = response.data;
                if(storestat == 1)
                {
                    this.setState({
                                    redirectCart: true
                                })
                }
            })
        }
        else
        {
            this.setState({
                            redirectLogin: true
                        })
        } 
    }

    render() 
    {
        if (this.state.redirectCart) return <Redirect to='/cart'/>
        // if user success add to cart, then move to cart page
        if (this.state.redirectLogin) return <Redirect to='/Login'/>
        // if user not login yet, when user hit add to cart, they will
        // redirect to login

        return ( 
                <div>
                    <div className="banner1">
                        <div className="container">
                            <h3><Link to="/">Home</Link> / <span>Detail Product</span></h3>
                        </div>
                    </div>

                    <div className="content">
                        <div className="single-wl3">
                            <div className="container">
                                <div className="single-grids">
                                    <div className="col-md-9 single-grid">
                                    
                                        <div className="single-top">
                                            <div className="single-left">
                                                <div className="flexslider">
                                                    <ul className="slides">
                                                        <li data-thumb={'http://localhost:8000/Images/' + this.state.image1}>
                                                            <div className="thumb-image"> <img src={'http://localhost:8000/Images/' + this.state.image1} data-imagezoom="true" className="img-responsive" /> </div>
                                                        </li>
                                                        <li data-thumb={'http://localhost:8000/Images/' + this.state.image2}>
                                                            <div className="thumb-image"> <img src={'http://localhost:8000/Images/' + this.state.image2} data-imagezoom="true" className="img-responsive" /> </div>
                                                        </li>
                                                        <li data-thumb={'http://localhost:8000/Images/' + this.state.image3}>
                                                            <div className="thumb-image"> <img src={'http://localhost:8000/Images/' + this.state.image3} data-imagezoom="true" className="img-responsive" /> </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="single-right simpleCart_shelfItem">
                                                <h4>{this.state.merk} {this.state.model} {this.state.variant} {this.state.prodyear} ({this.state.conditioncar})</h4>
                                                
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
                                                    {/* <a href="#" data-text="Add To Cart" className="my-cart-b item_add">Add To Cart</a> */}
                                                    <button type="button" className="btn btn-success" onClick={() => this.order(this.refs)}><i className="fa fa-shopping-cart"></i> 
                                                        Add To Cart
                                                    </button>
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
                                    {/* <div className="tab-wl3">
                                        <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs"> */}
                                            {/* <ul id="myTab" className="nav nav-tabs left-tab" role="tablist">
                                                <li role="presentation" className="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">Spesifikasi dan Fitur</a></li>
                                                <li role="presentation"><a href="#reviews" role="tab" id="reviews-tab" data-toggle="tab" aria-controls="reviews">Reviews (1)</a></li>
                                            </ul> */}
                                            {/* <div id="myTabContent" className="tab-content"> */}
                                                <div role="tabpanel" className="tab-pane" id="home" aria-labelledby="home-tab">
                                                    <div className="descr">
                                                        <button onClick={() => this.myFunction("Demo1")} className="sipro-button sipro-block sipro-black sipro-left-align">Engine Spesification</button>
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
                                                        <button onclick="myFunction('Demo2')" className="sipro-button sipro-block sipro-black sipro-left-align">Dimension</button>
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
                                                        <button onclick="myFunction('Demo3')" className="sipro-button sipro-block sipro-black sipro-left-align">Interior</button>
                                                        <div id="Demo3" className="sipro-show sipro-container">
                                                            <ul>
                                                                {this.state.interior}
                                                            </ul>
                                                        </div>

                                                        <button onclick="myFunction('Demo4')" className="sipro-button sipro-block sipro-black sipro-left-align">Exterior</button>
                                                        <div id="Demo4" className="sipro-show sipro-container">
                                                            <ul>
                                                               {this.state.exterior}
                                                            </ul>
                                                        </div>
                                                    
                                                        <button onclick="myFunction('Demo5')" className="sipro-button sipro-block sipro-black sipro-left-align">Safety</button>
                                                        <div id="Demo5" className="sipro-show sipro-container">
                                                            <ul>
                                                               {this.state.safety}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <div role="tabpanel" className="tab-pane fade" id="reviews" aria-labelledby="reviews-tab">
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
                                                                <textarea type="text" name="Message" onfocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Message...';}" required defaultValue={"Message..."} />
                                                                <div className="row">
                                                                    <div className="col-md-6 row-grid">
                                                                        <label>Name</label>
                                                                        <input type="text" defaultValue="Name" name="Name" onfocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Name';}" required />
                                                                    </div>
                                                                    <div className="col-md-6 row-grid">
                                                                        <label>Email</label>
                                                                        <input type="email" defaultValue="Email" name="Email" onfocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Email';}" required />
                                                                    </div>
                                                                    <div className="clearfix" />
                                                                </div>
                                                                <input type="submit" defaultValue="SEND" />
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane fade" id="custom" aria-labelledby="custom-tab">
                                                </div> */}
                                            {/* </div> */}
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