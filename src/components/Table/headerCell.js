import React from 'react';
import PropTypes from 'prop-types';
import { TH } from './style';

function HeaderCell(props) {
  return (
    <TH as="th" align={props.align} colSpan={props.colspan} rowSpan={props.rowspan}>
      {props.children}
    </TH>
  );
}

HeaderCell.defaultProps = {
  align: 'left'
};

HeaderCell.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  colspan: PropTypes.number,
  rowspan: PropTypes.number
};

export default HeaderCell;
