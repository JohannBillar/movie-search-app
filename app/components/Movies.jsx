import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import MovieCard from './MovieCard';

const propTypes = {
  location: PropTypes.object.isRequired,
};

function Movies(props) {
  const params = props.location.state || {};
  const { movies, term } = params;
  const backButton = <Link to="/" className="back-button">Back</Link>;

  return (
    <div className="container">
      {backButton}
      <h1 className="movies-header">Results for {term}</h1>
      <div className="movies">
        {movies.map(movie => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

Movies.propTypes = propTypes;

export default Movies;
