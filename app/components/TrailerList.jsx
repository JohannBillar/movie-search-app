import React, { PropTypes } from 'react';
import TrailerListItem from './TrailerListItem';

const propTypes = {
  trailers: PropTypes.array.isRequired,
};

function TrailerList({ trailers }) {
  const movieTrailer = trailers.map(trailer => (
    <TrailerListItem
      trailer={trailer.key}
      key={trailer.id}
    />
    )
  );

  return (
    <div className="container">
      <div className="trailers">
        <ul>{movieTrailer}</ul>
      </div>
    </div>
  );
}

TrailerList.propTypes = propTypes;

export default TrailerList;
