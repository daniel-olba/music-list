import React, { Component } from "react";

import { Input } from "reactstrap";

class SearchBar extends Component {
  state = {
    query: "",
  };

  render() {
    let { query } = this.state;

    return (
      <div className="searchBar" style={{width: window.innerWidth}}>
        <Input
          type="search"
          name="search"
          placeholder="Search for ..."
          autoComplete="off"
          onKeyDown={e => { this.props.onSearch(e.target.value )}}
          onChange={e => {
            this.setState({ query: e.target.value });
            this.props.onChange(e.target.value);
          }}
          value={query}
        />
      </div>
    );
  }
}

export default SearchBar;