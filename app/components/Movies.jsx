import React, { Component, PropTypes } from 'react';
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
    return (
      <div className="container">
        <h1 className="movies-header">Header</h1>
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
