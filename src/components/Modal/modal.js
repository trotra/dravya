import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Mask from '../Mask';
import { Wrapper, Modal as StyledModal } from './style';

const Context = React.createContext();

function Modal({ children, centered, open, onHide }) {
  const value = {
    onHide
  };

  function handleClick(e) {
    if (e.target === e.currentTarget) {
      onHide && onHide();
    }
  }

  return (
    <>
      <Mask show={open} />
      <Wrapper centered={centered} onClick={handleClick} show={open} data-testid="modal">
        <StyledModal centered={centered} show={open}>
          <Context.Provider value={value}>{children}</Context.Provider>
        </StyledModal>
      </Wrapper>
    </>
  );
}

function useModalContext() {
  return useContext(Context);
}

Modal.propTypes = {
  children: PropTypes.node,
  centered: PropTypes.bool,
  open: PropTypes.bool,
  onHide: PropTypes.func
};

export default Modal;
export { useModalContext };
