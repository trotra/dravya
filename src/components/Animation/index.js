import React from 'react';
import PropTypes from 'prop-types';
import { useRender } from './useRender';

function Animation({ children, show, ...props }) {
  const { render, onAnimationEnd } = useRender(show);

  return (
    render && (
      <div onAnimationEnd={onAnimationEnd} {...props}>
        {children}
      </div>
    )
  );
}

Animation.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool
};

export default Animation;
