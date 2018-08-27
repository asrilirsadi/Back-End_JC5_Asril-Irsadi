import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import $ from 'jquery';

import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';

const cookies = new Cookies();

class CategoryCityorDistrict extends Component 
{
    state = 
    {
        dataprovince: [],
        datacityordistrict: [],
        namacityordistrict:'',
        namaprovince: '',
        provincedipilih:'- - - - Province - - - -',
        provinceiddipilih:'',
        idprovince:'',
        idcityordistrict:'',
        valueoptiondefault:0,
    }
    componentDidMount()
    {
        axios.get('http://localhost:8000/dataprovince')
        .then((ambilData) =>  {
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
                 
                console.log(col1);

                self.setState({
                                idcityordistrict: col1,
                                namacityordistrict: col2
                            })
                
            });

        });
    }

    selectprovince = (e) =>
    {
        //console.log(e.target.value);
        var provinceID = e.target.value;
        
        axios.post('http://localhost:8000/datacityordistrictselect',
        {
            provinceID: provinceID,
        }).then((response) =>
        {
            this.setState(
                {
                    datacityordistrict: response.data
                })
        });

        if(provinceID != 0)
        {
            axios.post('http://localhost:8000/dataprovincedipilih',
            {
                provinceID: provinceID,
            }).then((res) =>
            {
                // console.log(res.data[0].id);
                // console.log(res.data[0].province);
                this.setState(
                    {
                        provinceiddipilih: res.data[0].id,
                        provincedipilih: res.data[0].province
                    })
            });
        }
        else
        {
            this.setState(
                {
                    provincedipilih: '- - - - Province - - - -'
                })
        }
    }

    tambahcityordistrict = (addcityordistrictname) =>
    {
        var idprovincedipilih = this.state.provinceiddipilih;
        var newcityordistrict = addcityordistrictname.newcityordistrict.value;
        
        axios.post('http://localhost:8000/tambahcityordistrict',
        {
            newcityordistrict : newcityordistrict,
            idprovincedipilih: idprovincedipilih
        })
        window.location.reload();
    }
    editcityordistrict = (editdatacityordistrict) =>
    {
        var updatecityordistrict = editdatacityordistrict.editcityordistrict.value;
        var idcityordistrict = editdatacityordistrict.ideditcityordistrict.value;
        // console.log(idcityordistrict);
        // console.log(updatecityordistrict);

        axios.post('http://localhost:8000/ubahcityordistrict',
        {
            idcityordistrict : idcityordistrict,
            updatecityordistrict : updatecityordistrict,
        });
        window.location.reload();
    }
    hapusData = (e) =>
    {
        axios.post('http://localhost:8000/hapuscityordistrict',
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

        const hasilprovince = this.state.dataprovince.map(
            (isiprovince,urutan) =>
            {
                //var urut = urutan +1;
                var provinceID = isiprovince.id;
                var namaprovince = isiprovince.province;

                return <option key={urutan} value={provinceID}> {namaprovince} </option>
            });

        const hasilcityordistrict = this.state.datacityordistrict.map(
            (isi, urutan) => 
            {
                var urut = urutan + 1;
                var cityordistrictID = isi.id;
                var namacityordistrict = isi.cityordistrict;
                //console.log(cityordistrictID);

                return  <tr key={urutan} nilai={cityordistrictID}>
                            <td >{urut}</td>
                            <td>{namacityordistrict}</td>
                            <td>
                            <button className="btn btn-warning btn md btnEdit"><i className="fa fa-pencil"></i> Edit </button> &nbsp;
                                {/* <Link to= {{ pathname: '/editdata/', state: {cityordistrictID: cityordistrictID}}} className="btn btn-warning btn md"><i className="fa fa-pencil"></i> Edit </Link> &nbsp; */}
                                <button className="btn btn-danger btn md" onClick={() => this.hapusData(cityordistrictID)}><i className="fa fa-trash"></i> Delete </button>
                            </td>
                        </tr>
            });

        return (
                <div>
                    <Header />
                    <SideBar />

                    <div className="content-wrapper">
                        <section className="content-header">
                            <h1>Car cityordistrict</h1>
                            
                            <ol className="breadcrumb">
                                <li><Link to="/dashboard"><i className="fa fa-dashboard"></i>Home</Link></li>
                                <li><a href="#">Category</a></li>
                                <li className="active">City or District</li>
                            </ol>
                        </section>

                        <section className="content">
                            <div className="row">
                                {/* province Mobil */}
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Please Choose A City or District</label>
                                        <select className="form-control" id="selectprovince" onChange={this.selectprovince}>
                                            <option value= {this.state.valueoptiondefault} >- - - - Province - - - -</option>
                                            { hasilprovince }
                                        </select>
                                    </div>

                                    <div className="box-body">
                                        <table id="example1" className="table table-bordered table-striped myTable">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>City or District</th>
                                                    <th>Edit/Delete</th>
                                                </tr>
                                            </thead>
                                            
                                            <tbody>
                                               {hasilcityordistrict}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="col-md-4 col-md-offset-1">
                                    
                                    <div className="form-group">
                                        <input type="text" class="form-control" placeholder={this.state.provincedipilih} disabled></input>
                                    </div>
                                    
                                    {/* add cityordistrict */}
                                    <h4 className="margin">Add City or District</h4>
                                    <div className="input-group">
                                        <div className="input-group-btn">
                                            <button type="button" onClick={() => this.tambahcityordistrict(this.refs)} className="btn btn-primary">Add</button>
                                        </div>
                                            
                                        <input type="text" ref="newcityordistrict" className="form-control" />
                                    </div>
                                    
                                    <br />
                                    {/* edit cityordistrict */}
                                    <h4 className="margin">Edit City or District</h4>
                                    <div className="input-group">
                                        <div className="input-group-btn">
                                            <button type="button" onClick={() => this.editcityordistrict(this.refs)} className="btn btn-warning">Edit</button>
                                        </div>
                                            
                                        <input type="text" ref="editcityordistrict" defaultValue={this.state.namacityordistrict} onChange={this.componentWillMount} className="form-control" />
                                        <input type="hidden" ref="ideditcityordistrict" defaultValue={this.state.idcityordistrict} onChange={this.componentWillMount} className="form-control" />
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

export default CategoryCityorDistrict;
