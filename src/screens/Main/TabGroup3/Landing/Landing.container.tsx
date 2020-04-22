import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { SCREENS } from 'screens/Auth';
import LandingView from './Landing.view';

const LandingContainer: NavigationStackScreenComponent = props => {
  const goToSignIn = () => {
    props.navigation.navigate(SCREENS.SIGNIN);
  };
  const goToSignUp = () => {
    props.navigation.navigate(SCREENS.SIGNUP);
  };
  const viewProps = {
    ...props,
    goToSignIn,
    goToSignUp,
  };

  return <LandingView {...viewProps} />;
};

export default LandingContainer;
