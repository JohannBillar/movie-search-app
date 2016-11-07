import React, { PropTypes } from 'react';

const propTypes = {
  trailer: PropTypes.string.isRequired,
};

function TrailerListItem({ trailer }) {
  return (
    <li>
      <div className="ratio-wrapper">
        <iframe
          className="ratio-content"
          src={`https://www.youtube.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </li>
  );
}

TrailerListItem.propTypes = propTypes;

export default TrailerListItem;
