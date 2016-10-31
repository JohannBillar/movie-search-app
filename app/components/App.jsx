import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.object,
};

function App(props) {
  return <div>{props.children}</div>;
}

App.propTypes = propTypes;

export default App;
