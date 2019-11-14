import React from 'react';
import PropTypes from 'prop-types';
import { Table as StyledTable } from './style';

function Table(props) {
  return <StyledTable data-testid="table">{props.children}</StyledTable>;
}

Table.propTypes = {
  children: PropTypes.node.isRequired
};

export default Table;
