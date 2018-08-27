import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import $ from 'jquery';

import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';

const cookies = new Cookies();

class CategoryModel extends Component 
{
    state = 
    {
        datamerk: [],
        datamodel: [],
        namamodel:'',
        namamerk: '',
        merkdipilih:'- - - - Car Brand - - - -',
        merkiddipilih:'',
        idmerk:'',
        idmodel:'',
        valueoptiondefault:0,
    }
    componentDidMount()
    {
        axios.get('http://localhost:8000/datamerk')
        .then((ambilData) =>  {
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
                 
                console.log(col1);

                self.setState({
                                idmodel: col1,
                                namamodel: col2
                            })
                
            });

        });
    }

    selectmerk = (e) =>
    {
        //console.log(e.target.value);
        var merkID = e.target.value;
        
        axios.post('http://localhost:8000/datamodelselect',
        {
            merkID: merkID,
        }).then((response) =>
        {
            this.setState(
                {
                    datamodel: response.data
                })
        });

        if(merkID != 0)
        {
            axios.post('http://localhost:8000/datamerkdipilih',
            {
                merkID: merkID,
            }).then((res) =>
            {
                // console.log(res.data[0].id);
                // console.log(res.data[0].merk);
                this.setState(
                    {
                        merkiddipilih: res.data[0].id,
                        merkdipilih: res.data[0].merk
                    })
            });
        }
        else
        {
            this.setState(
                {
                    merkdipilih: '- - - - Car Brand - - - -'
                })
        }
    }

    tambahmodel = (addmodelname) =>
    {
        var idmerkdipilih = this.state.merkiddipilih;
        var newmodel = addmodelname.newmodel.value;
        
        axios.post('http://localhost:8000/tambahmodel',
        {
            newmodel : newmodel,
            idmerkdipilih: idmerkdipilih
        })
        window.location.reload();
    }
    editmodel = (editdatamodel) =>
    {
        var updatemodel = editdatamodel.editmodel.value;
        var idmodel = editdatamodel.ideditmodel.value;
        // console.log(idmodel);
        // console.log(updatemodel);

        axios.post('http://localhost:8000/ubahmodel',
        {
            idmodel : idmodel,
            updatemodel : updatemodel,
        });
        window.location.reload();
    }
    hapusDataModel = (e) =>
    {
        axios.post('http://localhost:8000/hapusmodel',
        {
            id: e
        });
        window.location.reload();
    }

    render() 
    {
        if (cookies.get('sessionID') === undefined)
        {
            return <Redirect to = '/' />;
        }

        const hasilmerk = this.state.datamerk.map(
            (isimerk,urutan) =>
            {
                //var urut = urutan +1;
                var merkID = isimerk.id;
                var namamerk = isimerk.merk;

                return <option key={urutan} value={merkID}> {namamerk} </option>
            });

        const hasilmodel = this.state.datamodel.map(
            (isi, urutan) => 
            {
                var urut = urutan + 1;
                var modelID = isi.id;
                var namamodel = isi.model;
                //console.log(modelID);

                return  <tr key={urutan} nilai={modelID}>
                            <td >{urut}</td>
                            <td>{namamodel}</td>
                            <td>
                            <button className="btn btn-warning btn md btnEdit"><i className="fa fa-pencil"></i> Edit </button> &nbsp;
                                {/* <Link to= {{ pathname: '/editdata/', state: {modelID: modelID}}} className="btn btn-warning btn md"><i className="fa fa-pencil"></i> Edit </Link> &nbsp; */}
                                <button className="btn btn-danger btn md" onClick={() => this.hapusDataModel(modelID)}><i className="fa fa-trash"></i> Delete </button>
                            </td>
                        </tr>
            });

        return (
                <div>
                    <Header />
                    <SideBar />

                    <div className="content-wrapper">
                        <section className="content-header">
                            <h1>Car Model</h1>
                            
                            <ol className="breadcrumb">
                                <li><Link to="/dashboard"><i className="fa fa-dashboard"></i>Home</Link></li>
                                <li><a href="#">Category</a></li>
                                <li className="active">Car Model</li>
                            </ol>
                        </section>

                        <section className="content">
                            <div className="row">
                                {/* Merk Mobil */}
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Please Choose Car Brand</label>
                                        <select className="form-control" id="selectmerk" onChange={this.selectmerk}>
                                            <option value= {this.state.valueoptiondefault} >- - - - Car Brand - - - -</option>
                                            { hasilmerk }
                                        </select>
                                    </div>

                                    <div className="box-body">
                                        <table id="example1" className="table table-bordered table-striped myTable">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Model</th>
                                                    <th>Edit/Delete</th>
                                                </tr>
                                            </thead>
                                            
                                            <tbody>
                                               {hasilmodel}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="col-md-4 col-md-offset-1">
                                    
                                    <div className="form-group">
                                        <input type="text" class="form-control" placeholder={this.state.merkdipilih} disabled></input>
                                    </div>
                                    
                                    {/* add model */}
                                    <h4 className="margin">Add Model</h4>
                                    <div className="input-group">
                                        <div className="input-group-btn">
                                            <button type="button" onClick={() => this.tambahmodel(this.refs)} className="btn btn-primary">Add</button>
                                        </div>
                                            
                                        <input type="text" ref="newmodel" className="form-control" />
                                    </div>
                                    
                                    <br />
                                    {/* edit model */}
                                    <h4 className="margin">Edit Model</h4>
                                    <div className="input-group">
                                        <div className="input-group-btn">
                                            <button type="button" onClick={() => this.editmodel(this.refs)} className="btn btn-warning">Edit</button>
                                        </div>
                                            
                                        <input type="text" ref="editmodel" defaultValue={this.state.namamodel} onChange={this.componentWillMount} className="form-control" />
                                        <input type="hidden" ref="ideditmodel" defaultValue={this.state.idmodel} onChange={this.componentWillMount} className="form-control" />
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

export default CategoryModel;
