import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { ThemeProvider } from '../src';
import { theme } from '../src/theme';
import '../src/assets/font-glyphicons.scss';
import '../stories/baseStyles.scss';

addParameters({
  options: {
    theme: create({
      fontBase: 'sans-serif'
    })
  }
});

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

function loadStories() {
  const req = require.context('../stories', true, /(\.story\.js$)/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
