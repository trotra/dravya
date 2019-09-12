import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../../src';
import info from './info.md';

storiesOf('Button', module)
  .addParameters({
    component: Button,
    notes: {
      markdown: info
    }
  })
  .add('types', () => (
    <>
      <Button>Primary</Button>
      <Button type="outline">Outline</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
    </>
  ))
  .add('disabled', () => (
    <>
      <Button disabled>Primary</Button>
      <Button type="outline" disabled>
        Outline
      </Button>
      <Button type="dashed" disabled>
        Dashed
      </Button>
      <Button type="link" disabled>
        Link
      </Button>
    </>
  ))
  .add('size', () => (
    <>
      <Button size="small">Small</Button>
      <Button>Default</Button>
      <Button size="large">Large</Button>
    </>
  ))
  .add('shapes', () => (
    <>
      <Button shape="blunt">Blunt edge</Button>
      <Button shape="sharp">Sharp edge</Button>
      <Button shape="capsular">Capsular</Button>
      <Button shape="circle">C</Button>
    </>
  ))
  .add('block', () => <Button block>Primary</Button>)
  .add('group', () => (
    <>
      <div style={{ marginBottom: 10 }}>
        <Button.Group>
          <Button>Button1</Button>
          <Button>Button2</Button>
          <Button>Button3</Button>
        </Button.Group>
      </div>
      <div>
        <Button.Group>
          <Button type="outline">Button1</Button>
          <Button type="outline">Button2</Button>
          <Button type="outline">Button3</Button>
        </Button.Group>
      </div>
    </>
  ));
