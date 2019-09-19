import React from 'react';
import PropTypes from 'prop-types';
import { Mask as StyledMask } from './style';

function Mask({ show, onClick }) {
  return <StyledMask onClick={onClick} show={show} data-testid="mask" />;
}

Mask.defaultProps = {
  onClick: () => {}
};

Mask.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func
};

export default Mask;
