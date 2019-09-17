import React from 'react';
import PropTypes from 'prop-types';
import { Footer as StyledFooter } from './style';

function Footer({ children, align }) {
  return <StyledFooter align={align}>{children}</StyledFooter>;
}

Footer.defaultProps = {
  align: 'end'
};

Footer.propTypes = {
  children: PropTypes.node,
  align: PropTypes.oneOf(['start', 'end'])
};

export default Footer;
