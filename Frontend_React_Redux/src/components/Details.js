import React, { Component } from 'react'
import {connect} from 'react-redux'
import {ButtonContainer} from './Button'
import PropTypes from 'prop-types';

// import { withRouter } from "react-router-dom";

import { createProduct, saveProduct, removeProduct } from "../actions/productActions";

import { Redirect } from 'react-router'
import '../style/Details.css';


class Details extends Component {
    state={
      id: this.props.product == undefined ? 0 : this.props.product.id,
      title: this.props.product == undefined ? 'Product1' : this.props.product.title,
      img: this.props.product == undefined ? '../images/celebrations-deluxe-pin-box-300x400.png' : this.props.product.img,
      price: this.props.product == undefined ? 0.0 : this.props.product.price,
      count: this.props.product == undefined ? 0 : this.props.product.count,
      info: this.props.product == undefined ? 'Product Description' : this.props.product.info
    }

  constructor(props){
    super(props);
    this.saveAction = this.saveAction.bind(this);
    this.removeAction = this.removeAction.bind(this);
  }

  componentDidMount() {
    // console.log("CGI", this.state);
  }

  onInputChanged(event){
    this.setState({ 
      // ...this.state, 
      [event.target.name] : event.target.value
    });
  }
  doNothing = ()=>{
    this.props.nothing();
    this.setState({
      ...this.state
    })
    this.props.history.push('/')
    
  }

  saveAction = ()=>{
    // console.log("CGI saveProduct");
    if( this.state.id == 0 ){
      this.props.createProduct(this.state)
    }
    else{
      this.props.saveProduct(this.props.product.id, this.state)
    }
   
   this.setState({
     ...this.state
   })
   this.props.history.push("/");
  }

  removeAction = ()=>{
   this.props.removeProduct(this.props.product.id)
   this.setState({
     ...this.state
   })
   this.props.history.push("/");
  }

  render() {
    // if( this.props.product == undefined ){
    //   return <Redirect to='/'/>;
    // }
    // const {id, img , info, price, title, count } = this.props.product;
    const {id, img , info, price, title, count } = this.state

    return (
      <div className="container py-5">
        <div className="row">
           <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1>{title}</h1>
            </div>  
        </div>
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3 ">
            <img src= {'../'+ img}  className="img-fluid" alt="product"/>
          </div>
          { this.props.isAuthenticated ? 
            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <div className="form-group">
                  <label for="price">Price:</label>
                  <input type="text" className="form-control" id="in_price" name="price" 
                    value={price} onChange={ (event) => this.onInputChanged(event)}/>
                </div>
                <div className="form-group">
                  <label for="count">Count:</label>
                  <input type="text" className="form-control" id="in_count" name="count" 
                    value={count} onChange={ (event) => this.onInputChanged(event)}/>
                </div>
                <div className="form-group">
                  <label for="info">Description:</label>
                  <textarea type="text" className="form-control" id="in_info" name="info" 
                    value={info} onChange={ (event) => this.onInputChanged(event)}/>
                </div>
                <div>
                  <ButtonContainer onClick={this.doNothing}>Back to products</ButtonContainer>
                  <ButtonContainer cart onClick={this.saveAction}>Save</ButtonContainer>
                  <ButtonContainer cart onClick={this.removeAction}>Remove</ButtonContainer>
                  </div>
            </div> 
           : 
            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
              <table>
                <tr>
                  <td>Price:</td>
                  <td>{this.state.price}</td>
                </tr>
                <tr>
                  <td>Count:</td>
                  <td>{this.state.count}</td>
                </tr>
                <tr>
                  <td>Description:</td>
                  <td>{this.state.info}</td>
                </tr>
              </table>
              <div>
               <ButtonContainer onClick={this.doNothing}>Back to products</ButtonContainer>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
 }

 Details.propTypes ={
  product : PropTypes.object,
  saveProduct : PropTypes.func,
  removeProduct: PropTypes.func,
  nothing : PropTypes.func,
  isAuthenticated : PropTypes.bool
}

const mapStateToProps = (state, ownProps)=>{
  let id = ownProps.match.params.product_id;
  if( id == undefined ) id = 0; // insert
  console.log("CGI saveProduct details", state);
  return {
      product: state.products.products.find(product => product.id == id),
      isAuthenticated: state.auth.isAuthenticated,
  }
 }
 const mapDispatchToProps = (dispatch)=>{
  return {
      createProduct : (productData)=> {dispatch(createProduct(productData))},
      saveProduct : (id, productData)=> {dispatch(saveProduct(id, productData))},
      removeProduct : (id)=> {dispatch(removeProduct(id))},
      nothing : ()=>{dispatch({type: 'NOTHING'})}
  }

}

 export default connect(mapStateToProps,mapDispatchToProps)(Details)