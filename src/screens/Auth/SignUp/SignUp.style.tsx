import styled from 'utils/emotion';

export const Controls = styled.KeyboardAvoidingView`
  padding: 0 20px;
`;

export const Title = styled.Text`
  margin: 20px 0;
  ${props => props.theme.fonts.Poppins.Regular};
  font-weight: bold;
  font-size: 26px;
  line-height: 33px;
  text-align: left;
  color: ${props => props.theme.text.default};
`;

export const Form = styled.View``;
