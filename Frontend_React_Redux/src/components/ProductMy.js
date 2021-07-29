import React, { Component } from 'react'
import '../style/ProductMy.css'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

// import imageUrlItem1 from '../images/celebrations-collection-dragapult-prime-300x400.png';
// import imageUrlItem2 from '../images/celebrations-deluxe-pin-box-300x400.png';


class ProductMy extends Component {
  state={

  }
  

  handlePlusClick = (e)=>{
    this.props.addCart(this.props.id)
    this.setState({
      ...this.state
    })

  }
  render() {
    let {id, title, price, info, count} = this.props.product;  
   
    return (

      <div className="owl-item">
        <div className="product">
            <div className="product-image">
                <figure className="inner-image">
                  <Link to ={'/details/'+ id}>
                          <img src={this.props.img} alt="Pokémon TCG - Celebrations Collection Dragapult Prime - EN" className=" zoom-image-effect" />
                  </Link>
                </figure>

                <div className="quickview">
                  <Link to ={'/details/'+ id} className="quickview-icon">
                    <i className="fa fa-eye"></i>
                    &nbsp;<span>Quick {this.props.isAuthenticated ? 'Edit' : 'View'}</span>
                  </Link>
                </div>
            </div>
            <Link to ={'/details/'+ id} className="addwishlist hiddenwishlist" title="Wishlist">
              <i className="porto-icon-wishlist"></i>                  
            </Link>
            <h3>
                <a href="https://versusgamecenter.pt/pokemon-tcg---celebrations-collection-dragapult-prime---en">{info}</a>
            </h3>
            <div className="rating-wrap">
                <span className="rating-before">
                    <span className="rating-line"></span>
                </span>
                <div className="rating-content">
                    <div className="star-rating add-tooltip">
                    </div>
                </div>
                <span className="rating-after">
                    <span className="rating-line"></span>
                </span>
            </div>
            <div className="hidden">
                <h3>
                    <a href="https://versusgamecenter.pt/pokemon-tcg---celebrations-collection-dragapult-prime---en">Pokémon TCG - Celebrations Collection Dragapult Prime - EN</a>
                </h3>
            </div>

            <span className="price">
                <ins><span className="amount">{price}€</span></ins>
            </span>

        </div>
      </div>


    )
  }
}
ProductMy.propTypes = {
  product: PropTypes.object,
  addCart: PropTypes.func
};

const mapStateToProps = (state, ownProps) =>{
  let id = ownProps.id;
  return ({
    product: state.products.products.find(product => product.id == id),
    isAuthenticated: state.auth.isAuthenticated,
  });
}

const mapDispatchToProps = (dispatch)=>{
  return {
      addCart : (id)=> {dispatch({type: 'ADD_CART', id:id})}
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(ProductMy)