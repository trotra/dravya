import { keyframes } from '@emotion/core';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const moveDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -50px , 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0;
  }
`;

export const moveUp = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0 , 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -50px, 0);
  }
`;
