import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import {Col, Row} from "reactstrap";

class FavSong extends Component{
  state = {
    isLoading: true,
  };

  render() {
    // let { isLoading } = this.state;
    let { songs, details } = this.props;

    return(
      <div>
        {this._setFavs(details)}
      </div>
    )
  }

  _setFavs = data => {
    let details = this.props.songs.filter(song => {
      return song.id === data.songId
    });
    let { imgUrl, title, artist, year, webUrl, id } = details[0];
    console.log(details[0]);
    return (
      <Row className="fav-details-row">
        <Col xs={12} lg={3} md={3} style={{display: 'flex'}}>
          <img src={imgUrl}/>
        </Col>
        <Col xs={12} lg={9} md={9}>
          <Row>
            <Col xs={12} className="fav-details-text">
              <h1 style={{ fontWeight: 'bold' }}>{title}</h1>
              <p>By {artist} - {year}</p>
            </Col>
            <Col xs={12} className="fav-details-text">
              <i
                className="fas fa-heart"
                onClick={() => { this.props.deleteFav() }}
              />
              <p>More details <a href={webUrl} target="_blank">here</a></p>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  };

  // componentDidMount() {
  //   this.props.getDetails(this.props.details.songId, this._setIsLoading)
  // }
  //
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
    songs: state.songs.getSongsSuccess
  };
}

export default connect(
  mapStateToProps,
  actions
)(FavSong);