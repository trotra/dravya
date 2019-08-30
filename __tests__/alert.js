import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Alert } from '../src';

test('Should render message', () => {
  const message = 'Alert title';
  const { getByTestId, queryByTestId } = render(<Alert message={message} />);

  expect(getByTestId('message')).toHaveTextContent(message);
  expect(queryByTestId('description')).not.toBeInTheDocument();
  expect(queryByTestId('close')).not.toBeInTheDocument();
});

test('Should render message with description', () => {
  const message = 'Alert title';
  const description = 'alert description';
  const { getByTestId } = render(<Alert message={message} description={description} />);

  expect(getByTestId('message')).toHaveTextContent(message);
  expect(getByTestId('description')).toHaveTextContent(description);
});

test('Should render close Icon', () => {
  const message = 'Alert title';
  const { queryByTestId } = render(<Alert message={message} closable={true} />);
  const icon = queryByTestId('close');

  expect(icon).toBeInTheDocument();

  fireEvent.click(icon);

  expect(queryByTestId('alert')).not.toBeInTheDocument();
});
