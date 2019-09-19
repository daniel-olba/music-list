import React, { Component } from "react";
import { connect } from "react-redux";

import NavigationBar from "../NavigationBar";
import * as actions from "../../store/actions";


class Home extends Component{
  state = {
    isLoading: true,
  };

  render() {
    let { isLoading } = this.state;
    let { songs } = this.props;
    return (
      <div>
        <NavigationBar/>
        {!isLoading ? (
          // songs.map(song => {
          //   return (
          //     <p>Hello World</p>
          //   )
          // })
          <div className="container-fluid">
            Home
          </div>
        ) : (
          <h5>Loading ...</h5>
        )}
      </div>
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