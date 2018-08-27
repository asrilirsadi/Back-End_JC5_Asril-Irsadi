import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
// import $ from 'jquery';

import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';

const cookies = new Cookies();

class ProductAdding extends Component 
{
    state = 
    {
        datamerk: [],
        // productID: '',
        // merk: '',
        // model: '',
        // variant: '',
        // prodyear: '',
        // bodytype: '',
        // transmission: '',
        // colour: '',
        // cityordistrict: '',
        // conditioncar: '',
        // price: '',
    }

    componentDidMount()
    {
        axios.get('http://localhost:8000/datamerk')
        .then(
                (ambilData) =>  {
                                    this.setState(
                                    {
                                        datamerk: ambilData.data
                                    });
                                }

            )
    }
    
    // componentWillMount = () =>
    // {
    //     var self = this;
    //     $(document).ready(() => {
    //         // code to read selected table row cell data (values).
    //         $(".myTable").on('click','.btnEdit', function() 
    //         {
    //              // get the current row
    //              var currentRow = $(this).closest("tr"); 
    //              var col1 = currentRow.attr('nilai'); // get current row 1st table cell TD value
    //              var col2 = currentRow.find("td:eq(1)").text(); // get current row 2nd table cell TD value
                 
    //             //  console.log(col1);
    //             // console.log(col1);

    //             self.setState({
    //                             idmerk: col1,
    //                             namamerk: col2
    //                         })
    //         });
    //     });
    // }
    
    // tambahmerk = (addmerkname) =>
    // {
    //     var newmerk = addmerkname.newmerk.value;

    //     axios.post('http://localhost:8000/tambahmerk',
    //     {
    //         newmerk : newmerk
    //     });
    //     window.location.reload();
    // }

    // editmerk = (editdatamerk) =>
    // {
    //     var updatemerk = editdatamerk.editmerk.value;
    //     var idmerk = editdatamerk.ideditmerk.value;

    //     axios.post('http://localhost:8000/ubahmerk',
    //     {
    //         idmerk : idmerk,
    //         updatemerk : updatemerk,
    //     });
    //     window.location.reload();
    // }

    // hapusproduct = (productID) =>
    // {
    //     axios.post('http://localhost:8000/hapusproduct',
    //     {
    //         id: productID
    //     });
    //     window.location.reload();
    // }

    render() 
    {
        if (cookies.get('sessionID') === undefined)
        {
            return <Redirect to = '/' />;
        }

        const merk = this.state.datamerk.map(
            (isi, urutan) => {
                //var urut = urutan + 1;
                var merkID = isi.id
                var merk = isi.merk;

                return <option nilai={merkID}>{merk}</option>
            });

        // const hasil = this.state.dataproduct.map(
        //    (isi, urutan) => {
        //             var urut = urutan + 1;
        //             var productID = isi.id;
        //             var merk = isi.merk;
        //             var model = isi.model;
        //             var variant = isi.variant;
        //             var prodyear = isi.prodyear;
        //             var bodytype = isi.body_type;
        //             var transmission = isi.transmission;
        //             var colour = isi.colour;
        //             var cityordistrict = isi.cityordistrict;
        //             var conditioncar =isi.conditioncar;
        //             var price = isi.price_Rp;

        //             //console.log(merkID)
 
        //             return  <tr key={urutan} nilai={productID}>
        //                         <td>{urut}</td>
        //                         <td>{merk}</td>
        //                         <td>{model}</td>
        //                         <td>{variant}</td>
        //                         <td>{prodyear}</td>
        //                         <td>{bodytype}</td>
        //                         <td>{transmission}</td>
        //                         <td>{colour}</td>
        //                         <td>{cityordistrict}</td>
        //                         <td>{conditioncar}</td>
        //                         <td>{price}</td>
        //                         <td>
        //                             <Link to={{ pathname: '/product_saved_edit', state: {productID}}} className="btn btn-warning btn md"><i className="fa fa-pencil"></i> Edit </Link> &nbsp00;
        //                             {/* <button className="btn btn-warning btn md btnEdit"><i className="fa fa-pencil"></i> Edit </button> &nbsp; */}
        //                             <button className="btn btn-danger btn md" onClick={() => this.hapusproduct(productID)}><i className="fa fa-trash"></i> Delete </button>
        //                         </td>
        //                     </tr>
        //         });

        return (
                <div>
                    <Header />
                    <SideBar />

                    <div className="content-wrapper">
                        <section className="content-header">
                            <ol className="breadcrumb">
                                <li><Link to="/dashboard"><i className="fa fa-dashboard"></i>Home</Link></li>
                                <li><a href="#">Adding</a></li>
                                <li className="active">Product</li>
                            </ol>
                            <br /><br />
                            <h1>Add Product</h1>
                        </section>

                        <section className="content">
                            <div className="row">
                                {/* Product */}
                                <div className="col-md-12">
                                
                                {/* <!-- Horizontal Form --> */}
                                    <div className="box box-info">
                                        <div className="box-header with-border">
                                            <h3 className="box-title">Add Product Form</h3>
                                        </div>
                                        {/* <!-- /.box-header --> */}
                                        
                                        {/* <!-- form start --> */}
                                        <form className="form-horizontal">
                                            <div className="box-body">
                                                <div className="form-group">
                                                    <label className="col-sm-2 control-label">Brand</label>

                                                    {/* <!-- select --> */}
                                                    <select class="form-control">
                                                        <option>Choose A Brand</option>
                                                        {merk}
                                                        {/* <option>option 1</option>
                                                        <option>option 2</option>
                                                        <option>option 3</option>
                                                        <option>option 4</option>
                                                        <option>option 5</option> */}
                                                    </select>
                                                    
                                                    {/* <div className="col-sm-10">
                                                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                                                    </div> */}
                                                 </div>
                                                
                                                <div className="form-group">
                                                    <label className="col-sm-2 control-label">Model</label>

                                                    {/* <div className="col-sm-10">
                                                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                                                    </div> */}
                                                </div>
                                                
                                                {/* <div className="form-group">
                                                    <div className="col-sm-offset-2 col-sm-10">
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" /> Remember me
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                            {/* <!-- /.box-body --> */}
                                            
                                            <div className="box-footer">
                                                <button type="submit" className="btn btn-default">Cancel</button>
                                                <button type="submit" className="btn btn-info pull-right">Sign in</button>
                                            </div>
                                            {/* <!-- /.box-footer --> */}
                                        </form>
                                    </div>
                                    {/* <!-- /.box --> */}

                                </div>
                            </div>
                        </section>
                    </div> 

                    <Footer />
                </div>
                )
    }
}

export default ProductAdding;
