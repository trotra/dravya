import React from 'react';
import { storiesOf } from '@storybook/react';
import { Alert } from '../../src';
import info from './info.md';

storiesOf('Alert', module)
  .addParameters({
    component: Alert,
    notes: {
      markdown: info
    }
  })
  .add('types', () => (
    <>
      <Alert message="Info Text" />
      <Alert message="Success Text" type="success" />
      <Alert message="Warning Text" type="warning" />
      <Alert message="Error Text" type="error" />
    </>
  ))
  .add('description', () => <Alert message="Success Text" description="Success description text" type="success" />)
  .add('closable', () => <Alert message="Success Text" closable={true} onClose={() => {}} type="success" />);
