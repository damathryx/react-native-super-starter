import React from 'react';
import useTheme from 'utils/Hooks/useTheme';
import {
  Touch,
  ButtonText,
  IconContainer,
  ActivityIndicator,
} from './Button.style';

import { ButtonProps } from './Button.props';

export default (props: ButtonProps) => {
  const theme = useTheme();
  return (
    <Touch
      {...props}
      onPress={!props.disabled && !props.loading ? props.onPress : undefined}>
      {props.icon && <IconContainer>{props.icon}</IconContainer>}
      <ButtonText outline={props.outline} small={props.small}>
        {props.children}
      </ButtonText>
      {props.loading ? (
        <ActivityIndicator
          animating
          color={props.outline ? theme.brand.default : '#FFF'}
        />
      ) : null}
    </Touch>
  );
};
