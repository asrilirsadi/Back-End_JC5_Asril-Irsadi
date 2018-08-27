import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import $ from 'jquery';

import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';

const cookies = new Cookies();

class CategoryVariant extends Component 
{
    state = 
    {
        datavariant: [],
        namavariant: '',
        idvariant: ''
    }
    componentDidMount()
    {
        axios.get('http://localhost:8000/datavariant')
        .then(
                (ambilData) =>  {
                                    this.setState(
                                    {
                                        datavariant: ambilData.data
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
                                idvariant: col1,
                                namavariant: col2
                            })
            });
        });
    }
    tambahvariant = (addvariantname) =>
    {
        var newvariant = addvariantname.newvariant.value;

        axios.post('http://localhost:8000/tambahvariant',
        {
            newvariant : newvariant
        });
        window.location.reload();
    }
    editvariant = (editdatavariant) =>
    {
        var updatevariant = editdatavariant.editvariant.value;
        var idvariant = editdatavariant.ideditvariant.value;

        axios.post('http://localhost:8000/ubahvariant',
        {
            idvariant : idvariant,
            updatevariant : updatevariant,
        });
        window.location.reload();
    }
    hapusvariant = (variantID) =>
    {
        axios.post('http://localhost:8000/hapusvariant',
        {
            id: variantID
        });
        window.location.reload();
    }

    render() 
    {
        if (cookies.get('sessionID') === undefined)
        {
            return <Redirect to = '/' />;
        }

        const hasil = this.state.datavariant.map(
           (isi, urutan) => {
                    var urut = urutan + 1;
                    var variantID = isi.id;
                    var namavariant = isi.variant;
                    //console.log(variantID)
 
                    return  <tr key={urutan} nilai={variantID}>
                                <td>{urut}</td>
                                <td>{namavariant}</td>
                                <td>
                                    <button className="btn btn-warning btn md btnEdit"><i className="fa fa-pencil"></i> Edit </button> &nbsp;
                                    <button className="btn btn-danger btn md" onClick={() => this.hapusvariant(variantID)}><i className="fa fa-trash"></i> Delete </button>
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
                                <li className="active">Variant</li>
                            </ol>
                            <br /><br />
                            <h1>Car Variant</h1>
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
                                                    <th>Variant</th>
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
                                    <p className="margin">Add Variant</p>

                                    <div className="input-group">
                                        <div className="input-group-btn">
                                            <button type="button" onClick={() => this.tambahvariant(this.refs)} className="btn btn-primary">Add</button>
                                        </div>
                                            
                                        <input type="text" ref="newvariant" className="form-control" />
                                    </div>
                                    <br />
                                    <br />
                                    {/* edit merk */}
                                    <p className="margin">Edit Variant</p>

                                    <div className="input-group">
                                        <div className="input-group-btn">
                                            <button type="button" onClick={() => this.editvariant(this.refs)} className="btn btn-warning">Edit</button>
                                        </div>
                                            
                                        <input type="text" ref="editvariant" defaultValue={this.state.namavariant} onChange={this.componentWillMount} className="form-control" />
                                        <input type="hidden" ref="ideditvariant" defaultValue={this.state.idvariant} onChange={this.componentWillMount} className="form-control" />
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

export default CategoryVariant;
