import { Platform } from 'react-native';
import styled from 'utils/emotion';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: ${Platform.select({
    ios: '100px',
    android: '70px',
  })};
  border-top-width: 1px;
  border-top-color: ${props => props.theme.grey.shade1};
`;

export const Tab = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<{ color: string }>`
  ${props => props.theme.fonts.Poppins.Medium}
  font-size: 10px;
  line-height: 22px;
  text-align: center;
  color: ${props => props.color};
`;
