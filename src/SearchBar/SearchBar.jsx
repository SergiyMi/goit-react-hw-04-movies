import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    value: '',
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.value) {
      return;
    }

    this.props.onSearch(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChange}
        ></input>
        <button type="submit">Search</button>
      </form>
    );
  }
}
