import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import { compose } from "redux";
import {withRouter} from "react-router";

import { NavLink } from "react-router-dom";

import SignModal from "./sign/SignModal";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  Button
} from "reactstrap";

class NavigationBar extends Component {
  state = {
    isOpen: false,
  };

  signModal = React.createRef();

  render() {
    let { userData } = this.props;
    return (
      <section className="navbar-fixed-left">
        <Navbar expand="md" dark>
          <Container>
            <NavLink className="navbar-header" to="/"><i className="fas fa-compact-disc"/> Music List
              {userData && (
                <div className="navbar-welcome">
                  Hello {userData.name}
                </div>
              )}
            </NavLink>
            <NavbarToggler onClick={() => { this.toggle() }} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="navbar-top-links">
                <NavItem>
                  <NavLink activeClassName="active__link" to="/home">
                    <i className="fas fa-home"/> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink activeClassName="active__link" to="/search">
                    <i className="fas fa-search"/> Search
                  </NavLink>
                </NavItem>
                {userData ? (
                  <NavItem>
                    <NavLink activeClassName="active__link" to="/favorites">
                      <i className="fas fa-bookmark"/> Favorites
                    </NavLink>
                  </NavItem>
                ) : (
                  <NavItem>
                    <a
                      activeClassName="active__link"
                      className="link-highlight"
                      onClick={() =>  this.signModal.current._toggleModal()}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="fas fa-bookmark"/> Favorites
                    </a>
                  </NavItem>
                )}
              </Nav>
              {!userData && (
                <Nav className="navbar-bottom-links">
                  <NavItem>
                    <NavLink activeClassName="active__link" to="/login">
                      <Button className="login-btn">Login</Button>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink activeClassName="active__link" to="/signup">
                      <Button className="signup-btn">Register</Button>
                    </NavLink>
                  </NavItem>
                </Nav>
              )}
            </Collapse>
          </Container>
        </Navbar>
        {!userData && (
          <SignModal
            ref={this.signModal}
            login={() => { this.props.history.push('/login') }}
            signup={() => { this.props.history.push('/signup') }}
          />)}
      </section>
    )
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}

function mapStateToProps(state) {
  return {
    userData: state.user.userSuccess
  };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ), withRouter
)(NavigationBar);