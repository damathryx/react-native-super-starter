import styled from 'utils/emotion';
import { Image } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 20px;
`;

export const TopContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AppLogo = styled(Image)`
  width: 200px;
  resize-mode: contain;
  align-self: center;
`;

export const Controls = styled.View`
  height: 300px;
  justify-content: center;
`;
