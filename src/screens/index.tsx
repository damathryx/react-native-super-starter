import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Auth from './Auth';
import Main from './Main';

export const ROOT_SCREENS = {
  MAIN: 'Main',
  AUTH: 'Auth',
};

const RootStack = createSwitchNavigator({
  [ROOT_SCREENS.AUTH]: {
    screen: Auth,
  },
  [ROOT_SCREENS.MAIN]: {
    screen: Main,
  },
});

export default createAppContainer(RootStack);
