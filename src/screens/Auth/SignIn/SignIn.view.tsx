import React from 'react';
import Button from 'components/primitives/Button';
import TextField from 'components/primitives/TextField';
import StickyBottom from 'components/layouts/StickyBottom';
import { Form, Controls, Title } from './SignIn.style';

import { SignInGeneratedProps } from './SignIn.props';

const SignInView = (props: SignInGeneratedProps) => (
  <StickyBottom>
    {{
      topComponents: (
        <>
          <Title>Signin to your account</Title>
          <Form>
            <TextField placeholder="Email" />
            <TextField placeholder="Password" secureTextEntry />
          </Form>
        </>
      ),
      bottomComponents: (
        <Controls>
          <Button onPress={props.onSubmit}>Submit</Button>
        </Controls>
      ),
    }}
  </StickyBottom>
);

export default SignInView;
