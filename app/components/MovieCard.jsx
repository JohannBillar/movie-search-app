import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import img from '../images/coming-soon.png';

const propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
  overview: PropTypes.string,
};

function MovieCard(props) {
  const imgURL = props.poster_path ? `https://image.tmdb.org/t/p/w500/${props.poster_path}` : img;
  const year = props.release_date ? parseInt(props.release_date) : '';
  return (
    <Link to="/movie_details">
      <div className="movie-card">
        <img src={imgURL} className="movie-card-img" alt="poster" />
        <h3 className="movie-card-title">{props.title}</h3>
        <div className="movie-card-year">{year}</div>
        <p className="movie-card-description">{props.overview}</p>
      </div>
    </Link>
  );
}

MovieCard.propTypes = propTypes;

export default MovieCard;
