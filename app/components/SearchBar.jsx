import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleInputChange(e) {
    this.setState({ value: e.target.value });
  }

  handleButtonClick(e) {
    e.preventDefault();
    console.log('button clicked with value: ', this.state.value);
  }

  render() {
    return (
      <div className="search-bar">
        <form className="search-bar-form">
          <input
            className="search-bar-input"
            type="search"
            onChange={this.handleInputChange}
            value={this.state.value}
            placeholder="Search..."
          />
          <button
            className="search-bar-button"
            onClick={this.handleButtonClick}
          >
            Browse
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
