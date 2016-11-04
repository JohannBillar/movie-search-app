import React, { Component } from 'react';
import axios from 'axios';
import APIKeys from '../../.config';

const { key } = APIKeys;

class MovieDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trailer: {},
    };
  }

  componentWillMount() {
    axios.get(`http://api.themoviedb.org/3/movie/${this.props.params.id}/videos?api_key=${key}`)
      .then(response => this.setState({
        trailer: response.data.results[1].key ? response.data.results[1].key : {},
      }))
      .catch(error => console.log('axios get error is: ', error));
  }

  render() {
    console.log(this.state.trailer);
    return (
      <div className="trailer-container">
        <iframe src={`https://www.youtube-nocookie.com/embed/${this.state.trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder="0" allowFullScreen />
      </div>
    );
  }
}

MovieDetailsPage.propTypes = {
  params: React.PropTypes.func,
};

export default MovieDetailsPage;
