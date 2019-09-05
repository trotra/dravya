import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Tabs as StyledTabs } from './style';

const Context = React.createContext();

function Tabs({ activeTab, orientation, invertBorder, size, children, onChange }) {
  const [activeIndex, setActiveIndex] = useState(activeTab);
  const value = {
    activeIndex,
    orientation,
    invertBorder,
    size,
    onTabChange(e, tab) {
      onChange && onChange(activeTab, tab, e);
      setActiveIndex(tab);
    }
  };

  return (
    <StyledTabs orientation={orientation}>
      <Context.Provider value={value}>{children}</Context.Provider>
    </StyledTabs>
  );
}

function useTabContext() {
  return useContext(Context);
}

Tabs.defaultProps = {
  activeTab: 0,
  orientation: 'row',
  size: 'default'
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  activeTab: PropTypes.number,
  orientation: PropTypes.oneOf(['row', 'column']),
  invertBorder: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'small', 'large']),
  /** function(prevTabIndex, nextTabIndex, event) */
  onChange: PropTypes.func
};

export default Tabs;
export { useTabContext };
