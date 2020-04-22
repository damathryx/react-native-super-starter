import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

import { ROOT_SCREENS } from 'screens';
import SignInView from './SignIn.view';

const SignInContainer: NavigationStackScreenComponent = props => {
  const onSubmit = () => {
    props.navigation.navigate(ROOT_SCREENS.MAIN);
  };

  const viewProps = {
    onSubmit,
  };
  return <SignInView {...viewProps} />;
};

SignInContainer.navigationOptions = {
  title: 'Sign In',
};

export default SignInContainer;
