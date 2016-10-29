import React, { PropTypes, Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import defaultImage from '../images/camera-background.jpg';
import keyUnsplash from '../../.config';
import SearchBar from './SearchBar';

const { APP_ID, APP_SECRET, CALLBACK_URL } = keyUnsplash;

const unsplash = new Unsplash({
  applicationId: APP_ID,
  secret: APP_SECRET,
  callbackUrl: CALLBACK_URL,
});

const propTypes = {
  height: PropTypes.string,
};

class FullPageBackground extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      windowHeight: props.height,
    };

    this.handleWindowResize = this.handleWindowResize.bind(this);
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

  ComponentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleWindowResize);
    }
  }

  handleWindowResize() {
    this.setState({ windowHeight: window.innerHeight });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${this.state.url})`,
            height: this.state.windowHeight,
          }}
        />
      </div>
    );
  }
}

FullPageBackground.defaultProps = {
  windowHeight: '100%',
};

FullPageBackground.propTypes = propTypes;

export default FullPageBackground;
