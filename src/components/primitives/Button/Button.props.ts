import { TouchableOpacityProps } from 'react-native';

export type ButtonTextProps = {
  outline?: boolean;
  small?: boolean;
};

export type TouchProps = {
  disabled?: boolean;
  noMargin?: boolean;
} & ButtonTextProps;

export interface ButtonProps extends TouchableOpacityProps, TouchProps {
  children: any;
  icon?: any;
  loading?: boolean;
}
