import { createBottomTabNavigator } from 'react-navigation-tabs';

// components
import BottomTabBar from 'components/core/BottomTabBar';

// Sreeens
import TabGroup1 from './TabGroup1';
import TabGroup2 from './TabGroup2';
import TabGroup3 from './TabGroup3';

export const TAB_GROUPS = {
  GROUP1: 'Group1',
  GROUP2: 'Group2',
  GROUP3: 'Group3',
};

const BottomTabNavigator = createBottomTabNavigator(
  {
    [TAB_GROUPS.GROUP1]: {
      screen: TabGroup1,
    },
    [TAB_GROUPS.GROUP2]: {
      screen: TabGroup2,
    },
    [TAB_GROUPS.GROUP3]: {
      screen: TabGroup3,
    },
  },
  {
    initialRouteName: TAB_GROUPS.GROUP1,
    tabBarComponent: BottomTabBar,
  },
);

export default BottomTabNavigator;
