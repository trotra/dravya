import React from 'react';
import PropTypes from 'prop-types';
import { Group as StyledGroup } from './style';

function Group({ children }) {
  return <StyledGroup>{children}</StyledGroup>;
}

Group.propTypes = {
  children: PropTypes.node
};

export default Group;
