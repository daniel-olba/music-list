import React, { Component } from "react";
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
          <Form>
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
}

export default SignUp;