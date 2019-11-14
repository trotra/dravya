import React from 'react';
import { render } from '@testing-library/react';
import { Table } from '../src';

test('Should render table', () => {
  const { getByTestId } = render(
    <Table>
      <Table.Head>
        <Table.Row id="head1">
          <Table.TH>Column1</Table.TH>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row id="row1">
          <Table.TD>Data1</Table.TD>
        </Table.Row>
      </Table.Body>
    </Table>
  );

  expect(getByTestId('table')).toBeInTheDocument();
});

test('Should have row disabled', () => {
  const { getByTestId } = render(
    <Table>
      <Table.Head>
        <Table.Row id="head1">
          <Table.TH>Column1</Table.TH>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row disabled id="row1">
          <Table.TD>Data1</Table.TD>
        </Table.Row>
      </Table.Body>
    </Table>
  );

  expect(getByTestId('row1')).toHaveAttribute('disabled');
});
