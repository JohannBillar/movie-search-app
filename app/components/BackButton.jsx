import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  path: PropTypes.string,
};

function BackButton({ path }) {
  return (
    <Link to={path} className="back-button">Back</Link>
  );
}

BackButton.propTypes = propTypes;

export default BackButton;

