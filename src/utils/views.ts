import { Platform } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { Header } from 'react-navigation-stack';

const KEYBOARD_TO_CONTENT_INDENT = 0;
const ADDITIONAL_FOR_BIG_HEADER = 26;

export const getKeyboardVerticalOffset = (
  isHeadderBig: boolean | undefined,
) => {
  if (Platform.OS === 'android') return 0;

  let offset = Header.HEIGHT;

  const statusBarHeight = ifIphoneX(24, 0);

  offset = offset + statusBarHeight + KEYBOARD_TO_CONTENT_INDENT;
  if (isHeadderBig) offset += ADDITIONAL_FOR_BIG_HEADER;
  return offset;
};
