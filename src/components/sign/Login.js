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

class Login extends Component {
  state = {

  };

  render() {
    return(
      <div className="login">
        <div className="login-header"><h1><i className="fas fa-compact-disc"/> Music List</h1></div>
        <div className="content">
          <Row className="login-text text-center">
            <Col xs={12}>
              Log in to continue
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
                  <Input type="password" name="password" placeholder="Password" />
                </FormGroup>
              </Col>
            </Row>
            <Row className="login-btn_row">
              <Col xs={12}>
                <Button className="login-btn">LOG IN</Button>
              </Col>
            </Row>
          </Form>
          <div className="signup-section text-center">
            <Row>
              <Col xs={12}>
                <hr style={{color: 'rgba(0, 0, 0, 0.4)'}}/>
              </Col>
            </Row>
            <Row className="signup-text">
              <Col xs={12}>
                Don't have an account?
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Button
                  onClick={() => {
                    this.props.history.push('/signup')
                  }}
                  className="signup-btn">SIGN UP HERE</Button>
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
    } else {
      formData.email = event.target.email.value;
      formData.password = event.target.password.value;
      this.props.signin(formData, () => {
        this.props.user(() => {
          this.props.history.push('/home');
        });
      });
    }
  }
}

export default connect(
  null,
  actions
)(Login);