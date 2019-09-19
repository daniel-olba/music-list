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
  Container
} from "reactstrap";

class NavigationBar extends Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <section className="navbar-fixed-left">
        <Navbar expand="md">
          <Container>
            <NavLink className="navbar-header" to="/">Music List</NavLink>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" vertical>
                <NavItem>
                  <NavLink activeClassName="active__link" to="/home">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink activeClassName="active__link" to="/search">
                    Search
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink activeClassName="active__link" to="/favorites">
                    Favorites
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="fixed-bottom" vertical>
                <NavItem>
                  <NavLink activeClassName="active__link" to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink activeClassName="active__link" to="/signup">
                    Register
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