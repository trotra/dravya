import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../theme';

const mergeTheme = parentTheme => ({ ...theme, ...parentTheme });

export default function Themed(props) {
  const children = typeof props.children === 'function' ? props.children() : props.children;

  return <ThemeProvider theme={mergeTheme}>{children}</ThemeProvider>;
}
