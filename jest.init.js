/* eslint react/prop-types: 0 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';

jest.mock('./src/components/Animation', () => ({ show, ...props }) =>
  show ? <div {...props}>{props.children}</div> : null
);
