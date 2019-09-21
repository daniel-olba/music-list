import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { compose } from "redux";
import {withRouter} from "react-router";

import {Col, Row} from "reactstrap";

class FavList extends Component{

  render() {
    let { favs } = this.props;
    let { id, songId } = favs;

    return(
      <section className="list-content">
        FavList
      </section>
    )
  }

  _setIsLoading = (boolean = false) => {
    this.setState(
      {
        isLoading: boolean
      }
    )
  };
}

export default  compose(
  connect(
    null,
    actions
  ), withRouter
)(FavList);