import { createStackNavigator } from 'react-navigation-stack';

// Sreeens
import navigationOptions from 'utils/navigationOptions';
import Landing from './Landing/Landing.container';

export const SCREENS = {
  LANDING: 'Landing',
};

export default createStackNavigator({
  [SCREENS.LANDING]: {
    screen: Landing,
    navigationOptions,
  },
});
