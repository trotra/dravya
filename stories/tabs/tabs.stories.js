import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tabs } from '../../src';
import info from './info.md';

storiesOf('Tabs', module)
  .addParameters({
    component: Tabs,
    notes: {
      markdown: info
    }
  })
  .add('defaults', () => (
    <Tabs activeTab={1}>
      <Tabs.TabList>
        <Tabs.Tab tab={0}>Tab1</Tabs.Tab>
        <Tabs.Tab tab={1}>Tab2</Tabs.Tab>
        <Tabs.Tab tab={2} disabled>
          Tab3
        </Tabs.Tab>
      </Tabs.TabList>
      <Tabs.TabPanel tab={0}>Tab1 Content</Tabs.TabPanel>
      <Tabs.TabPanel tab={1}>Tab2 Content</Tabs.TabPanel>
      <Tabs.TabPanel tab={2}>Tab3 Content</Tabs.TabPanel>
    </Tabs>
  ))
  .add('at bottom', () => (
    <Tabs invertBorder>
      <Tabs.TabPanel tab={0}>Tab1 Content</Tabs.TabPanel>
      <Tabs.TabPanel tab={1}>Tab2 Content</Tabs.TabPanel>
      <Tabs.TabList>
        <Tabs.Tab tab={0}>Tab1</Tabs.Tab>
        <Tabs.Tab tab={1}>Tab2</Tabs.Tab>
      </Tabs.TabList>
    </Tabs>
  ))
  .add('at left', () => (
    <Tabs orientation="column">
      <Tabs.TabList>
        <Tabs.Tab tab={0}>Tab1</Tabs.Tab>
        <Tabs.Tab tab={1}>Tab2</Tabs.Tab>
      </Tabs.TabList>
      <Tabs.TabPanel tab={0}>Tab1 Content</Tabs.TabPanel>
      <Tabs.TabPanel tab={1}>Tab2 Content</Tabs.TabPanel>
    </Tabs>
  ))
  .add('at right', () => (
    <Tabs orientation="column" invertBorder>
      <Tabs.TabPanel tab={0}>Tab1 Content</Tabs.TabPanel>
      <Tabs.TabPanel tab={1}>Tab2 Content</Tabs.TabPanel>
      <Tabs.TabList>
        <Tabs.Tab tab={0}>Tab1</Tabs.Tab>
        <Tabs.Tab tab={1}>Tab2</Tabs.Tab>
      </Tabs.TabList>
    </Tabs>
  ))
  .add('sizes', () => [
    <Tabs size="small" key={0}>
      <Tabs.TabList>
        <Tabs.Tab tab={0}>Tab1</Tabs.Tab>
        <Tabs.Tab tab={1}>Tab2</Tabs.Tab>
      </Tabs.TabList>
      <Tabs.TabPanel tab={0}>Tab1 Content</Tabs.TabPanel>
      <Tabs.TabPanel tab={1}>Tab2 Content</Tabs.TabPanel>
    </Tabs>,
    <Tabs size="large" key={1}>
      <Tabs.TabList>
        <Tabs.Tab tab={0}>Tab1</Tabs.Tab>
        <Tabs.Tab tab={1}>Tab2</Tabs.Tab>
      </Tabs.TabList>
      <Tabs.TabPanel tab={0}>Tab1 Content</Tabs.TabPanel>
      <Tabs.TabPanel tab={1}>Tab2 Content</Tabs.TabPanel>
    </Tabs>
  ]);
