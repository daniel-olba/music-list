import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import NavigationBar from "../NavigationBar";
import SignModal from "../sign/SignModal";
import {Col, Row} from "reactstrap";

class Song extends Component{
  state = {
    isLoading: true,
  };

  signModal = React.createRef();

  render() {
    let { isLoading } = this.state;
    let { userData, songDetails } = this.props;
    let { imgUrl, title, artist, year, webUrl } = songDetails;

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
                    <i
                      className="far fa-heart"
                      onClick={() => {
                        if (!userData) {
                          this.signModal.current._toggleModal();
                        }
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              {!userData && (<SignModal ref={this.signModal}/>)}
            </Row>
          ) : (
            <h5>Loading ...</h5>
          )}
        </Col>
      </Row>
    )
  }

  _setIsLoading = (boolean = false) => {
    this.setState(
      {
        isLoading: boolean
      }
    )
  };

  componentDidMount() {
    let id = this.props.location.state.id;
    this.props.getDetails(id, this._setIsLoading);
  }
}

function mapStateToProps(state) {
  return {
    songDetails: state.songDetails.getDetailsSuccess,
    userData: state.signin.signinSuccess
  };
}

export default connect(
  mapStateToProps,
  actions
)(Song);