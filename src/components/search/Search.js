import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import NavigationBar from "../NavigationBar";
import SearchBar from "./SearchBar";

import {
  Row,
  Col
} from "reactstrap";
import List from "../songs/List";
import SignModal from "../sign/SignModal";

class Search extends Component{
  state = {
    isLoading: false,
    query: '',
    sort: 'artist'
  };

  render() {
    let { isLoading, query, sort } = this.state;
    let { songs } = this.props;
    return (
      <Row className="content">
        <Col lg={2} md={2} sm={12} className="home-navbar"><NavigationBar/></Col>
        <Col lg={10} md={10} sm={12} className="search-list">
          <SearchBar
            query={query}
            onSearch={(query) => { this._onSearch(query) }}
            onChange={(query) => { this._onChange(query) }}
          />
          {!isLoading ? (
            (songs.length !== 0 && query !== '') ? (
              <div className="search-results">
                {this._setSongs(songs)}
              </div>
            ) : (
              query === '' ? (
                <div className="search-no-results">
                  <h5>Start searching for results</h5>
                </div>
              ) : (
                <div className="search-no-results">
                  <h5>No search results found for '{query}'</h5>
                  <p>Please make sure your search is correct</p>
                </div>
              )
            )
          ) : (
            <div className="search-loading">
              <h5>Loading ...</h5>
            </div>
          )}
        </Col>
      </Row>
    );
  }

  _setSongs = songs => {
    let musics = [];
    songs.map(song => {
      let {imgUrl, title, artist, year} = song;
      musics.push(
        <Row className="search-details-row">
          <Col xs={12} lg={4} md={4}>
            <img src={imgUrl}/>
          </Col>
          <Col xs={12} lg={8} md={8}>
            <Row>
              <Col xs={12} className="search-details-text">
                <h2 style={{ fontWeight: 'bold' }}>{title}</h2>
                <p>By {artist} - {year}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      )
    });
    return musics;
  };

  _onSearch = q => {
    let { query, sort } = this.state;
    this.setState({ query: q, isLoading: true });
    this.props.getSongsSearch(query, sort, this._setIsLoading);
  };

  _onChange = q => {
    let { query, sort } = this.state;
    this.setState({ query: q, isLoading: true });
    this.props.getSongsSearch(query, sort, this._setIsLoading);
  };

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
    songs: state.songsSearch.getSongsSearchSuccess
  };
}

export default connect(
  mapStateToProps,
  actions
)(Search);