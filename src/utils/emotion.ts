import styledNative, { Styled, css as cssNative } from '@emotion/native';
import { Theme } from 'types/Theme';

export const styled = styledNative as Styled<Theme>;
export const css = cssNative;

export default styled;
