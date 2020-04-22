import styled from 'utils/emotion';

import { TopWrapperProps } from './StickyBottom.props';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.bg.default};
`;

export const TopScrollView = styled.ScrollView<TopWrapperProps>`
  flex: 1;
  padding: ${props => props.wrapPadding || '0 15px'};
`;

export const TopView = styled.View<TopWrapperProps>`
  flex: 1;
  padding: ${props => props.wrapPadding || '0 15px'};
`;

export const BottomWrapper = styled.KeyboardAvoidingView``;
