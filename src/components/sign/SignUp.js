import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import {
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  Button
} from "reactstrap";

class SignUp extends Component {
  state = {

  };

  render() {
    return(
      <div className="signup">
        <div className="signup-header"><h1>Music List</h1></div>
        <div className="content">
          <Row className="signup-text text-center">
            <Col xs={12}>
              Sign up with your email address
            </Col>
          </Row>
          <Form onSubmit={this._onSubmit}>
            <Row>
              <Col xs={12}>
                <FormGroup>
                  <Input type="email" name="email" placeholder="Email address" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <FormGroup>
                  <Input type="username" name="username" placeholder="Your username" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <FormGroup>
                  <Input type="password" name="password" placeholder="Password" />
                </FormGroup>
              </Col>
            </Row>
            <Row className="signup-btn_row">
              <Col xs={12}>
                <Button className="signup-btn">SIGN UP</Button>
              </Col>
            </Row>
          </Form>
          <div className="login-section text-center">
            <Row>
              <Col xs={12}>
                <hr/>
              </Col>
            </Row>
            <Row className="login-text">
              <Col xs={12}>
                Already have an account? <a onClick={() => {
                  this.props.history.push('/login')
              }}>
                Log in here
              </a>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }

  _onSubmit = event => {
    event.preventDefault();
    let formData = {};
    if (event.target.email.value === ''){
      window.alert('Please use a email')
    } else if (event.target.password.value === '') {
      window.alert('Please use a password')
    } else if (event.target.username.value === '') {
      window.alert('Please use a username')
    } else {
      formData.email = event.target.email.value;
      formData.password = event.target.password.value;
      formData.name = event.target.username.value;
      this.props.signup(formData, (data) => {
        this.props.signin(data, () => {
          this.props.history.push('/home');
        });
      });
    }
  }

}

export default connect(
  null,
  actions
)(SignUp);