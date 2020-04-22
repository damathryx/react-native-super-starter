import styled, { css } from 'utils/emotion';

import { TouchProps, ButtonTextProps } from './Button.props';

const smallBtnStyle = css`
  align-self: center;
  padding: 5px 20px;
  height: 25px;
`;

const regBtnStyle = css`
  width: 100%;
  height: 45px;
`;

export const Touch = styled.TouchableOpacity<TouchProps>`
  flex-direction: row;
  align-items: center;
  ${props => (props.small ? smallBtnStyle : regBtnStyle)};
  margin-top: ${props => (props.noMargin ? '0px' : '10px')};
  border-radius: 22.5px;
  background: ${props => {
    if (props.outline) return '#fff';
    return props.disabled ? props.theme.text.light : props.theme.brand.default;
  }};
  ${props =>
    props.disabled
      ? `border: 1px solid ${props.theme.text.light}`
      : `border: 1px solid ${props.theme.brand.default}`};
  justify-content: center;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  ${props => props.theme.fonts.Poppins.Regular}
  font-size: ${props => (props.small ? '12px' : '16px')};
  letter-spacing: -0.1px;
  text-align: center;
  color: ${props => (props.outline ? props.theme.brand.default : '#fff')};
`;

export const IconContainer = styled.View`
  margin-right: 5px;
`;

export const ActivityIndicator = styled.ActivityIndicator`
  position: absolute;
  right: 30px;
`;
