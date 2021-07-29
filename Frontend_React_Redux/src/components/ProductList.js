import React, { Component } from 'react'
import Product from './Product'
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Categories from './Categories'
import Pagination from '../pagination/Pagination'

import Slider from './Slider'
import NavGrid from './NavGrid'
import NavFooter from './NavFooter'
import Carousel from './Carousel'


import '../style/ProductList.css'

import PropTypes from 'prop-types';

let count = 0;
class ProductList extends Component {

  state = {
    allProducts: [],
    currentProducts: [],
    currentPage: null,
    totalPages: null,
    refresh: true
  }

  constructor(props){
    super(props);
  }
  componentDidMount = () => {
    count = 0;
    console.log("CGI mapStateToProps", this.props.products);

    this.setState({ refresh: true });
  }

  componentDidUpdate() {
    if ((count == 0) && (this.props.products.length > 0)) {
      this.setState({
        allProducts: this.props.products
      })
      count++;
    }
    console.log("UUU", this.props.products);
  }


  getProducts(products) {
    if (count != 0) {
      return (products.length ? (
        products.map(product => {
          return (
            <div className="col-sm-6 col-md-4">
              <Product id={product.id} img={product.img} />
            </div>
          )
        })

      ) : (<div></div>)
      );
    } else { return (<h3>There is no product</h3>) }
  }

  onPageChanged = data => {
    const { allProducts } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentProducts = allProducts.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentProducts, totalPages });
  }

  render() {
    const { allProducts, currentProducts, currentPage, totalPages } = this.state;
    const totalProducts = allProducts.length;

    if (totalProducts === 0) return (
      <div key={this.props.match.params.brand} id="content" className="container">
        <div className="padding-top">
          <div className="row">
            <div className="col-sm-4 col-md-3">
              <Categories p={this.props} category={this.props.match.params.brand} />
            </div>
            <div className="col-sm-8 col-md-9">
              <div className="row">

                <div className="col-md-12 align-right">
                  <Pagination totalRecords={totalProducts} pageLimit={6} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>);
    
    const ProductsList = this.getProducts(this.state.currentProducts);

    return (

      <div className="main-content home" id="content">
        <div className="background-content"></div>
        <div className="background">
          <div className="shadow"></div>
          <div className="pattern">
            <div className="container">

              <div className="row">
                <div className="col-sm-12">
                  <div className="sm-margin"></div>
                </div>
              </div>

              <Slider/>

							<div class="row">
								<div class="col-sm-12">
                  <NavGrid/>
                  <NavFooter/>

									<div class="carousel-wrapper ">
                    <h2 style={{marginTop: '40px'}}>
                      <Link to ={'/point/manage'}>
                          <i className="fa fa-book"></i>
                          &nbsp;<span style={{color: 'blue'}}>&nbsp;&nbsp;Point Manage</span>
                      </Link>
                    </h2>
										<h2 class="slider-title">
											<span class="inline-title">Amount</span>
                      <span style={{color: 'blue', float: 'right', marginRight: '1.5em'}}>{totalProducts}</span>
											<span class="line"></span>
										</h2>
										<div class="owl-carousel home-products-carousel owl-responsive-768 owl-theme owl-loaded" id="myCarousel58295913">
											<div class="owl-stage-outer">
												<div class="owl-stage"></div>
											</div>
										</div>
									</div>

                  <Carousel data={this.state.allProducts}/>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

ProductList.propTypes = {
  products: PropTypes.array
};

const mapStateToProps = state => {
  console.log("CGI state", state);
  return ({
    products: state.products.products
  });
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(ProductList);
//export default withRouter(connect(mapStateToProps)(ProductList));

      //   <div id="content" className="container">
      //     <div className="padding-top">
      //     <div className="row">
      //       <div className="col-sm-4 col-md-3">
      //           <Categories category="All"/>
      //       </div>
      //       <div className="col-sm-8 col-md-9">
      //         <div className="row">
      //           {ProductsList}
      //           <div className="col-md-12 align-right">
      //           <Pagination totalRecords={totalProducts} pageLimit={6} pageNeighbours={1} onPageChanged={this.onPageChanged} />
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>          
