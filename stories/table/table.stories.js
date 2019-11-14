import React from 'react';
import { storiesOf } from '@storybook/react';
import { Table } from '../../src';
import info from './info.md';

storiesOf('Table', module)
  .addParameters({
    component: Table,
    notes: {
      markdown: info
    }
  })
  .add('default', () => (
    <Table>
      <Table.Head>
        <Table.Row id="head1">
          <Table.TH>Column1</Table.TH>
          <Table.TH align="right">Column2</Table.TH>
          <Table.TH>Column3</Table.TH>
          <Table.TH align="center">Column4</Table.TH>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row id="row1">
          <Table.TD>Data1</Table.TD>
          <Table.TD align="right">Data2</Table.TD>
          <Table.TD>Data3</Table.TD>
          <Table.TD align="center">Data4</Table.TD>
        </Table.Row>
        <Table.Row disabled id="row2">
          <Table.TD>Data1</Table.TD>
          <Table.TD align="right">Data2</Table.TD>
          <Table.TD>Data3</Table.TD>
          <Table.TD align="center">Data4</Table.TD>
        </Table.Row>
      </Table.Body>
    </Table>
  ))
  .add('column grouping', () => (
    <Table>
      <Table.Head>
        <Table.Row id="head1">
          <Table.TH colspan={2} align="center">
            Column1
          </Table.TH>
          <Table.TH rowspan={2}>Column2</Table.TH>
          <Table.TH rowspan={2}>Column3</Table.TH>
        </Table.Row>
        <Table.Row id="head2">
          <Table.TH>Column1</Table.TH>
          <Table.TH>Column2</Table.TH>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row id="row1">
          <Table.TD>Data1</Table.TD>
          <Table.TD>Data2</Table.TD>
          <Table.TD>Data3</Table.TD>
          <Table.TD>Data4</Table.TD>
        </Table.Row>
        <Table.Row disabled id="row2">
          <Table.TD>Data1</Table.TD>
          <Table.TD>Data2</Table.TD>
          <Table.TD>Data3</Table.TD>
          <Table.TD>Data4</Table.TD>
        </Table.Row>
      </Table.Body>
    </Table>
  ));
