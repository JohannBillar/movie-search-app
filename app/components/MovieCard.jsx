import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import img from '../images/coming-soon.png';

const propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
  overview: PropTypes.string,
};

function MovieCard(movie) {
  const imgURL = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : img;
  const year = movie.release_date ? parseInt(movie.release_date) : '';
  return (
    <Link to={`/movie_details/${movie.id}`}>
      <div className="movie-card">
        <img src={imgURL} className="movie-card-img" alt="poster" />
        <h3 className="movie-card-title">{movie.title}</h3>
        <div className="movie-card-year">{year}</div>
        <p className="movie-card-description">{movie.overview}</p>
      </div>
    </Link>
  );
}

MovieCard.propTypes = propTypes;

export default MovieCard;
