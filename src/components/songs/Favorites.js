import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import NavigationBar from "../NavigationBar";
import {Col, Row} from "reactstrap";
import FavSong from "./FavSong";

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
            favorites.length !== 0 ? (
              <section className="list-content">
                <Row>
                  {this._setFavSongs(favorites)}
                </Row>
              </section>
            ) : (
              <div className="fav-no-results">
                <h5>You don't have any songs added to your favorites</h5>
                <p>To add one go to the home page</p>
              </div>
            )
          ) : (
            <div className="fav-loading">
              <h5>Loading ...</h5>
            </div>
          )}
        </Col>
      </Row>
    );
  }

  _setFavSongs = data => {
    let favs = [];
    data.map(fav => {
      favs.push(
        <Col xs={12} lg={12}>
          <FavSong
            details={fav}
            deleteFav={() => {
              let formData = {
                songId: fav.songId
              };
              this._setIsLoading(true);
              this.props.deleteFavorite(formData, () => {
                this.props.getFavorites(this._setIsLoading)
              });
            }}
          />
        </Col>
      )
    });
    return favs;
  };

  componentDidMount() {
    !this.props.userData ? this.props.history.push('/home') : this.props.getFavorites(this._setIsLoading)
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
    userData: state.user.userSuccess,
    favorites: state.favorites.getFavoritesSuccess
  };
}

export default connect(
  mapStateToProps,
  actions
)(Favorites);