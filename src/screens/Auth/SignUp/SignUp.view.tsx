import React from 'react';
import Button from 'components/primitives/Button';
import TextField from 'components/primitives/TextField';
import StickyBottom from 'components/layouts/StickyBottom';
import { Form, Controls, Title } from './SignUp.style';

import { SignUpGeneratedProps } from './SignUp.props';

const SignUpView = (props: SignUpGeneratedProps) => (
  <StickyBottom>
    {{
      topComponents: (
        <>
          <Title>Let’s create your account</Title>
          <Form>
            <TextField placeholder="Name" />
            <TextField placeholder="Email" />
            <TextField placeholder="Password" secureTextEntry />
            <TextField placeholder="Confirm Password" secureTextEntry />
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

export default SignUpView;
