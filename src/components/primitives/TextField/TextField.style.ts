import styled from 'utils/emotion';

export const TextInput = styled.TextInput`
  background-color: ${props => props.theme.bg.alt};
  border-radius: 10px;
  border-width: 1px;
  border-color: ${props => props.theme.grey.shade1};
  color: ${props => props.theme.text.default};
  font-size: 14px;
  padding: 0 20px;
  margin-top: 10px;
  height: 60px;
`;
