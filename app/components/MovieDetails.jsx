import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import APIKeys from '../../.config';
import TrailerList from './TrailerList';
import BackButton from './BackButton';

const { key } = APIKeys;

const propTypes = {
  params: PropTypes.object,
};

class MovieDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trailers: [],
      trailersFound: false,
    };
  }

  componentWillMount() {
    axios.get(`http://api.themoviedb.org/3/movie/${this.props.params.id}/videos?api_key=${key}`)
      .then(response => this.setState({
        trailers: response.data.results.length > 0 ? response.data.results : [],
        trailersFound: response.data.results.length > 0,
      }))
      .catch(error => this.setState({
        trailersFound: error.response.status !== 404,
      }));
  }

  render() {
    console.log(this.props);
    if (this.state.trailersFound) {
      return (
        <div>
          <BackButton path="/" />
          <TrailerList trailers={this.state.trailers} />
        </div>
      );
    } else {
      return <div>No movie trailer found...</div>;
    }
  }
}

MovieDetailsPage.propTypes = propTypes;

export default MovieDetailsPage;
