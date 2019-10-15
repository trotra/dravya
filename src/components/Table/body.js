import React from 'react';
import PropTypes from 'prop-types';

function Body(props) {
  return <tbody>{props.children}</tbody>;
}

Body.propTypes = {
  children: PropTypes.node.isRequired
};

export default Body;
