import React from 'react';
import PropTypes from 'prop-types';
import { Mask as StyledMask } from './style';

function Mask(props) {
  return <StyledMask onClick={props.onClick} show={props.show} data-testid="mask" />;
}

Mask.defaultProps = {
  onClick: () => {}
};

Mask.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func
};

export default Mask;
