import React, { Component } from 'react'
import { connect } from "react-redux"

import {Link} from 'react-router-dom'
import $ from 'jquery';

import '../style/Carousel.css'
import '../style/custom/owl.carousel.css'
// import '../style/custom/font-icons.css'

import CarouselList from './CarouselList';

import PropTypes from 'prop-types';

// import askBack from '../images/ask-back.jpg';

// import '../js/megamenu.js';

class Carousel extends Component {

  componentDidMount() {
    // this.loadMegamenu();
  }    

  render() {
    //   console.log("CGI", this.props.data)
    return (
        <div className="carousel-wrapper clearfix">
            <h2 class="slider-title" style={{marginTop: '40px'}}>
                <span class="inline-title">Products</span>
                <span class="line"></span>
            </h2>
            <CarouselList data={this.props.data}/>

        </div>
    )
  }
}

Carousel.propTypes = {
  productNumber: PropTypes.number
};

const mapStateToProps = state =>{
  return ({
    productNumber: state.products.cart.length,
  });
}

export default connect(mapStateToProps)(Carousel);
