import React from 'react';
import { ThemeProvider } from './src';
import { theme } from './src/theme';

export function withTheme(Component) {
  return props => (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  );
}
