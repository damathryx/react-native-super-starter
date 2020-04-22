import { createStackNavigator } from 'react-navigation-stack';

// Sreeens
import navigationOptions from 'utils/navigationOptions';
import Landing from './Landing/Landing.container';
import SignIn from './SignIn/SignIn.container';
import SignUp from './SignUp/SignUp.container';

export const SCREENS = {
  LANDING: 'Landing',
  SIGNIN: 'SignIn',
  SIGNUP: 'SignUp',
  // @ScreenIdentifier
};

export default createStackNavigator({
  [SCREENS.LANDING]: {
    screen: Landing,
    navigationOptions,
  },
  [SCREENS.SIGNIN]: {
    screen: SignIn,
    navigationOptions,
  },
  [SCREENS.SIGNUP]: {
    screen: SignUp,
    navigationOptions,
  },
  // @ScreenEntry
});
