/* eslint react/prop-types: 0 */
/* eslint no-unused-vars: 0 */

import '@testing-library/jest-dom/extend-expect';

jest.mock('./src/components/Animation', () => {
  const React = require('react');

  return React.forwardRef(({ show, onEntered, onExited, ...props }, ref) =>
    show ? (
      <div {...props} ref={ref}>
        {props.children}
      </div>
    ) : null
  );
});
