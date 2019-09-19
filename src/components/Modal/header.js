import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { useModalContext } from './modal';
import { Header as StyledHeader, Title } from './style';

function Header({ children, hideClose }) {
  const { onHide } = useModalContext();

  return (
    <StyledHeader>
      <Title>{children}</Title>
      {!hideClose && <Icon name="remove" size={16} onClick={onHide} />}
    </StyledHeader>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  hideClose: PropTypes.bool
};

export default Header;
