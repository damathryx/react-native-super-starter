import { useContext, Context } from 'react';
import { ThemeContext as TContext } from '@emotion/core';
import { Theme } from 'types/Theme';

const ThemeContext = TContext as Context<Theme>;

export default () => useContext(ThemeContext);
