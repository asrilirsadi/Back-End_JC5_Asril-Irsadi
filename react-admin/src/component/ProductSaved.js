import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import $ from 'jquery';

import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';

const cookies = new Cookies();

class ProductSaved extends Component 
{
    state = 
    {
        dataproduct: [],
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
        axios.get('http://localhost:8000/dataproduct')
        .then(
                (ambilData) =>  {
                                    this.setState(
                                    {
                                        dataproduct: ambilData.data
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

    hapusproduct = (productID) =>
    {
        axios.post('http://localhost:8000/hapusproduct',
        {
            id: productID
        });
        window.location.reload();
    }

    render() 
    {
        if (cookies.get('sessionID') === undefined)
        {
            return <Redirect to = '/' />;
        }

        const hasil = this.state.dataproduct.map(
           (isi, urutan) => {
                    var urut = urutan + 1;
                    var productID = isi.id;
                    var merk = isi.merk;
                    var model = isi.model;
                    var variant = isi.variant;
                    var prodyear = isi.prodyear;
                    var bodytype = isi.body_type;
                    var transmission = isi.transmission;
                    var colour = isi.colour;
                    var cityordistrict = isi.cityordistrict;
                    var conditioncar =isi.conditioncar;
                    var price = isi.price_Rp;

                    //console.log(merkID)
 
                    return  <tr key={urutan} nilai={productID}>
                                <td>{urut}</td>
                                <td>{merk}</td>
                                <td>{model}</td>
                                <td>{variant}</td>
                                <td>{prodyear}</td>
                                <td>{bodytype}</td>
                                <td>{transmission}</td>
                                <td>{colour}</td>
                                <td>{cityordistrict}</td>
                                <td>{conditioncar}</td>
                                <td>{price}</td>
                                <td>
                                    <Link to={{ pathname: '/product_saved_edit', state: {productID}}} className="btn btn-warning btn md"><i className="fa fa-pencil"></i> Edit </Link> &nbsp00;
                                    {/* <button className="btn btn-warning btn md btnEdit"><i className="fa fa-pencil"></i> Edit </button> &nbsp; */}
                                    <button className="btn btn-danger btn md" onClick={() => this.hapusproduct(productID)}><i className="fa fa-trash"></i> Delete </button>
                                </td>
                            </tr>
                });

        return (
                <div>
                    <Header />
                    <SideBar />

                    <div className="content-wrapper">
                        <section className="content-header">
                            <ol className="breadcrumb">
                                <li><Link to="/dashboard"><i className="fa fa-dashboard"></i>Home</Link></li>
                                <li><a href="#">Data of Product</a></li>
                                <li className="active">Product List</li>
                            </ol>
                            <br /><br />
                            <h1>Product List</h1>
                        </section>

                        <section className="content">
                            <div className="row">
                                {/* Product */}
                                <div className="col-md-12">
                                    <div className="box-body">
                                        <table id="example1" className="table table-bordered table-striped myTable">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Brand</th>
                                                    <th>Model</th>
                                                    <th>Variant</th>
                                                    <th>Prod. Year</th>
                                                    <th>Body Type</th>
                                                    <th>Transmission</th>
                                                    <th>Colour</th>
                                                    <th>Region</th>
                                                    <th>Condition</th>
                                                    <th>Price (Rp)</th>
                                                    <th>Edit/Delete</th>
                                                </tr>
                                            </thead>
                                            
                                            <tbody>
                                               {hasil}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* <div className="col-md-4 col-md-offset-1">
                                    
                                    <p className="margin">Add Brand</p>

                                    <div className="input-group">
                                        <div className="input-group-btn">
                                            <button type="button" onClick={() => this.tambahmerk(this.refs)} className="btn btn-primary">Add</button>
                                        </div>
                                            
                                        <input type="text" ref="newmerk" className="form-control" />
                                    </div>
                                    <br />
                                    <br />
                                    
                                    
                                    <p className="margin">Edit Brand</p>

                                    <div className="input-group">
                                        <div className="input-group-btn">
                                            <button type="button" onClick={() => this.editmerk(this.refs)} className="btn btn-warning">Edit</button>
                                        </div>
                                            
                                        <input type="text" ref="editmerk" defaultValue={this.state.namamerk} onChange={this.componentWillMount} className="form-control" />
                                        <input type="hidden" ref="ideditmerk" defaultValue={this.state.idmerk} onChange={this.componentWillMount} className="form-control" />
                                    </div>
                                </div> */}
                            </div>
                        </section>
                    </div> 

                    <Footer />
                </div>
                )
    }
}

export default ProductSaved;
