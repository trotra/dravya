import React from 'react';
import PropTypes from 'prop-types';
import { useTabContext } from './tabs';
import { Content } from './style';

function TabPanel({ children, tab }) {
  const { activeIndex } = useTabContext();

  if (activeIndex === tab) {
    return <Content data-testid="tab-content">{children}</Content>;
  }

  return null;
}

TabPanel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  tab: PropTypes.number.isRequired
};

export default TabPanel;
