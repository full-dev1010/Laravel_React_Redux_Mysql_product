import React, { Component } from 'react'
import { connect } from "react-redux"

import {Link} from 'react-router-dom'
import $ from 'jquery';

import '../style/NavFooter.css'

import PropTypes from 'prop-types';

// import askBack from '../images/ask-back.jpg';

// import '../js/megamenu.js';

class NavFooter extends Component {

  componentDidMount() {
    // this.loadMegamenu();
  }    

  render() {
    return (
        <div className="advanced-grid advanced-grid-75750320 info-box-dark " >
        <div style={{backgroundColor: '#171717'}}>
            <div className="container">
                <div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row clean-row info-boxes-container type2">
                                <div className="col-md-4 info-box-container">
                                    <div className="info-box">
                                        <div className="info-box-icon">
                                            <i className="fa fa-truck"></i>
                                        </div>
                                        <div className="info-box-content">
                                            <h3 className="info-box-title">PORTES GRÁTIS
                                                &amp; DEVOLUÇÕES</h3>
                                            <div className="info-box-desc">Portes grátis em
                                                encomendas a partir de €100, para
                                                Portugal Continental.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 info-box-container">
                                    <div className="info-box">
                                        <div className="info-box-icon">
                                            <i className="fa fa-dollar"></i>
                                        </div>
                                        <div className="info-box-content">
                                            <h3 className="info-box-title">TROCAS E
                                                DEVOLUÇÕES</h3>
                                            <div className="info-box-desc">Garantia de 30
                                                dias em todos os produtos, desde que
                                                selados na embalagem e por utilizar.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 info-box-container">
                                    <div className="info-box">
                                        <div className="info-box-icon">
                                            <i className="fa fa-comments"></i>
                                        </div>
                                        <div className="info-box-content">
                                            <h3 className="info-box-title">SUPORTE ONLINE
                                            </h3>
                                            <div className="info-box-desc">Envia-nos as tuas
                                                dúvidas e nós respondemos.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
  }
}

NavFooter.propTypes = {
  productNumber: PropTypes.number
};

const mapStateToProps = state =>{
  return ({
    productNumber: state.products.cart.length,
  });
}

export default connect(mapStateToProps)(NavFooter);
