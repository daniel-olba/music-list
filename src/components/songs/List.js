import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { compose } from "redux";
import {withRouter} from "react-router";

import {
  Row,
  Col
} from "reactstrap";

class List extends Component{

  render() {
    let { songs } = this.props;

    return(
      <section className="list-content">
        <Row>
          <Col xs={12} lg={12}>
            <h1>All songs</h1>
          </Col>
        </Row>
        <Row>
          {songs.map(song => {
            return (
              <Col xs={12} lg={12}>
                <i className="fas fa-music"/> &nbsp;
                <a
                  onClick={() => this._songDetails(song.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <strong>{song.title}</strong>
                  <p>{song.artist}</p>
                </a>
              </Col>
            )
          })}
        </Row>
      </section>
    )
  }

  _songDetails = id => {
    this.props.history.push("/song", { id });
  }
}

export default compose(
  connect(
    null,
    actions
  ), withRouter
)(List);