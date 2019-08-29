import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../theme';

const mergeTheme = parentTheme => ({ ...theme, ...parentTheme });

export default function withTheme(Component) {
  const ThemedComp = props => (
    <ThemeProvider theme={mergeTheme}>
      <Component {...props} />
    </ThemeProvider>
  );

  ThemedComp.defaultProps = Component.defaultProps;
  ThemedComp.propTypes = Component.propTypes;

  return ThemedComp;
}
