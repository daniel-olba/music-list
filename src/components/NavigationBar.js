import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import { NavLink } from "react-router-dom";

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

  render() {
    return (
      <section className="navbar-fixed-left">
        <Navbar expand="md" dark>
          <Container>
            <NavLink className="navbar-header" to="/"><i className="fas fa-compact-disc"/> Music List</NavLink>
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
                <NavItem>
                  <NavLink activeClassName="active__link" to="/favorites">
                    <i className="fas fa-bookmark"/> Favorites
                  </NavLink>
                </NavItem>
              </Nav>
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
            </Collapse>
          </Container>
        </Navbar>
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
    userData: state.signin.signinSuccess
  };
}

export default connect(
  mapStateToProps,
  actions
)(NavigationBar);