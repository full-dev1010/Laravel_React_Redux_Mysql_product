import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ButtonContainer } from './Button'
import PropTypes from 'prop-types';

// import pointsData from '../testDataPoints'

import '../style/PointsManage.css'

import {
    loadAll,
    loadPoints,
    addPoint,
    updatePoint,
    deletePoint
} from '../pointsUtils'

import { fetchPoints, savePoint, removePoint, updateEditState } from "../actions/PointActions";

let count = 0;
class Details extends Component {
    state = {
        currentProductID: 0,
        products: this.props.products,
        points: this.props.points,
        editValue: new Map()
    }

    constructor(props) {
        super(props);
        this.onClickEditButton = this.onClickEditButton.bind(this);
        this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
        this.onSelectChanged = this.onSelectChanged.bind(this);
        count = 0;
    }

    // remakePoints(arr){
    //     let i, n = arr.length;
    //     var res = [];
    //     for(i = 0; i < n; i++){
    //         res.push({
    //             id: arr[i].id,
    //             name: arr[i].name,
    //             point: arr[i].point,
    //             editState: false,
    //             user_id: arr[i].user_id,
    //             product_id: arr[i].product_id
    //         });
    //     }
    //     return res;
    // }
        
    componentDidMount() {
        // this.state.points = this.remakePoints(this.props.points);

        this.state.points = this.props.points;

        this.setState({
            ...this.state
        });

        console.log("CGI pointDidMount", this.props.points);
        let n = this.state.points.length;
        for (let i = 0; i < n; i++) {
            this.state.editValue.set(this.state.points[i].id,
                this.state.points[i].point);
            this.state.points[i].editState = false;
        }
        console.log("CGI pointDidMount", this.state);
    }

    componentDidUpdate() {
        // if ((count == 0) && (this.props.points.length > 0)) {
        //   this.setState({
        //     points: this.props.points
        //   })
        //   count++;
        // }
        // console.log("UUU", this.props.points);
      }
    
    onInputChanged(event) {
        this.setState({
            // ...this.state, 
            [event.target.name]: event.target.value
        });
    }
    doNothing = () => {
        this.props.nothing();
        this.setState({
            ...this.state
        })
        this.props.history.push('/')

    }
    saveAction = () => {
        this.state.points = this.props.saveProduct(this.props.product.id)
        this.setState({
            ...this.state
        })
    }

    getProducts(products) {
        // console.log("CGI product", this.state);
        return (products.length ? (
            products.map(product => {
                return (
                    <option value={product.id}>{product.title}</option>
                )
            })

        ) : ('')
        );
    }

    refreshPoints() {
        // productId != 0 ? storePoints.filter(id => id == productId) : storePoints
        console.log("CGI currentPID", this.props.fetchPoints(this.state.currentProductID));
        this.setState({
            // ...this.state, 
            points: this.props.fetchPoints(this.state.currentProductID)
        });
        console.log("CGI refresh" ,this.state);
    }

    onSelectChanged(event) {
        let pid = parseInt(event.target.value);
        // console.log("CGI", pid);
        this.state.currentProductID = pid;
        this.setState({
            // ...this.state, 
            currentProductID: pid
        });
        this.refreshPoints();
    }

    onCellInputChanged(event, id) {
        // console.log("CGI inputChange home", id);
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.state.editValue.set(id, event.target.value);
            this.setState({
                editValue: this.state.editValue
            });
        }

