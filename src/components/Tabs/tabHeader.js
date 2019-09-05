import React from 'react';
import PropTypes from 'prop-types';
import { useTabContext } from './tabs';
import { TabList as StyledList, Tab as StyledTab } from './style';

function TabList({ children }) {
  const { orientation, invertBorder } = useTabContext();

  return (
    <StyledList orientation={orientation} invertBorder={invertBorder}>
      {children}
    </StyledList>
  );
}

function Tab({ children, tab, disabled }) {
  const { activeIndex, onTabChange, orientation, invertBorder, size } = useTabContext();
  const isActive = activeIndex === tab;

  return (
    <StyledTab
      isActive={isActive}
      disabled={disabled}
      orientation={orientation}
      invertBorder={invertBorder}
      size={size}
      onClick={e => !disabled && onTabChange(e, tab)}
      data-testid={`tab-${tab}`}
    >
      {children}
    </StyledTab>
  );
}

TabList.propTypes = {
  children: PropTypes.node.isRequired
};

Tab.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  tab: PropTypes.number.isRequired,
  disabled: PropTypes.bool
};

export { TabList, Tab };
