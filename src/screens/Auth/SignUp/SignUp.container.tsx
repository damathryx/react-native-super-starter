import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

import { ROOT_SCREENS } from 'screens';
import SignUp from './SignUp.view';

const SignUpContainer: NavigationStackScreenComponent = props => {
  const onSubmit = () => {
    props.navigation.navigate(ROOT_SCREENS.MAIN);
  };

  const viewProps = {
    onSubmit,
  };
  return <SignUp {...viewProps} />;
};

SignUpContainer.navigationOptions = {
  title: 'Sign Up',
};

export default SignUpContainer;
