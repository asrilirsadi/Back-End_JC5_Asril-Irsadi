import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import { Link, Route } from 'react-router-dom'; 

import Header from './component/Header';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import Product from './component/Product';
import Single from './component/Single';
import Checkout from './component/Checkout';
import Profile from './component/Profile';
import DetInv from './component/DetailInvoice';
import Footer from './component/Footer';

class App extends Component 
{
  render() 
  {
    return (
              <div>
                  <Header />
                  
                  <Route exact path="/" component={Home}/>
                  
                  <Route path="/login" component={Login}/>
                  <Route path="/register" component={Register}/>
                  <Route path="/product" component={Product}/>
                  <Route path="/single" component={Single}/>
                  <Route path="/checkout" component={Checkout}/>
                  <Route path="/profile" component={Profile}/>
                  <Route path="/detail_invoice" component={DetInv}/>

                  <Footer />
              </div>
            );
  }
}

export default App;
