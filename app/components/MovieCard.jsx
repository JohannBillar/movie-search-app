import React from 'react';
import { Link } from 'react-router';

function MovieCards() {
  return (
    <div className="container">
      <Link to="/movie_details"><li>Movie Card</li></Link>
      <Link to="/movie_details"><li>Movie Card</li></Link>
      <Link to="/movie_details"><li>Movie Card</li></Link>
      <Link to="/movie_details"><li>Movie Card</li></Link>
      <Link to="/movie_details"><li>Movie Card</li></Link>
    </div>
  );
}

export default MovieCards;
