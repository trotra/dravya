import React from 'react';
import PropTypes from 'prop-types';

function Head(props) {
  return <thead>{props.children}</thead>;
}

Head.propTypes = {
  children: PropTypes.node.isRequired
};

export default Head;
