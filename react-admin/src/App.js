import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import { Link, Route } from 'react-router-dom'; 
// import { Link, Route } from 'react-router-dom'; 

import Header from './component/Header';
import SideBar from './component/SideBar';
import Dashboard from './component/Dashboard';
import Produk1 from './component/Produk1';
import Produk2 from './component/Produk2';
import InvCust from './component/InvoiceCustomer';
import InvSingle from './component/InvoiceSingle';
import Footer from './component/Footer';

class App extends Component 
{
  render() 
  {
    return (
            <div className="wrapper">
              <Header />
              <SideBar />
                
              <Route exact path="/" component={Dashboard}/>
              <Route path="/produk_mobil_baru" component={Produk1}/>
              <Route path="/produk_mobil_bekas" component={Produk2}/>
              <Route path="/invoice_customer" component={InvCust}/>
              <Route path="/invoice_single_page" component={InvSingle}/>

              <Footer />
            </div>
            );
  }
}

export default App;
