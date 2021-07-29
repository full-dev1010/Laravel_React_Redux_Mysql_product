import React, { Component } from 'react'
import { connect } from "react-redux"
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';

import ProductMy from './ProductMy';

import $ from 'jquery';

import '../style/CarouselList.css'

import PropTypes from 'prop-types';

import imageUrlItem1 from '../images/celebrations-collection-dragapult-prime-300x400.png';
import imageUrlItem2 from '../images/celebrations-deluxe-pin-box-300x400.png';

// import '../js/megamenu.js';


// import productListData from '../testData';

let count = 0;

class CarouselList extends Component {

    state = {
        allProducts: [],
        currentProducts: [],
        currentPage: null,
        totalPages: null,
        refresh: true
      }
    
    componentDidMount() {
        // this.loadMegamenu();
        if ((count == 0) && (this.props.products.length > 0)) {
            this.setState({
              allProducts: this.props.products
            })
      
            count++;
        }    
    }

    componentDidUpdate() {
        if ((count == 0) && (this.props.products.length > 0)) {
          this.setState({
            allProducts: this.props.products
          })
    
          count++;
        }    
    }

    onPageChanged = data => {
        const { allProducts } = this.state;
        const { currentPage, totalPages, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentProducts = allProducts.slice(offset, offset + pageLimit);

        this.setState({ currentPage, currentProducts, totalPages });
    }
        
    getProducts(products) {
        // console.log("cgi", products);
        // if (count != 0) {
        if (products.length != 0) {
            return (products.length ? (
                products.map(product => {
                    return (
                        <ProductMy id={product.id} img={product.img} />
                    )
                })

            ) : (<div></div>)
            );
        } else { return (<h3>There is no product</h3>) }
    }

    render() {
        const { allProducts, currentProducts, currentPage, totalPages } = this.state;
        const totalProducts = allProducts.length;
    
        // this.onPageChanged(allProducts)
        // console.log("CGI", this.props.data);
        // const ProductsList = this.getProducts(this.props.data);
        const ProductsList = this.getProducts(this.props.products);

        return (
            <div className="owl-carousel home-products-carousel owl-theme owl-responsive-768 owl-loaded" id="myCarousel80841576">

                <div className="owl-stage-outer">
                    <div className="owl-stage">

                        {ProductsList}

                    </div>
                </div>

                <div className="owl-controls">
                    <div className="owl-nav">
                        <div className="owl-next">
                            <Link to ={'/details/0'} className="">
                                <i className="fa fa-plus"></i>
                                &nbsp;<span>Add Product</span>
                            </Link>
                        </div>
                    </div>
                    <div className="owl-dots" style={{ display: 'block' }}>
                        <div className="owl-dot"><span></span></div>
                        <div className="owl-dot active"><span></span></div>
                        <div className="owl-dot"><span></span></div>
                        <div className="owl-dot"><span></span></div>
                        <div className="owl-dot"><span></span></div>
                        <div className="owl-dot"><span></span></div>
                        <div className="owl-dot"><span></span></div>
                        <div className="owl-dot"><span></span></div>
                        <div className="owl-dot"><span></span></div>
                        <div className="owl-dot"><span></span></div>
                        <div className="owl-dot"><span></span></div>
                        <div className="owl-dot"><span></span></div>
                        <div className="owl-dot"><span></span></div>
                        <div className="owl-dot"><span></span></div>
                        <div className="owl-dot"><span></span></div>
                        <div className="owl-dot"><span></span></div>
                        <div className="owl-dot"><span></span></div>
                        <div className="owl-dot"><span></span></div>
                        <div className="owl-dot"><span></span></div>
                        <div className="owl-dot"><span></span></div>
                    </div>
                </div>

            </div>
        )
    }
}

CarouselList.propTypes = {
    products: PropTypes.array
};

const mapStateToProps = state => {
    // console.log("CGI CarouselList", state.products.products)
    return ({
        products: state.products.products
    });
}
export default compose(
    withRouter,
    connect(mapStateToProps)
)(CarouselList);


// CarouselList.propTypes = {
//   productNumber: PropTypes.number
// };

// const mapStateToProps = state =>{
//   return ({
//     productNumber: state.products.cart.length,
//   });
// }

// export default connect(mapStateToProps)(CarouselList);
