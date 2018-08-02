import React, { Component } from 'react';

import {Link} from 'react-router-dom'; 

class DetailInvoice extends Component 
{
    render() 
    {
        return (
                <div>
                    <div className="banner1">
                        <div className="container">
                            <h3><Link to="/">Home</Link> / <span>Detail Invoice</span></h3>
                        </div>
                    </div>

                    <div className="content">
                        {/* Content Wrapper. Contains page content */}
                        <div className="content-wrapper">
                            {/* Content Header (Page header) */}
                            <section className="content-header">
                            <h1>
                                Invoice
                                <small>#INV00010</small>
                            </h1>
                            </section>
                            <div className="pad margin no-print">
                            <div className="callout callout-info" style={{marginBottom: '0!important'}}>
                                <h4><i className="fa fa-info" /> Note:</h4>
                                This page has been enhanced for printing. Click the print button at the bottom of the invoice to test.
                            </div>
                            </div>
                            {/* Main content */}
                            <section className="invoice">
                            {/* title row */}
                            <div className="row">
                                <div className="col-xs-12">
                                <h2 className="page-header">
                                    <i className="fa fa-globe" /> Auto Shop, Inc.
                                    <small className="pull-right">Date: 25/5/2018</small>
                                </h2>
                                </div>
                                {/* /.col */}
                            </div>
                            {/* info row */}
                            <div className="row invoice-info">
                                <div className="col-sm-4 invoice-col">
                                From
                                <address>
                                    <strong>Admin Auto Shop, Inc.</strong><br />
                                    Taman Cikunir Indah, E2/13<br />
                                    Bekasi Selatan, Bekasi 17146<br />
                                    Phone: 081 384 99 66 33<br />
                                    Email: irsadi.asril@gmail.com
                                </address>
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4 invoice-col">
                                To
                                <address>
                                    <strong>Roy</strong><br />
                                    Kemang, C10/17<br />
                                    Kebayoran Baru, Jakarta Selatan 151623<br />
                                    Phone: 0856 539 1037<br />
                                    Email: roy11@gmail.com
                                </address>
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4 invoice-col">
                                <b>Invoice #INV00010</b><br />
                                <br />
                                <b>Order ID:</b> 4F3S8J<br />
                                <b>Payment Due:</b> 27/5/2018<br />
                                <b>Account:</b> 968-34567
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                            {/* Table row */}
                            <div className="row">
                                <div className="col-xs-12 table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>Qty</th>
                                        <th>Produk</th>
                                        <th>Serial #</th>
                                        <th>Description</th>
                                        <th>Subtotal</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Honda CR-V</td>
                                        <td>455-981-221</td>
                                        <td>Honda CR-V 2.4L 2013 Putih (Bekas)</td>
                                        <td>Rp 260.000.000</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Muffler Racing</td>
                                        <td>247-925-726</td>
                                        <td>Knalpot Racing - Spoon Muffler </td>
                                        <td>Rp     935.000</td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                            <div className="row">
                                {/* accepted payments column */}
                                <div className="col-xs-6">
                                <p className="lead">Payment Methods:</p>
                                <img src="./../images/visa.png" alt="Visa" />
                                <img src="./../images/mastercard.png" alt="Mastercard" />
                                <img src="./../images/american-express.png" alt="American Express" />
                                <img src="./../images/paypal.png" alt="Paypal" />
                                <p className="text-muted well well-sm no-shadow" style={{marginTop: 10}}>
                                    Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg
                                    dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.
                                </p>
                                </div>
                                {/* /.col */}
                                <div className="col-xs-6">
                                <p className="lead">Amount Due 27/5/2018</p>
                                <div className="table-responsive">
                                    <table className="table">
                                    <tbody><tr>
                                        <th style={{width: '50%'}}>Subtotal:</th>
                                        <td>Rp 260.000.000</td>
                                        </tr>
                                        <tr>
                                        <th>Discount (10%)</th>
                                        <td>Rp  26.000.000</td>
                                        </tr>
                                        <tr>
                                        <th>Ongkir:</th>
                                        <td>Rp   2.300.000</td>
                                        </tr>
                                        <tr>
                                        <th>Total:</th>
                                        <td>Rp 236.300.000</td>
                                        </tr>
                                    </tbody></table>
                                </div>
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                            {/* this row will not appear when printing */}
                            <div className="row no-print">
                                <div className="col-xs-12">
                                <a href="invoice-print.html" target="_blank" className="btn btn-default"><i className="fa fa-print" /> Print</a>
                                <button type="button" className="btn btn-success pull-right"><i className="fa fa-credit-card" /> Submit Payment
                                </button>
                                <button type="button" className="btn btn-primary pull-right" style={{marginRight: 5}}>
                                    <i className="fa fa-download" /> Generate PDF
                                </button>
                                </div>
                            </div>
                            </section>
                            {/* /.content */}
                            <div className="clearfix" />
                        </div>
                        {/* /.content-wrapper */}
                    </div>
                </div>
                );
    }
}

export default DetailInvoice;