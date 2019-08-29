import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from '../src';

storiesOf('Icon', module)
  .addParameters({
    component: Icon
  })
  .add('default', () => <Icon name="leaf" />)
  .add('colored', () => <Icon name="leaf" color="blue" size={16} />)
  .add('clickable', () => <Icon name="leaf" onClick={() => {}} />)
  .add('disabled', () => <Icon name="leaf" disabled={true} onClick={() => {}} />);
