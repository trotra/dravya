import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import Mask from '../Mask';
import { Wrapper, Modal as StyledModal } from './style';

const Context = React.createContext();

function Modal(props) {
  const wrapperRef = useRef(null);
  const value = {
    onHide: props.onHide
  };

  function onEntered() {
    wrapperRef.current.focus();
  }

  function onOutsideClick(e) {
    e.target === e.currentTarget && props.onHide();
  }

  function onKeyDown(e) {
    e.keyCode === 27 && props.onHide();
  }

  return (
    <>
      <Mask show={props.open} />
      <Wrapper
        tabIndex={-1}
        centered={props.centered}
        onClick={!props.maskClosable ? null : onOutsideClick}
        onKeyDown={!props.keyboard ? null : onKeyDown}
        show={props.open}
        ref={wrapperRef}
        onEntered={onEntered}
        data-testid="modal"
      >
        <StyledModal centered={props.centered} show={props.open} width={props.width}>
          <Context.Provider value={value}>{props.children}</Context.Provider>
        </StyledModal>
      </Wrapper>
    </>
  );
}

function useModalContext() {
  return useContext(Context);
}

Modal.defaultProps = {
  open: false,
  onHide: () => {},
  maskClosable: true,
  width: 512,
  keyboard: true
};

Modal.propTypes = {
  children: PropTypes.node,
  centered: PropTypes.bool,
  open: PropTypes.bool,
  onHide: PropTypes.func,
  /** Whether to close the modal dialog when the mask is clicked */
  maskClosable: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Close the modal when escape is pressed */
  keyboard: PropTypes.bool
};

export default Modal;
export { useModalContext };
