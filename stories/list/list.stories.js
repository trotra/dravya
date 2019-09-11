import React from 'react';
import { storiesOf } from '@storybook/react';
import { List } from '../../src';
import info from './info.md';

storiesOf('List', module)
  .addParameters({
    component: List,
    notes: {
      markdown: info
    }
  })
  .add('row', () => (
    <List>
      <List.Item>List1</List.Item>
      <List.Item>List2</List.Item>
      <List.Item disabled>List3</List.Item>
    </List>
  ))
  .add('column', () => (
    <List orientation="column">
      <List.Item>List1</List.Item>
      <List.Item>List2</List.Item>
    </List>
  ));
