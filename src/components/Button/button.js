import React from 'react';
import PropTypes from 'prop-types';
import { Button as StyledButton } from './style';

function Button({ children, ...props }) {
  return (
    <StyledButton {...props} onClick={props.disabled ? null : props.onClick} data-testid="button">
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  type: 'filled',
  size: 'default',
  shape: 'blunt',
  onClick: () => {}
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  type: PropTypes.oneOf(['filled', 'outline', 'dashed', 'link']),
  size: PropTypes.oneOf(['default', 'small', 'large']),
  shape: PropTypes.oneOf(['blunt', 'sharp', 'capsular', 'circle']),
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  onClick: PropTypes.func
};

export default Button;
