import React from 'react';
import PropTypes from 'prop-types';
import { Row as StyledRow } from './style';

function Row(props) {
  return (
    <StyledRow key={props.id} disabled={props.disabled} data-testid={props.id}>
      {props.children}
    </StyledRow>
  );
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export default Row;
