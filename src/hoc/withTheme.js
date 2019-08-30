import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../theme';

const mergeTheme = parentTheme => ({ ...theme, ...parentTheme });

export function withTheme(Component) {
  const Themed = React.forwardRef((props, ref) => {
    return (
      <ThemeProvider theme={mergeTheme}>
        <Component {...props} ref={ref} />
      </ThemeProvider>
    );
  });

  hoistNonReactStatics(Themed, Component);

  return Themed;
}
