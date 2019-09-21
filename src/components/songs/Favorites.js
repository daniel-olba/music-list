import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import NavigationBar from "../NavigationBar";
import {Col, Row} from "reactstrap";
import FavList from "./FavList";

class Favorites extends Component{
  state = {
    isLoading: true,
  };

  render() {
    let { favorites } = this.props;
    let { isLoading } = this.state;

    return (
      <Row className="content">
        <Col lg={2} md={2} sm={12} className="home-navbar"><NavigationBar/></Col>
        <Col lg={10} md={10} sm={12} className="home-list">
          {!isLoading ? (
            <FavList favs={favorites}/>
          ) : (
            <h5>Loading ...</h5>
          )}
        </Col>
      </Row>
    );
  }

  componentDidMount() {
    this.props.getFavorites(this._setIsLoading)
  }

  _setIsLoading = (boolean = false) => {
    this.setState(
      {
        isLoading: boolean
      }
    )
  };
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites.getFavoritesSuccess
  };
}

export default connect(
  mapStateToProps,
  actions
)(Favorites);