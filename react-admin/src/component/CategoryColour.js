import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import $ from 'jquery';

import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';

const cookies = new Cookies();

class CategoryColour extends Component 
{
    state = 
    {
        datacolour: [],
        namacolour: '',
        idcolour: ''
    }
    componentDidMount()
    {
        axios.get('http://localhost:8000/datacolour')
        .then(
                (ambilData) =>  {
                                    this.setState(
                                    {
                                        datacolour: ambilData.data
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
                                idcolour: col1,
                                namacolour: col2
                            })
            });
        });
    }
    tambahcolour = (addcolourname) =>
    {
        var newcolour = addcolourname.newcolour.value;

        axios.post('http://localhost:8000/tambahcolour',
        {
            newcolour : newcolour
        });
        window.location.reload();
    }
    editcolour = (editdatacolour) =>
    {
        var updatecolour = editdatacolour.editcolour.value;
        var idcolour = editdatacolour.ideditcolour.value;

        axios.post('http://localhost:8000/ubahcolour',
        {
            idcolour : idcolour,
            updatecolour : updatecolour,
        });
        window.location.reload();
    }
    hapuscolour = (colourID) =>
    {
        axios.post('http://localhost:8000/hapuscolour',
        {
            id: colourID
        });
        window.location.reload();
    }

    render() 
    {
        if (cookies.get('sessionID') === undefined)
        {
            return <Redirect to = '/' />;
        }

        const hasil = this.state.datacolour.map(
           (isi, urutan) => {
                    var urut = urutan + 1;
                    var colourID = isi.id;
                    var namacolour = isi.colour;
                    //console.log(colourID)
 
                    return  <tr key={urutan} nilai={colourID}>
                                <td>{urut}</td>
                                <td>{namacolour}</td>
                                <td>
                                    <button className="btn btn-warning btn md btnEdit"><i className="fa fa-pencil"></i> Edit </button> &nbsp;
                                    <button className="btn btn-danger btn md" onClick={() => this.hapuscolour(colourID)}><i className="fa fa-trash"></i> Delete </button>
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
                                <li className="active">Colour</li>
                            </ol>
                            <br /><br />
                            <h1>Car Colour</h1>
                        </section>

                        <section className="content">
                            <div className="row">
                                {/* colour Mobil */}
                                <div className="col-md-6">
                                    <div className="box-body">
                                        <table id="example1" className="table table-bordered table-striped myTable">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Colour</th>
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
                                    {/* add colour */}
                                    <p className="margin">Add Colour</p>

                                    <div className="input-group">
                                        <div className="input-group-btn">
                                            <button type="button" onClick={() => this.tambahcolour(this.refs)} className="btn btn-primary">Add</button>
                                        </div>
                                            
                                        <input type="text" ref="newcolour" className="form-control" />
                                    </div>
                                    <br />
                                    <br />
                                    {/* edit colour */}
                                    <p className="margin">Edit Colour</p>

                                    <div className="input-group">
                                        <div className="input-group-btn">
                                            <button type="button" onClick={() => this.editcolour(this.refs)} className="btn btn-warning">Edit</button>
                                        </div>
                                            
                                        <input type="text" ref="editcolour" defaultValue={this.state.namacolour} onChange={this.componentWillMount} className="form-control" />
                                        <input type="hidden" ref="ideditcolour" defaultValue={this.state.idcolour} onChange={this.componentWillMount} className="form-control" />
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

export default CategoryColour;
