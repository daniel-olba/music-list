import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../store/actions";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

class NavigationBar extends Component {
  state = {
    isOpen: true,
  };

  render() {
    return (
      <section className="navigation fixed-left">
        <Navbar color="light" expand="md">
          <NavbarBrand>
            <NavLink to="/">
              Music List
            </NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto align-items-center" navbar>
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
          </Collapse>
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

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  withRouter
)(NavigationBar);