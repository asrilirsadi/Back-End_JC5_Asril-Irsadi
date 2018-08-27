import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import $ from 'jquery';

import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';

const cookies = new Cookies();

class CategoryBodyType extends Component 
{
    state = 
    {
        databodytype: [],
        namabodytype: '',
        idbodytype: ''
    }
    componentDidMount()
    {
        axios.get('http://localhost:8000/databodytype')
        .then(
                (ambilData) =>  {
                                    this.setState(
                                    {
                                        databodytype: ambilData.data
                                    });
                                    //console.log(ambilData.data);
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
                                idbodytype: col1,
                                namabodytype: col2
                            })
            });
        });
    }
    tambahbodytype = (addbodytypename) =>
    {
        var newbodytype = addbodytypename.newbodytype.value;

        axios.post('http://localhost:8000/tambahbodytype',
        {
            newbodytype : newbodytype
        });
        window.location.reload();
    }
    editbodytype = (editdatabodytype) =>
    {
        var updatebodytype = editdatabodytype.editbodytype.value;
        var idbodytype = editdatabodytype.ideditbodytype.value;

        axios.post('http://localhost:8000/ubahbodytype',
        {
            idbodytype : idbodytype,
            updatebodytype : updatebodytype,
        });
        window.location.reload();
    }
    hapusbodytype = (bodytypeID) =>
    {
        axios.post('http://localhost:8000/hapusbodytype',
        {
            id: bodytypeID
        });
        window.location.reload();
    }

    render() 
    {
        if (cookies.get('sessionID') === undefined)
        {
            return <Redirect to = '/' />;
        }

        const hasil = this.state.databodytype.map(
           (isi, urutan) => {
                    var urut = urutan + 1;
                    var bodytypeID = isi.id;
                    var namabodytype = isi.body_type;
                    // console.log(bodytypeID)
                    // console.log(namabodytype)
 
                    return  <tr key={urutan} nilai={bodytypeID}>
                                <td>{urut}</td>
                                <td>{namabodytype}</td>
                                <td>
                                    <button className="btn btn-warning btn md btnEdit"><i className="fa fa-pencil"></i> Edit </button> &nbsp;
                                    <button className="btn btn-danger btn md" onClick={() => this.hapusbodytype(bodytypeID)}><i className="fa fa-trash"></i> Delete </button>
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
                                <li className="active">bodytype</li>
                            </ol>
                            <br /><br />
                            <h1>Car Body Type</h1>
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
                                                    <th>Body Type</th>
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
                                    <p className="margin">Add Body Type</p>

                                    <div className="input-group">
                                        <div className="input-group-btn">
                                            <button type="button" onClick={() => this.tambahbodytype(this.refs)} className="btn btn-primary">Add</button>
                                        </div>
                                            
                                        <input type="text" ref="newbodytype" className="form-control" />
                                    </div>
                                    <br />
                                    <br />
                                    {/* edit merk */}
                                    <p className="margin">Edit Body Type</p>

                                    <div className="input-group">
                                        <div className="input-group-btn">
                                            <button type="button" onClick={() => this.editbodytype(this.refs)} className="btn btn-warning">Edit</button>
                                        </div>
                                            
                                        <input type="text" ref="editbodytype" defaultValue={this.state.namabodytype} onChange={this.componentWillMount} className="form-control" />
                                        <input type="hidden" ref="ideditbodytype" defaultValue={this.state.idbodytype} onChange={this.componentWillMount} className="form-control" />
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

export default CategoryBodyType;
