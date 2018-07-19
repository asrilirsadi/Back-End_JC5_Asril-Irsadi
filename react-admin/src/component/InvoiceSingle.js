import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class InvoiceSingle extends Component 
{
    render() 
    {
        return (
                <div>
                    <div className="content-wrapper">
                        <section className="content-header">
                            <h1>
                            Invoice
                            <small>INV00001</small>
                            </h1>
                            <ol className="breadcrumb">
                            <li><Link to="/"><i className="fa fa-dashboard" /> Home</Link></li>
                            <li><Link to="/invoice_customer">Invoice Customer</Link></li>
                            <li className="active">Detail INV00001</li>
                            </ol>
                        </section>

                        <div className="pad margin no-print">
                            <div className="callout callout-info" style={{marginBottom: '0!important'}}>
                            <h4><i className="fa fa-info" /> Note:</h4>
                            This page has been enhanced for printing. Click the print button at the bottom of the invoice to test.
                            </div>
                        </div>
                        
                        <section className="invoice">    
                            <div className="row">
                            <div className="col-xs-12">
                                <h2 className="page-header">
                                <i className="fa fa-globe" /> Admin Auto Shop.
                                <small className="pull-right">Date: 2/10/2014</small>
                                </h2>
                            </div>
                            </div>
                        
                            <div className="row invoice-info">
                            <div className="col-sm-4 invoice-col">
                                From
                                <address>
                                <strong>Admin Auto Shop</strong><br />
                                Taman Cikunir Indah, E2/13<br />
                                Kota Bekasi, 17146<br />
                                Phone: 081 384 99 66 33<br />
                                Email: irsadi.asril@gmail.com
                                </address>
                            </div>
                            
                            <div className="col-sm-4 invoice-col">
                                To
                                <address>
                                <strong>Andy John</strong><br />
                                Taman Malaka, T4/11<br />
                                Jakarta Timur, 16140<br />
                                Phone: 0856 8686 6751<br />
                                Email: andyjohn@gmail.com
                                </address>
                            </div>
                            
                            <div className="col-sm-4 invoice-col">
                                <b>Invoice INV00001</b><br />
                                <br />
                                <b>Order ID:</b> ORD18E05R120001<br />
                                <b>Payment Due:</b> 12/05/2014<br />
                                <b>Account:</b> 968-34567
                            </div>
                            
                            </div>
                            
                            <div className="row">
                            <div className="col-xs-12 table-responsive">
                                <table className="table table-striped">
                                <thead>
                                    <tr>
                                    <th>Qty</th>
                                    <th>ProdUk</th>
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
                                    <td>Rp</td>
                                    <td style={{textAlign: 'right'}}>260.000.000</td>
                                    </tr>
                                    <tr>
                                    <td>1</td>
                                    <td>Muffler Racing</td>
                                    <td>247-925-726</td>
                                    <td>Knalpot Racing - Spoon Muffler </td>
                                    <td>Rp</td>
                                    <td style={{textAlign: 'right'}}>935.000</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            
                            </div>
                            
                            <div className="row">
                            
                            <div className="col-xs-6">
                                <p className="lead">Payment Methods:</p>
                                <img src="../../dist/img/credit/visa.png" alt="Visa" />
                                <img src="../../dist/img/credit/mastercard.png" alt="Mastercard" />
                                <img src="../../dist/img/credit/american-express.png" alt="American Express" />
                                <img src="../../dist/img/credit/paypal2.png" alt="Paypal" />
                                <p className="text-muted well well-sm no-shadow" style={{marginTop: 10}}>
                                Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg
                                dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.
                                </p>
                            </div>
                            
                            <div className="col-xs-6">
                                <p className="lead">Amount Due 12/05/2018</p>
                                <div className="table-responsive">
                                <table className="table">
                                    <tbody><tr>
                                        <th style={{width: '50%'}}>Subtotal:</th>
                                        <td>Rp</td>
                                        <td style={{textAlign: 'right'}}>260.935.000</td>
                                    </tr>
                                    <tr>
                                        <th>Disc (10%)</th>
                                        <td>Rp</td>
                                        <td style={{textAlign: 'right'}}>26.093.500</td>
                                    </tr>
                                    <tr>
                                        <th>Shipping:</th>
                                        <td>Rp</td>
                                        <td style={{textAlign: 'right'}}>1.000.000</td>
                                    </tr>
                                    <tr>
                                        <th>Total:</th>
                                        <td>Rp</td>
                                        <td style={{textAlign: 'right'}}>235.841.500</td>
                                    </tr>
                                    </tbody></table>
                                </div>
                            </div>
                            
                            </div>
                            
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
                        
                        <div className="clearfix" />
                    </div>
                </div>    
                );
    }
}

export default InvoiceSingle;