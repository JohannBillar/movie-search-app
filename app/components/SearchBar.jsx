import React, { PropTypes } from 'react';

const propTypes = {
  value: PropTypes.string,
  onFormSubmit: PropTypes.func,
  onInputChange: PropTypes.func,
};

function SearchBar(props) {
  return (
    <div className="search-bar">
      <form
        className="search-bar-form"
        onSubmit={props.onFormSubmit}
      >
        <input
          className="search-bar-input"
          type="search"
          onChange={props.onInputChange}
          value={props.value}
          placeholder="Search..."
        />
        <button
          className="search-bar-button"
          type="submit"
        >
          Browse
        </button>
      </form>
    </div>
  );
}

SearchBar.propTypes = propTypes;

export default SearchBar;
