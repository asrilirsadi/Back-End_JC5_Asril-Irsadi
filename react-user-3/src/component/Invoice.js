import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

import Cookies from 'universal-cookie';

const cookies = new Cookies(); 

class Invoice extends Component 
{
    render() 
    {
        if (cookies.get('sessionID') === undefined)
        {
            return <Redirect to = '/login' />;
        }

        return (
                <div>
                    <div className="banner1">
                        <div className="container">
                            <h3><Link to="/">Home</Link> / <span>Invoice</span></h3>
                        </div>
                    </div>

                    <div className="content">
                        <div className="cart-items">
                            <div className="container">
                                <h2>My Invoice</h2>

                                <section className="content content_content" style={{width: '70%', margin: 'auto'}}>
                                    <section className="invoice">
                                        {/* title row */}
                                        <div className="row">
                                        <div className="col-xs-12">
                                            <h2 className="page-header">
                                            <i className="fa fa-globe" /> Trust point Co.
                                            <small className="pull-right">Date: 2017/01/09</small>
                                            </h2>
                                        </div>{/* /.col */}
                                        </div>
                                        {/* info row */}
                                        <div className="row invoice-info">
                                        <div className="col-sm-4 invoice-col">
                                            From
                                            <address>
                                            <strong>
                                            </strong>
                                            </address>
                                        </div>{/* /.col */}
                                        <div className="col-sm-4 invoice-col">
                                            To
                                            <address>
                                            <strong>
                                                Shahid                                  </strong>
                                            <br />
                                            Address:
                                            Kollanpur                                    <br />
                                            Phone:
                                            123456789                                   <br />
                                            Email:ggggg@gmail.com                              </address>
                                        </div>{/* /.col */}
                                        <div className="col-sm-4 invoice-col">
                                            <b>Invoice #007612</b><br />
                                            <br />
                                            <b>Order ID:</b> 4F3S8J<br />
                                            <b>Payment Due:</b> 2/22/2014<br />
                                            <b>Account:</b> 968-34567
                                        </div>{/* /.col */}
                                        </div>{/* /.row */}
                                        {/* Table row */}
                                        <div className="row">
                                        <div className="col-xs-12 table-responsive">
                                            <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                <th>Qty</th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Sub Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td>2</td>
                                                <td>18</td>
                                                <td>12500</td>
                                                <td>25000</td>
                                                </tr>
                                            </tbody>
                                            </table>
                                        </div>{/* /.col */}
                                        </div>{/* /.row */}
                                        <div className="row">
                                        {/* accepted payments column */}
                                        <div className="col-md-12">
                                            <p className="lead">Amount Due 2/22/2014</p>
                                            <div className="table-responsive">
                                            <table className="table">
                                                <tbody>
                                                <tr>
                                                    <th>Total:</th>
                                                    <td> 50000</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                        </div>{/* /.col */}
                                        </div>{/* /.row */}
                                        {/* this row will not appear when printing */}
                                        <div className="row no-print">
                                        <div className="col-xs-12">
                                            <a href className="btn btn-default"><i className="fa fa-print" /> Print</a>
                                            <button className="btn btn-success pull-right"><i className="fa fa-credit-card" /> Submit Payment</button>
                                            <button className="btn btn-primary pull-right" style={{marginRight: 5}}><i className="fa fa-download" /> Generate PDF</button>
                                        </div>
                                        </div>
                                    </section>
                                
                                </section>

                            </div>
                        </div>	
                    </div>
                </div>
                );
    }
}

export default Invoice;