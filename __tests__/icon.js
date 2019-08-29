import React from 'react';
import { render } from '@testing-library/react';
import { Icon } from '../src';

test('Should render icon', () => {
  const { queryByTestId } = render(<Icon name="leaf" />);

  expect(queryByTestId('icon')).toBeInTheDocument();
});

test('Should render with disabled', () => {
  const { getByTestId } = render(<Icon name="leaf" disabled={true} />);

  expect(getByTestId('icon')).toHaveAttribute('disabled');
});
