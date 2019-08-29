import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { withTheme } from 'test-utils';
import { Icon } from '../src';

const IconWithTheme = withTheme(Icon);

test('Should render icon', () => {
  const { queryByTestId } = render(<IconWithTheme name="leaf" />);

  expect(queryByTestId('icon')).toBeInTheDocument();
});

test('Should render with disabled', () => {
  const { getByTestId } = render(<IconWithTheme name="leaf" disabled={true} />);

  expect(getByTestId('icon').getAttribute('disabled')).toBe('');
});