        // console.log("CGI inputChange", this.state);
    }
    onClickEditButton(id) {
        console.log("CGI clickEditButton", this.state.points);
        
        // let index = this.state.points.findIndex(ele => ele.id == id);
        // this.state.points[index].editState = !this.state.points[index].editState;
        // if (!this.state.points[index].editState) {
        //     this.state.points[index].point = this.state.editValue.get(id)
        //     this.state.points = this.props.savePoint(id, this.state.currentProductID, {point: this.state.editValue.get(id)});
        // }

        let index = this.props.points.findIndex(ele => ele.id == id);
        this.props.updateEditState(id, this.state.editValue.get(id));
        if (!this.props.points[index].editState) {
            this.state.points = this.props.savePoint(id, this.state.currentProductID, {point: this.state.editValue.get(id)});
        }
        this.setState({
            ...this.state
        });
        // console.log('CGI', this.state);
    }

    onClickDeleteButton(id) {
        if ( window.confirm('Do you want to delete this?') ) {
            this.state.points = this.props.removePoint(id, this.state.currentProductID);
        }
        this.setState({
            ...this.state
        });
        console.log('CGI delete', this.state);
    }

    makeCell(isEdit, value, id) {
        //   console.log("CGI make Cell", id);
        if (isEdit) {
            return (
                <td>
                    <input value={this.state.editValue.get(id)} onChange={(event) => this.onCellInputChanged(event, id)}/>
                </td>
            );
        }
        else {
            return (
                <td>{value}</td>
            );
        }
    }
    getTableContents(points) {
        // this.state.points.sort(function (a, b) {
        //     return (a.point - b.point || a.name < b.name);
        // });
        // this.state.points.reverse();

        // this.setState.points = this.props.points;
        // this.setState({
        //     ...this.state
        // });

        console.log("CGI pointTablecontent", this.props.points);
        let i = 0;
        return (this.props.points.length ? (
            this.props.points.map(point => {
                return (
                    <tr>
                        <td>{++i}</td>
                        <td>{point.name}</td>
                        {this.makeCell(point.editState, point.point, point.id)}

                        { this.props.isAuthenticated ? 
                            <td style={{ textAlign: 'center' }}>
                                <button class="btn btn-green" onClick={() => this.onClickEditButton(point.id)}>{point.editState ? 'Save' : 'Edit'}</button>
                            </td> : <td></td>
                        }
                        { this.props.isAuthenticated ?                         
                            <td style={{ textAlign: 'center' }}>
                                <button class="btn btn-green" onClick={() => this.onClickDeleteButton(point.id)}>Delete</button>
                            </td> : <td></td>
                        }
                    </tr>
                )
            })

        ) : (<tr><td colspan="5" style={{textAlign: 'center'}}>No Data</td></tr>)
        );

    }
    render() {
        // let points = loadAll();
        // let points = this.props.fetchPoints(this.state.currentProductID);
        // console.log("CGI render", this.state.points);
        let options = this.getProducts(this.state.products);
        let tableContents = this.getTableContents();
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Point Management</h1>
                    </div>
                    <div className="col-md-6" style={{textAlign: 'right'}}>
                        <ButtonContainer onClick={this.doNothing}>
                            <i className="fa fa-arrow-left"></i>&nbsp;
                            Back home
                        </ButtonContainer>
                    </div>
                </div>
                <div className="row">
                    <span>Select phase</span>
                    <select onChange={ (event) => this.onSelectChanged(event) }>
                        <option value='0'>Overall</option>
                        {options}
                    </select>
                </div>
                <div className="row">
                    <table>
                        <thead>
                            <th style={{ width: '10%' }}>Rank</th>
                            <th style={{ width: '30%' }}>Team & Manager</th>
                            <th style={this.props.isAuthenticated ? 
                                { width: '20%'} : { width: '50%',}}>Point</th>

                            { this.props.isAuthenticated ? 
                                <th style={{ width: '10%', textAlign: 'center' }}>Edit</th>
                                : <th></th>
                            }
                            { this.props.isAuthenticated ? 
                                <th style={{ width: '10%', textAlign: 'center' }}>Delete</th>
                                : <th></th>
                            }
                        </thead>
                        <tbody>
                            {tableContents}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

Details.propTypes = {
    products: PropTypes.array,
    fetchPoints: PropTypes.func,
    savePoint: PropTypes.func,
    removePoint: PropTypes.func,
    updateEditState: PropTypes.func,
    isAuthenticated: PropTypes.bool,
    nothing: PropTypes.func
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.product_id;
    return {
        points: state.points.points,
        products: state.products.products,
        isAuthenticated: state.auth.isAuthenticated,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPoints : (p_id)=> {dispatch(fetchPoints(p_id))},
        removePoint : (id, p_id)=> {dispatch(removePoint(id, p_id))},
        savePoint: (id, p_id, pointData) => { dispatch(savePoint(id, p_id, pointData)) },
        updateEditState: (id, value) => { dispatch(updateEditState(id, value)) },
        nothing: () => { dispatch({ type: 'NOTHING' }) }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Details)