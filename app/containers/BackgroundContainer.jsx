import React, { PropTypes, Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import axios from 'axios';
import defaultImage from '../images/camera-background.jpg';
import APIKeys from '../../.config';
import SearchBar from '../components/SearchBar';
import FullPageBackground from '../components/FullPageBackground';

const { APP_ID, APP_SECRET, CALLBACK_URL, url } = APIKeys;

const unsplash = new Unsplash({
  applicationId: APP_ID,
  secret: APP_SECRET,
  callbackUrl: CALLBACK_URL,
});

const propTypes = {
  height: PropTypes.string,
};

const defaultProps = {
  height: '100%',
};

const contextTypes = {
  router: PropTypes.object.isRequired,
};

class BackgroundContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      windowHeight: props.height,
      inputValue: '',
      movies: [],
      // pages: 1,
    };

    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentWillMount() {
    this.getRandomImage();
    this.handleWindowResize();
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.handleWindowResize);
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.movies.length > 0) {
      this.context.router.push({
        pathname: '/movies',
        state: {
          movies: nextState.movies,
          term: this.state.inputValue,
        },
      });
    }
  }

  getRandomImage() {
    unsplash.photos.getRandomPhoto({ width: 300, query: 'movie' })
      .then(toJson)
      .then(response => this.setState({ url: response.urls.full }))
      .catch(error => this.setState({ url: defaultImage }));
  }

  handleWindowResize() {
    this.setState({ windowHeight: window.innerHeight });
  }

  removeWindowResizeEventHandler() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleWindowResize);
    }
  }

  handleInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  fetchMoviesData(movieSearch) {
    axios.get(`${url}${movieSearch}`)
      .then(response => this.setState({
        movies: response.data.results,
        // pages: response.data.total_pages,
      }))
      .catch(error => console.log('axios get error is: ', error));
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.fetchMoviesData(this.state.inputValue);
  }

  render() {
    return (
      <div>
        <SearchBar
          onFormSubmit={this.handleFormSubmit}
          onInputChange={this.handleInputChange}
          value={this.state.inputValue}
        />
        <FullPageBackground
          url={this.state.url}
          windowHeight={this.state.windowHeight}
        />
      </div>
    );
  }
}

BackgroundContainer.propTypes = propTypes;
BackgroundContainer.defaultProps = defaultProps;
BackgroundContainer.contextTypes = contextTypes;

export default BackgroundContainer;
