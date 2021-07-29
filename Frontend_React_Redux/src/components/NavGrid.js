import React, { Component } from 'react'
import { connect } from "react-redux"

import {Link} from 'react-router-dom'
import $ from 'jquery';

import '../style/NavGrid.css'

import PropTypes from 'prop-types';

// import askBack from '../images/ask-back.jpg';

// import '../js/megamenu.js';

class NavGrid extends Component {

  componentDidMount() {
    // this.loadMegamenu();
  }    

  render() {
    return (
        <div className="advanced-grid advanced-grid-98452648 jumbotron homepage">
            <div>
                <div className="container">
                    <div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="header">
                                    <strong>Não temos o produto que procuras?</strong><br/>Fala connosco e nós tratamos de o arranjar ao melhor preço!
                                </div>
                                <div className="button-area">
                                    <a href="https://versusgamecenter.pt/contatos" className="btn btn-primary btn-lg">
                                        Diz-nos o que pretendes...
                                    </a>
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

NavGrid.propTypes = {
  productNumber: PropTypes.number
};

const mapStateToProps = state =>{
  return ({
    productNumber: state.products.cart.length,
  });
}

export default connect(mapStateToProps)(NavGrid);
