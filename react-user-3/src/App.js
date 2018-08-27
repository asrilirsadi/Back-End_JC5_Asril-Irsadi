import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import { Route } from 'react-router-dom'; 

import Header from './component/Header';

import Home from './component/Home';

import Login from './component/Login';
import Register from './component/Register';

import ProductList from './component/ProductList';
import ProductDetail from './component/ProductDetail';

import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Invoice from './component/Invoice';

import Profile from './component/Profile';

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

                  <Route path="/productlist" component={ProductList}/>
                  <Route path="/productdetail" component={ProductDetail}/>

                  <Route path="/cart" component={Cart}/>
                  
                  {/* 
                  <Route path="/checkout" component={Checkout}/>
                  <Route path="/invoice" component={Invoice}/>

                  <Route path="/profile" component={Profile}/>
                  */}
                  <Footer /> 
              </div>
            );
  }
}

export default App;
