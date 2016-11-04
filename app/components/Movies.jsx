import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import MovieCard from './MovieCard';
import APIKeys from '../../.config';

const { url } = APIKeys;

const propTypes = {
  location: PropTypes.object,
  movieSearchTerm: PropTypes.string,
};

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      pages: 1,
    };
  }

  componentWillMount() {
    console.log('Movies - componentWillMount invoked: ', this.props.location.state.movieSearchTerm);
    this.fetchMoviesData(this.props.location.state.movieSearchTerm);
  }

  fetchMoviesData(movieSearch) {
    axios.get(`${url}${movieSearch}`)
      .then(response => this.setState({
        movies: response.data.results,
        pages: response.data.total_pages,
      }))
      .catch(error => console.log('axios get error is: ', error));
  }

  render() {
    const backButton = <Link to="/" className="back-button">Back</Link>;
    const header = this.props.location.state.movieSearchTerm;
    return (
      <div className="container">
        {backButton}
        <h1 className="movies-header">Results for {header}</h1>
        <div className="movies">
          {this.state.movies.map(movie => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    );
  }
}

Movies.propTypes = propTypes;

export default Movies;
