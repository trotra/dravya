import React from 'react';
import PropTypes from 'prop-types';
import { TD } from './style';

function DataCell(props) {
  return (
    <TD as="td" align={props.align}>
      {props.children}
    </TD>
  );
}

DataCell.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  colspan: PropTypes.number
};

export default DataCell;
