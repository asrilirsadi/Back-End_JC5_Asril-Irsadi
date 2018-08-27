import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import { Route } from 'react-router-dom'; 
// import { Link, Route } from 'react-router-dom'; 

// import App2 from './App2';
import Login from './component/Login';
import Register from './component/Register';
// import Header from './component/Header';
// import SideBar from './component/SideBar';
import Dashboard from './component/Dashboard';
import CategoryBrand from './component/CategoryBrand';
import CategoryModel from './component/CategoryModel';
import CategoryVariant from './component/CategoryVariant';
import CategoryBodyType from './component/CategoryBodyType';
import CategoryColour from './component/CategoryColour';
import CategoryProvince from './component/CategoryProvince';
import CategoryCityorDistrict from './component/CategoryCityorDistrict';

import ProductAdding from './component/ProductAdding';
import ProductSpecAdding from './component/ProductSpecAdding';
import ProductImageAdding from './component/ProductImageAdding';

import ProductSaved from './component/ProductSaved';
import ProductSavedEdit from './component/ProductSavedEdit';
import ProductSpecSaved from './component/ProductSpecSaved';
import ProductImageSaved from './component/ProductImageSaved';


// import Produk1 from './component/Produk1';
// import Produk2 from './component/Produk2';
import InvCust from './component/InvoiceCustomer';
import InvSingle from './component/InvoiceSingle';

// import Footer from './component/Footer';

class App extends Component 
{
  render() 
  {

    return (
            <div className="wrapper">
              {/* <Header />
              <SideBar /> */}
                
              <Route exact path="/" component={Login} />
              <Route path="/register" component={Register} />

              <Route path="/dashboard" component={Dashboard} />
              
              <Route path="/category_brand" component={CategoryBrand} />
              <Route path="/category_model" component={CategoryModel} />
              <Route path="/category_variant" component={CategoryVariant} />
              <Route path="/category_body_type" component={CategoryBodyType} />
              <Route path="/category_colour" component={CategoryColour} />
              <Route path="/category_province" component={CategoryProvince} />
              <Route path="/category_city_or_district" component={CategoryCityorDistrict} />

              <Route path="/product_adding" component={ProductAdding} />
              <Route path="/product_spec_adding" component={ProductSpecAdding} />
              <Route path="/product_image_adding" component={ProductImageAdding} />
              
              <Route path="/product_saved" component={ProductSaved} />
              <Route path="/product_saved_edit" component={ProductSavedEdit} />
              <Route path="/product_spec_saved" component={ProductSpecSaved} />
              <Route path="/product_image_saved" component={ProductImageSaved} />
              {/* <Route path="/produk_mobil_baru" component={Produk1} />
              <Route path="/produk_mobil_bekas" component={Produk2} /> */}

              <Route path="/invoice_customer" component={InvCust} />
              <Route path="/invoice_single_page" component={InvSingle} />

              {/* <Footer /> */}
            </div>
            );
  }
}

export default App;
