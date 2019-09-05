import { withTheme } from '../../hoc/withTheme';
import Tabs from './tabs';
import { TabList, Tab } from './tabHeader';
import TabPanel from './tabPanel';

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;

export default withTheme(Tabs);
