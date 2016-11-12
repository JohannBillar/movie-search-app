import React, { PropTypes } from 'react';
import MovieCard from './MovieCard';
import BackButton from './BackButton';

const propTypes = {
  location: PropTypes.object.isRequired,
};

function Movies(props) {
  console.log('Movies component: ', props.location.state);
  const params = props.location.state || {};
  const { movies, term } = params;
  return (
    <div className="container">
      <BackButton path="/" />
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
