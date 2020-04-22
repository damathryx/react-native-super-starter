import { ReactElement } from 'react';

export type TopWrapperProps = {
  wrapPadding?: string;
  disableScrollTopView?: boolean;
};

export type StickyBottomProps = {
  children: {
    topComponents: ReactElement;
    bottomComponents: ReactElement;
  };
} & TopWrapperProps;
