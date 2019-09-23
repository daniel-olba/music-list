import React, { Component } from "react";
import { connect } from "react-redux";

import NavigationBar from "../NavigationBar";
import List from "../songs/List";
import * as actions from "../../store/actions";

import {
  Row,
  Col
} from "reactstrap";

class Home extends Component{
  state = {
    isLoading: true,
  };

  render() {
    let { isLoading } = this.state;
    let { songs } = this.props;
    return (
      <Row className="content">
        <Col lg={2} md={2} sm={12} className="home-navbar"><NavigationBar/></Col>
        <Col lg={10} md={10} sm={12} className="home-list">
          {!isLoading ? (
            <List songs={songs}/>
          ) : (
            <div className="home-loading">
              <h5>Loading ...</h5>
            </div>
          )}
        </Col>
      </Row>
    );
  }

  componentDidMount() {
    this.props.getSongs(this._setIsLoading)
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
    songs: state.songs.getSongsSuccess
  };
}

export default connect(
  mapStateToProps,
  actions
)(Home);