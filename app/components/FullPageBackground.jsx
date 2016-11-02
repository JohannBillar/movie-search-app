import React, { PropTypes } from 'react';

const propTypes = {
  url: PropTypes.string,
  windowHeight: PropTypes.number,
};

function FullPageBackground(props) {
  return (
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${props.url})`,
        height: props.windowHeight,
      }}
    />
  );
}

FullPageBackground.propTypes = propTypes;

export default FullPageBackground;
