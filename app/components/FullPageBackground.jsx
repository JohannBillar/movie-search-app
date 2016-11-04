import React, { PropTypes } from 'react';

const propTypes = {
  url: PropTypes.string,
  windowHeight: PropTypes.number,
};

function FullPageBackground({ url, windowHeight }) {
  return (
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${url})`,
        height: windowHeight,
      }}
    />
  );
}

FullPageBackground.propTypes = propTypes;

export default FullPageBackground;
