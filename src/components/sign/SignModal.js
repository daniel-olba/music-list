import React, {Component} from 'react';

import {
  Container,
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

class SignModal extends Component {
  state = {
    modal: false
  };

  render() {
    return (
      <Modal
        size="lg"
        isOpen={this.state.modal}
        toggle={this._toggleModal}
        className={`sign-modal`}
      >
        <ModalBody>
          <Container className="sign-container">
            <Row>
              <Col xs={12} lg={6} className="sign-text">
                <h3>To get the most out of this website please login or register</h3>
              </Col>
              <Col xs={12} lg={6}>
                <Card className="sign-card">
                  <CardBody className="sign-cardBody">
                    <Row>
                      <Col xs={12} className="signup-section">
                        <Button
                          onClick={() => {
                            this.props.history.push('/signup')
                          }}
                          className="signup-btn"
                        >REGISTER FREE</Button>
                      </Col>
                      <Col xs={12} className="login-section">
                        <span className="login-text">Already have an account?</span>
                        <Button
                          onClick={() => {
                            this.props.history.push('/login')
                          }}
                          className="login-btn">LOG IN</Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </ModalBody>
      </Modal>
    );
  }

  _toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
}

export default SignModal;
