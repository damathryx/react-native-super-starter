import React from 'react';

import useTheme from 'utils/Hooks/useTheme';
import { TextInput } from './TextField.style';
import { TextFieldProps } from './TextField.props';

const TextFieldView = (props: TextFieldProps) => {
  const theme = useTheme();
  return <TextInput placeholderTextColor={theme.text.light} {...props} />;
};

export default TextFieldView;
