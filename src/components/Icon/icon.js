import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from './style';

function Icon({ name, ...props }) {
  return (
    <StyledIcon
      className={`glyphicons glyphicons-${name}`}
      onClick={props.disabled ? null : props.onClick}
      data-testid="icon"
      {...props}
    />
  );
}

Icon.defaultProps = {
  disabled: false
};

Icon.propTypes = {
  /** glyphicons icon name without "glyphicons-"  */
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default Icon;
