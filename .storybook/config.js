import { configure, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import '../src/assets/font-glyphicons.scss';
import '../stories/baseStyles.scss';

addParameters({
  options: {
    theme: create({
      fontBase: 'sans-serif'
    })
  }
});

function loadStories() {
  const req = require.context('../stories', true, /(\.stories\.js$)/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
