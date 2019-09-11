import React from 'react';
import PropTypes from 'prop-types';
import { Item as StyledItem } from './style';

function Item({ className, ...props }) {
  return (
    <StyledItem className={className} {...props}>
      {props.children}
    </StyledItem>
  );
}

Item.defaultProps = {
  size: 'default',
  isActive: false,
  disabled: false
};

Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['default', 'small', 'large']),
  isActive: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Item;
