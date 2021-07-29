import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  Alert,
  Spinner
} from "reactstrap";
import { connect } from "react-redux"; // API to connect component state to redux store
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { register } from "../actions/authActions";
import '../style/Login.css';
import { trim } from "jquery";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    msg: ""
  };

  static propTypes = {
    buttonClicked: PropTypes.func.isRequired,
    button: PropTypes.bool,
    register: PropTypes.func.isRequired,
    status: PropTypes.object.isRequired,
    loading: PropTypes.bool
  };

  // Removes sign in and register buttons from homepage
  // upon mounting of Register component
  componentDidMount() {
  }

  componentDidUpdate(prevProps) {
    // Changes status message if it is different from previous message
    console.log("CGI Register ", this.props.user);
    if( this.props.user != null && this.props.user.email != undefined ){
        setTimeout(() => {
            this.props.history.push("/login");
        }, 1000);
    }
  }

  // Sets the value of the input fields to the state items of the same name
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Calls action to register user
  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    if( trim(name) == '' || trim(email) == '' || trim(password) == '' ){
        alert("Fill input!");
        return;
    }
    const user = { name, email, password };
    this.props.register(user);
  };

  render() {
    let className = "formStyle";

    // If HTTP 400 error, render alert with red color, else if
    // it is 200 OK, render alert in green
    return (
      <div className={className}>
        <Card>
          <CardBody>
            <CardTitle>
              <h2>
                <strong>Register</strong>
              </h2>
            </CardTitle>
            <CardSubtitle className="text-muted">
              Already have an account?
              <Link to="/login"> Log In. </Link>
            </CardSubtitle>
            <br />
            {alert}
            <Form onSubmit={this.onSubmit}>
              <FormGroup className="text-center">
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="mb-3"
                  size="lg"
                  onChange={this.onChange}
                />

                <Label for="email">E-mail</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@youremail.com"
                  className="mb-3"
                  size="lg"
                  onChange={this.onChange}
                />

                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                  className="mb-3"
                  size="lg"
                  onChange={this.onChange}
                />
                <Button color="dark" className="mt-5" size="lg">
                    <span>Register</span>
                </Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //Maps state to redux store as props
  status: state.status,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { register }
)(Register);
