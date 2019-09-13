import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '../src';

test('Should render button', () => {
  const text = 'button';
  const { queryByTestId } = render(<Button>{text}</Button>);

  expect(queryByTestId('button')).toBeInTheDocument();
  expect(queryByTestId('button')).toHaveTextContent(text);
});

test('Should be disabled', () => {
  const { queryByTestId } = render(<Button disabled>disabled</Button>);

  expect(queryByTestId('button')).toHaveAttribute('disabled');
});
