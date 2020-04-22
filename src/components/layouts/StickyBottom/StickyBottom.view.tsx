import React from 'react';
import { Platform } from 'react-native';
import { getKeyboardVerticalOffset } from 'utils/views';

import {
  Container,
  TopScrollView,
  TopView,
  BottomWrapper,
} from './StickyBottom.style';
import { StickyBottomProps } from './StickyBottom.props';

export default ({
  children,
  wrapPadding,
  disableScrollTopView,
}: StickyBottomProps) => {
  const Top = disableScrollTopView ? TopView : TopScrollView;
  return (
    <Container>
      <Top wrapPadding={wrapPadding}>{children.topComponents}</Top>
      <BottomWrapper
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={getKeyboardVerticalOffset(true)}>
        {children.bottomComponents}
      </BottomWrapper>
    </Container>
  );
};
