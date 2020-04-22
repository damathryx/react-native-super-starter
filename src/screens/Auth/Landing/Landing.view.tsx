import React from 'react';
import Button from 'components/primitives/Button/Button.view';
import logo from 'res/logo.png';
import { Container, AppLogo, TopContainer, Controls } from './Landing.style';
import { LandingGeneratedProps } from './Landing.props';

const LandingView = (props: LandingGeneratedProps) => (
  <Container>
    <TopContainer>
      <AppLogo source={logo} />
    </TopContainer>
    <Controls>
      <Button onPress={props.goToSignIn}>Sign In</Button>
      <Button outline onPress={props.goToSignUp}>
        Sign Up
      </Button>
    </Controls>
  </Container>
);

export default LandingView;
