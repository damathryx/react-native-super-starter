import React from 'react';
import BackArrow from 'components/primitives/SVG/BackArrow';
import { Touch } from './HeaderBackImage.style';

const HeaderBackImage = () => (
  <Touch hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}>
    <BackArrow width={10} height={20} />
  </Touch>
);

export default HeaderBackImage;
