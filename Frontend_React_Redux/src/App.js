import React, { Component } from 'react'
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { connect } from "react-redux";
import {Link, withRouter} from 'react-router';
import { fetchProducts } from "./actions/productActions";
import {compose} from 'redux';

import $ from 'jquery';

import './style/custom/styles.css'
import './style/custom/stylesheet.css'
import './style/custom/home_custom.css'
import './style/custom/menu.css'


import Default from './components/Default'
import Details from './components/Details'
import Navbar from './components/Navbar'
import Product from './components/Product'
import ProductList from './components/ProductList'
import Cart from './components/cart/Cart'
import Footer from './components/Footer'
import Brand from './components/Brand'
import PointsManage from './components/PointsManage'
import Login from './components/Login'
import Register from './components/Register'

import './App.css'

// import './style/custom/_jumbotron.scss'

// import './js/megamenu.js';

class App extends Component {
 state = {
   
 }
 componentDidMount() {
  this.props.dispatch(fetchProducts());
  // this.loadMegamenu();
  // const a = $('header');
  // console.log("CCC" + a);
}
 
  render() {
    return (
          <React.Fragment>
            
            <Navbar/>
            <Switch>
                <Route exact path="/" component={ProductList}/>
                <Route  path="/cart" component={Cart}/>
                <Route  path="/details/:product_id" component={Details}/>
                <Route  path="/brand/:brand" component={Brand}/>
                <Route  path="/point/manage" component={PointsManage}/>
                <Route exact path ="/login" component={Login}/>
                <Route exact path ="/register" component={Register}/>
                <Route  component={Default}/>
            </Switch>
            <Footer/>  
         
          </React.Fragment>
    )
  }
}

export default compose(
  withRouter,
  connect()
)(App);
