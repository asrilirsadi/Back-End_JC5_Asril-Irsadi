import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import $ from 'jquery';

import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';

const cookies = new Cookies();

class CategoryProvince extends Component 
{
    state = 
    {
        dataprovince: [],
        namaprovince: '',
        idprovince: ''
    }
    componentDidMount()
    {
        axios.get('http://localhost:8000/dataprovince')
        .then(
                (ambilData) =>  {
                                    this.setState(
                                    {
                                        dataprovince: ambilData.data
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
                                idprovince: col1,
                                namaprovince: col2
                            })
            });
        });
    }
    tambahprovince = (addprovincename) =>
    {
        var newprovince = addprovincename.newprovince.value;

        axios.post('http://localhost:8000/tambahprovince',
        {
            newprovince : newprovince
        });
        window.location.reload();
    }
    editprovince = (editdataprovince) =>
    {
        var updateprovince = editdataprovince.editprovince.value;
        var idprovince = editdataprovince.ideditprovince.value;

        axios.post('http://localhost:8000/ubahprovince',
        {
            idprovince : idprovince,
            updateprovince : updateprovince,
        });
        window.location.reload();
    }
    hapusprovince = (provinceID) =>
    {
        axios.post('http://localhost:8000/hapusprovince',
        {
            id: provinceID
        });
        window.location.reload();
    }

    render() 
    {
        if (cookies.get('sessionID') === undefined)
        {
            return <Redirect to = '/' />;
        }

        const hasil = this.state.dataprovince.map(
           (isi, urutan) => {
                    var urut = urutan + 1;
                    var provinceID = isi.id;
                    var namaprovince = isi.province;
                    //console.log(provinceID)
 
                    return  <tr key={urutan} nilai={provinceID}>
                                <td>{urut}</td>
                                <td>{namaprovince}</td>
                                <td>
                                    <button className="btn btn-warning btn md btnEdit"><i className="fa fa-pencil"></i> Edit </button> &nbsp;
                                    <button className="btn btn-danger btn md" onClick={() => this.hapusprovince(provinceID)}><i className="fa fa-trash"></i> Delete </button>
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
                                <li className="active">Province</li>
                            </ol>
                            <br /><br />
                            <h1>Province</h1>
                        </section>

                        <section className="content">
                            <div className="row">
                                {/* province Mobil */}
                                <div className="col-md-6">
                                    <div className="box-body">
                                        <table id="example1" className="table table-bordered table-striped myTable">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Province</th>
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
                                    {/* add province */}
                                    <p className="margin">Add Province</p>

                                    <div className="input-group">
                                        <div className="input-group-btn">
                                            <button type="button" onClick={() => this.tambahprovince(this.refs)} className="btn btn-primary">Add</button>
                                        </div>
                                            
                                        <input type="text" ref="newprovince" className="form-control" />
                                    </div>
                                    <br />
                                    <br />
                                    {/* edit province */}
                                    <p className="margin">Edit Province</p>

                                    <div className="input-group">
                                        <div className="input-group-btn">
                                            <button type="button" onClick={() => this.editprovince(this.refs)} className="btn btn-warning">Edit</button>
                                        </div>
                                            
                                        <input type="text" ref="editprovince" defaultValue={this.state.namaprovince} onChange={this.componentWillMount} className="form-control" />
                                        <input type="hidden" ref="ideditprovince" defaultValue={this.state.idprovince} onChange={this.componentWillMount} className="form-control" />
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

export default CategoryProvince;
