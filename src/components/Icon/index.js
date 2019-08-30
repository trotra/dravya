import React from 'react';
import PropTypes from 'prop-types';
import Themed from '../Themed';
import { StyledIcon } from './style';

function Icon({ name, ...props }) {
  return (
    <Themed>
      <StyledIcon
        className={`glyphicons glyphicons-${name}`}
        onClick={props.disabled ? null : props.onClick}
        data-testid="icon"
        {...props}
      />
    </Themed>
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
