import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class InvoiceCustomer extends Component 
{
    render() 
    {
        return (
                <div>
                    <div className="content-wrapper">
                        {/* Content Header (Page header) */}
                        <section className="content-header">
                            <h1>
                            Invoice Customer
                            </h1>
                            <ol className="breadcrumb">
                            <li><Link to="/"><i className="fa fa-dashboard" /> Home</Link></li>
                            <li className="active"><a href="#">Invoice Customer</a></li>
                            </ol>
                        </section>
                        {/* Main content */}
                        <section className="content">
                            <div className="row">
                            <div className="col-xs-12">
                                <div className="box">
                                <div className="box-header">
                                    <h3 className="box-title">Data Table With Full Features</h3>
                                </div>
                                {/* /.box-header */}
                                <div className="box-body">
                                    <table id="example1" className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                        <th>Tanggal</th>  
                                        <th>No. Invoice</th>
                                        <th>Order ID</th>
                                        <th>Total Tagihan</th>
                                        <th>Detail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>12/05/2018</td>  
                                        <td>INV00001</td>
                                        <td>ORD18E05R120001</td>
                                        {/* <td>Andy</td>
                                        <td>Taman Malaka Blok T4 No.11, RT 10/RW 11, Kel. Malaka Jaya, Kec. Duren Sawit, Jakarta Timur</td>
                                        <td>0856 8686 6751</td>
                                        <td>andijaya@gmail.com</td>
                                        <td>Mitsubhisi Xpander Ultimate A/T 2018 Putih</td>
                                        <td>Rp 257.600.000</td>
                                        <td>Rp 500.000</td>
                                        <td>10 %</td> */}
                                        <td>Rp 232.290.000</td>
                                        <td>
                                            <div className="btn-group">
                                                <Link to="/invoice_single_page"><button type="button" className="btn btn-block btn-success">Lihat Detail</button></Link>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>15/05/2018</td>  
                                        <td>INV00002</td>
                                        <td>ORD18E05R150001</td>
                                        {/* <td>Beni</td>
                                        <td>Kelapa Gading Blok A10 No.24, RT 01/RW 03, Kel. Kelapa Gading, Kec. Kelapa Gading, Jakarta Utara</td>
                                        <td>0821 9567 012</td>
                                        <td>beni02@gmail.com</td>
                                        <td>Toyota Yaris TRD Sportivo CVT 2018 Citrus</td>
                                        <td>Rp 275.900.000</td>
                                        <td>Rp 300.000</td>
                                        <td>10 %</td> */}
                                        <td>Rp 248.580.000</td>
                                        <td>
                                            <div className="btn-group">
                                                <Link to="/invoice_single_page"><button type="button" className="btn btn-block btn-success">Lihat Detail</button></Link>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>22/05/2018</td>  
                                        <td>INV00003</td>
                                        <td>ORD18E05R220001</td>
                                        {/* <td>Cindy</td>
                                        <td>Bintara II Blok D8 No.09, RT 03/RW 10, Kel. Bintara Jaya, Kec. Bekasi Barat, Kota Bekasi</td>
                                        <td>081 59 26 26 26</td>
                                        <td>cindycin@gmail.com</td>
                                        <td>Honda CR-V 1.5L Prestige Turbo CVT 2018 Silver</td>
                                        <td>Rp 511.000.000</td>
                                        <td>Rp 900.000</td>
                                        <td>10 %</td> */}
                                        <td>Rp 460.710.000</td>
                                        <td>
                                            <div className="btn-group">
                                                <Link to="/invoice_single_page"><button type="button" className="btn btn-block btn-success">Lihat Detail</button></Link>
                                            </div>
                                        </td>
                                        </tr>
                                    </tbody>
                                    {/* <tfoot>
                                    <tr>
                                    <th>Rendering engine</th>
                                    <th>Browser</th>
                                    <th>Platform(s)</th>
                                    <th>Engine version</th>
                                    <th>CSS grade</th>
                                    </tr>
                                    </tfoot> */}
                                    </table>
                                </div>
                                {/* /.box-body */}
                                </div>
                                {/* /.box */}
                            </div>
                            {/* /.col */}
                            </div>
                            {/* /.row */}
                        </section>
                        {/* /.content */}
                    </div>
                </div>    
                );
    }
}

export default InvoiceCustomer;