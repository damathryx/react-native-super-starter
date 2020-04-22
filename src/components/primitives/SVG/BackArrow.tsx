import React from 'react';
import Svg, { Defs, ClipPath, Path, G, Rect } from 'react-native-svg';
import useTheme from 'utils/Hooks/useTheme';

import { SVGProps } from './SVG.props';

const SvgComponent = (props: SVGProps) => {
  const theme = useTheme();

  return (
    <Svg
      width={props.width || 7.691}
      height={props.height || 13.077}
      viewBox="0 0 7.691 13.077"
      {...props}>
      <Defs>
        <ClipPath id="clip-path">
          <Path
            id="Shape"
            d="M7.354,1.97,2.786,6.538l4.569,4.569a1.154,1.154,0,1,1-1.632,1.632L.338,7.354a1.154,1.154,0,0,1,0-1.632L5.723.338A1.154,1.154,0,0,1,7.354,1.97Z"
            transform="translate(0 0)"
            fill="none"
          />
        </ClipPath>
      </Defs>
      <G transform="translate(0 0)" clipPath="url(#clip-path)">
        <G
          id="_Color"
          data-name="\u21B3 \uD83C\uDFA8Color"
          transform="translate(-0.769 -3.846)">
          <Rect
            id="_Color_background"
            data-name="\u21B3 \uD83C\uDFA8Color background"
            width={20}
            height={20}
            fill={props.fill || theme.grey.shade5}
          />
          <Rect
            id="Color"
            width={20}
            height={20}
            fill={props.fill || theme.grey.shade5}
          />
        </G>
      </G>
    </Svg>
  );
};

export default SvgComponent;
