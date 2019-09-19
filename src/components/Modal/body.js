import React from 'react';
import PropTypes from 'prop-types';
import { Body as StyledBody } from './style';

function Body({ children }) {
  return <StyledBody tabIndex={0}>{children}</StyledBody>;
}

Body.propTypes = {
  children: PropTypes.node
};

export default Body;
