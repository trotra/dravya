import React from 'react';
import PropTypes from 'prop-types';
import { List as StyledList } from './style';

function List({ className, ...props }) {
  return (
    <StyledList className={className} {...props}>
      {props.children}
    </StyledList>
  );
}

List.defaultProps = {
  orientation: 'row'
};

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  orientation: PropTypes.oneOf(['row', 'column'])
};

export default List;
