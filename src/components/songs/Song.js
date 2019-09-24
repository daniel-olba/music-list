import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import NavigationBar from "../NavigationBar";
import SignModal from "../sign/SignModal";
import {Col, Row} from "reactstrap";
import Loader from "react-loader-spinner";

class Song extends Component{
  state = {
    isLoading: true,
  };

  signModal = React.createRef();

  render() {
    let { isLoading } = this.state;
    let { userData, songDetails, favorites } = this.props;
    let { imgUrl, title, artist, year, webUrl, id } = songDetails;

    return(
      <Row className="content">
        <Col lg={3} md={3} sm={12} className="home-navbar"><NavigationBar/></Col>
        <Col lg={9} md={9} sm={12} className="song-details">
          {!isLoading ? (
            <Row className="details-row">
              <Col xs={12} lg={4}>
                <img src={imgUrl}/>
              </Col>
              <Col xs={12} lg={8}>
                <Row>
                  <Col xs={12} className="details-text">
                    <h1 style={{ fontWeight: 'bold' }}>{title}</h1>
                    <p>By {artist} - {year}</p>
                  </Col>
                  <Col xs={12} className="details-text">
                    {!userData ? (
                      <i
                        className="far fa-heart"
                        onClick={() => { this.signModal.current._toggleModal() }}
                      />
                    ) : (
                      favorites.length === 0 ? (
                        <i
                          className="far fa-heart"
                          onClick={() => {
                            let formData = {
                              songId: id
                            };
                            this._setIsLoading(true);
                            this.props.addFavorite(formData, () => {
                              this.props.getFavorites(this._setIsLoading)
                            });
                          }}
                        />
                      ) : (
                        this._setFavIcon(favorites)
                      )
                    )}
                      <p>More details <a href={webUrl} target="_blank">here</a></p>
                  </Col>
                </Row>
              </Col>
              {!userData && (
                <SignModal
                  ref={this.signModal}
                  login={() => { this.props.history.push('/login') }}
                  signup={() => { this.props.history.push('/signup') }}
                />)}
            </Row>
          ) : (
            <div className="details-loading">
              <Loader
                type="ThreeDots"
                color="#212529"
                height={100}
                width={100}
                timeout={3000}
              />
            </div>
          )}
        </Col>
      </Row>
    )
  }

  _setFavIcon = data => {
    let { id } = this.props.songDetails;
    let favs = data.filter(fav => {
      return fav.songId === id;
    });
    if (favs.length !== 0) {
      return (
        <i
          className="fas fa-heart"
          onClick={() => {
            let formData = {
              songId: id
            };
            this._setIsLoading(true);
            this.props.deleteFavorite(formData, () => {
              this.props.getFavorites(this._setIsLoading)
            });
          }}
        />
      )
    } else {
      return (
        <i
          className="far fa-heart"
          onClick={() => {
            let formData = {
              songId: id
            };
            this._setIsLoading(true);
            this.props.addFavorite(formData, () => {
              this.props.getFavorites(this._setIsLoading)
            });
          }}
        />
      )
    }
  };

  _setIsLoading = (boolean = false) => {
    this.setState(
      {
        isLoading: boolean
      }
    )
  };

  componentDidMount() {
    let id = this.props.location.state.id;
    let { userData } = this.props;
    {userData && this.props.getFavorites()}
    this.props.getDetails(id, this._setIsLoading);
  }
}

function mapStateToProps(state) {
  return {
    songDetails: state.songDetails.getDetailsSuccess,
    userData: state.user.userSuccess,
    favorites: state.favorites.getFavoritesSuccess
  };
}

export default connect(
  mapStateToProps,
  actions
)(Song);