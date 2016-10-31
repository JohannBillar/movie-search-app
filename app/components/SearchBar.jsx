import React, { Component } from 'react';

const contextTypes = {
  router: React.PropTypes.object.isRequired,
};

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
    const path = '/movies';
    this.context.router.push(path);
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

SearchBar.contextTypes = contextTypes;

export default SearchBar;
