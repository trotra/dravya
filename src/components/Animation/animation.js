import React from 'react';
import { useRender } from './useRender';

function Animation({ show, onEntered, onExited, ...props }, ref) {
  const { render, onAnimationEnd } = useRender(show);

  function handleAnimationEnd() {
    show ? onEntered && onEntered() : onExited && onExited();
    onAnimationEnd();
  }

  return (
    render && (
      <div onAnimationEnd={handleAnimationEnd} {...props} ref={ref}>
        {props.children}
      </div>
    )
  );
}

export default Animation;
