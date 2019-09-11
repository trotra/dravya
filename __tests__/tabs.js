import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tabs } from '../src';

function renderTabs() {
  return render(
    <Tabs defaultTabIndex={0}>
      <Tabs.TabList>
        <Tabs.Tab tab={0}>Tab1</Tabs.Tab>
        <Tabs.Tab tab={1}>Tab2</Tabs.Tab>
        <Tabs.Tab tab={2} disabled>
          Tab3
        </Tabs.Tab>
      </Tabs.TabList>
      <>
        <Tabs.TabPanel tab={0}>Tab1 Content</Tabs.TabPanel>
        <Tabs.TabPanel tab={1}>Tab2 Content</Tabs.TabPanel>
        <Tabs.TabPanel tab={2}>Tab3 Content</Tabs.TabPanel>
      </>
    </Tabs>
  );
}

test('Should render tabs', () => {
  const { getByTestId } = renderTabs();

  expect(getByTestId('tab-0')).toHaveTextContent('Tab1');
  expect(getByTestId('tab-2')).toHaveAttribute('disabled');
  expect(getByTestId('tab-content')).toHaveTextContent('Tab1 Content');

  fireEvent.click(getByTestId('tab-1'));

  expect(getByTestId('tab-content')).toHaveTextContent('Tab2 Content');

  fireEvent.click(getByTestId('tab-2'));

  expect(getByTestId('tab-content')).toHaveTextContent('Tab2 Content');
});
