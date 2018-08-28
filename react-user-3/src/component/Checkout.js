import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'; 

import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Checkout extends Component 
{
    state =
    {
        redirectInvoice: false,
    }
    checkout = (data) =>
    {
        var userID = cookies.get('sessionID');
        axios.post('http://localhost:8000/checkout',
            {
                userID: userID,
                name: data.name.value,
                address: data.address.value,
                phone: data.phone_number.value,
            })
            .then((response) =>
            {
                var goto = response.data;
                if(goto == 1)
                {
                    this.setState({
                                    redirectInvoice: true
                                })
                }
            })
    }
    
    render() 
    {
        if (cookies.get('sessionID') === undefined)
        {
            return <Redirect to = '/login' />;
        }
        if (this.state.redirectInvoice) return <Redirect to='/invoice'/>

        return (
                <div>
                    <div className="banner1">
                        <div className="container">
                            <h3><Link to="/">Home</Link> / <span>Checkout</span></h3>
                        </div>
                    </div>

                    <div className="content">
                        <div className="cart-items">
                            <div className="container">
                                <h2>My Checkout Page</h2>
                    
                                <div className="col-md-8" style={{left:'15%',right:'50%'}}>
                                <div className="panel panel-info" >
                                <div className="panel-heading">Address</div>
                                <div className="panel-body">
                                    <div className="form-group">
                                    <div className="col-md-12">
                                        <h4>Shipping Address</h4>
                                    </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-md-12"><strong>Name :</strong></div>
                                        
                                        <div className="col-md-12">
                                            <input type="text" ref="name" className="form-control" defaultValue />
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <div className="col-md-12"><strong>Address :</strong></div>
                                        
                                        <div className="col-md-12">
                                            <input type="text" ref="address" className="form-control" defaultValue />
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <div className="col-md-12"><strong>Phone Number :</strong></div>
                                        
                                        <div className="col-md-12"><input type="text" ref="phone_number" className="form-control" defaultValue /></div>
                                    </div>
                                </div>
                                </div>
                                        <div>
                                            <button type="button" className="btn btn-info" onClick={() => this.checkout(this.refs)}>Go to Invoice</button>
                                        </div>
                                </div>
                                </div>
                        </div>	
                    </div>
                

                </div>
                );
    }
}

export default Checkout;