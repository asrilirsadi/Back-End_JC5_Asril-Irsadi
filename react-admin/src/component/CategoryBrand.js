import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import $ from 'jquery';

import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';

const cookies = new Cookies();

class CategoryMerk extends Component 
{
    state = 
    {
        datamerk: [],
        namamerk: '',
        idmerk: ''
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
    componentWillMount = () =>
    {
        var self = this;
        $(document).ready(() => {
            // code to read selected table row cell data (values).
            $(".myTable").on('click','.btnEdit', function() 
            {
                 // get the current row
                 var currentRow = $(this).closest("tr"); 
                 var col1 = currentRow.attr('nilai'); // get current row 1st table cell TD value
                 var col2 = currentRow.find("td:eq(1)").text(); // get current row 2nd table cell TD value
                 
                //  console.log(col1);
                // console.log(col1);

                self.setState({
                                idmerk: col1,
                                namamerk: col2
                            })
            });
        });
    }
    tambahmerk = (addmerkname) =>
    {
        var newmerk = addmerkname.newmerk.value;

        axios.post('http://localhost:8000/tambahmerk',
        {
            newmerk : newmerk
        });
        window.location.reload();
    }
    editmerk = (editdatamerk) =>
    {
        var updatemerk = editdatamerk.editmerk.value;
        var idmerk = editdatamerk.ideditmerk.value;

        axios.post('http://localhost:8000/ubahmerk',
        {
            idmerk : idmerk,
            updatemerk : updatemerk,
        });
        window.location.reload();
    }
    hapusmerk = (merkID) =>
    {
        axios.post('http://localhost:8000/hapusmerk',
        {
            id: merkID
        });
        window.location.reload();
    }

    render() 
    {
        if (cookies.get('sessionID') === undefined)
        {
            return <Redirect to = '/' />;
        }

        const hasil = this.state.datamerk.map(
           (isi, urutan) => {
                    var urut = urutan + 1;
                    var merkID = isi.id;
                    var namamerk = isi.merk;
                    //console.log(merkID)
 
                    return  <tr key={urutan} nilai={merkID}>
                                <td>{urut}</td>
                                <td>{namamerk}</td>
                                <td>
                                    <button className="btn btn-warning btn md btnEdit"><i className="fa fa-pencil"></i> Edit </button> &nbsp;
                                    <button className="btn btn-danger btn md" onClick={() => this.hapusmerk(merkID)}><i className="fa fa-trash"></i> Delete </button>
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
                                <li><a href="#">Category</a></li>
                                <li className="active">Brand</li>
                            </ol>
                            <br /><br />
                            <h1>Car Brand</h1>
                        </section>

                        <section className="content">
                            <div className="row">
                                {/* Merk Mobil */}
                                <div className="col-md-6">
                                    <div className="box-body">
                                        <table id="example1" className="table table-bordered table-striped myTable">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Brand</th>
                                                    <th>Edit/Delete</th>
                                                </tr>
                                            </thead>
                                            
                                            <tbody>
                                               {hasil}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="col-md-4 col-md-offset-1">
                                    {/* add merk */}
                                    <p className="margin">Add Brand</p>

                                    <div className="input-group">
                                        <div className="input-group-btn">
                                            <button type="button" onClick={() => this.tambahmerk(this.refs)} className="btn btn-primary">Add</button>
                                        </div>
                                            
                                        <input type="text" ref="newmerk" className="form-control" />
                                    </div>
                                    <br />
                                    <br />
                                    {/* edit merk */}
                                    <p className="margin">Edit Brand</p>

                                    <div className="input-group">
                                        <div className="input-group-btn">
                                            <button type="button" onClick={() => this.editmerk(this.refs)} className="btn btn-warning">Edit</button>
                                        </div>
                                            
                                        <input type="text" ref="editmerk" defaultValue={this.state.namamerk} onChange={this.componentWillMount} className="form-control" />
                                        <input type="hidden" ref="ideditmerk" defaultValue={this.state.idmerk} onChange={this.componentWillMount} className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div> 

                    <Footer />
                </div>
                )
    }
}

export default CategoryMerk;
