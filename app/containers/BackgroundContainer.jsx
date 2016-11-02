import React, { PropTypes, Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import defaultImage from '../images/camera-background.jpg';
import APIKeys from '../../.config';
import SearchBar from '../components/SearchBar';
import FullPageBackground from '../components/FullPageBackground';

const { APP_ID, APP_SECRET, CALLBACK_URL } = APIKeys;

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

  handleFormSubmit(e) {
    e.preventDefault();
    const path = '/movies';
    this.removeWindowResizeEventHandler();
    this.context.router.push({
      pathname: path,
      state: {
        movieSearchTerm: this.state.inputValue,
      },
    });
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
