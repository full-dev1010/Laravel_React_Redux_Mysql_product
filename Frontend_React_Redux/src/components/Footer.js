import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <div className="container footer">
        <hr />
        <footer>
            <div className="row">
            <div className="col-lg-12">
            <p>Copyright &copy;  2019</p>
            </div>
            </div>
        </footer>
    </div>
    )
  }
}
