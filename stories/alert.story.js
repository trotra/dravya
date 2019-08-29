import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Alert } from '../src';

storiesOf('Alert', module)
  .addParameters({
    component: Alert
  })
  .add('types', () => (
    <Fragment>
      <Alert message="Info Text" />
      <Alert message="Success Text" type="success" />
      <Alert message="Warning Text" type="warning" />
      <Alert message="Error Text" type="error" />
    </Fragment>
  ))
  .add('description', () => <Alert message="Success Text" description="Success description text" type="success" />)
  .add('closable', () => (
    <Alert message="Success Text" closable={true} onClose={() => console.log('closed')} type="success" />
  ));