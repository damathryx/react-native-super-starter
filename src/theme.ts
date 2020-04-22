import { Platform, Dimensions } from 'react-native';
import { Theme } from 'types/Theme';

export const { width: screenWidth, height: screenHeight } = Dimensions.get(
  'screen',
);

const poppinsFontWeightMapping: { [s: string]: number } = {
  ExtraLight: 200,
  Light: 300,
  Regular: 400,
  Medium: 500,
  Semibold: 600,
  Bold: 700,
  Black: 900,
};

const generateFontStyles = (
  fontName: string,
  fontWeightMapping: { [s: string]: number },
) => {
  if (Platform.OS === 'ios') {
    return Object.keys(fontWeightMapping).reduce(
      (acc, fontWeight) => ({
        ...acc,
        [fontWeight]: `
        font-family: ${fontName};
        font-weight: ${fontWeightMapping[fontWeight]};
      `,
        [`${fontWeight}Italic`]: `
        font-family: ${fontName};
        font-weight: ${fontWeightMapping[fontWeight]};
        font-style: italic;
      `,
      }),
      {},
    );
  }

  return Object.keys(fontWeightMapping).reduce(
    (acc, fontWeight) => ({
      ...acc,
      [fontWeight]: `
      font-family: ${fontName}-${fontWeight};
    `,
      [`${fontWeight}Italic`]: `
      font-family: ${fontName}-${fontWeight}Italic;
      `,
    }),
    {},
  );
};

const theme: Theme = {
  bg: {
    default: '#FFFFFF',
    alt: '#FCFCFC',
    inactive: '#B8BBC6',
  },
  brand: {
    default: '#ff914c',
    alt: '#ff614c',
  },
  grey: {
    shade1: '#EDEDED',
    shade2: '#B8BBC6',
    shade3: '#707070',
    shade4: '#1A1824',
    shade5: '#22242A',
    shade6: '#8D92A3',
    shade7: '#cdcdd7',
    shade8: '#E1E1E1',
  },
  text: {
    default: '#22242A',
    secondary: '#1A1824',
    light: '#B4B5B7',
    alt: '#8D92A3',
    placeholder: '#999999',
    reverse: '#FFFFFF',
    martinique: '#322E53',
  },
  cardStyle: `
        border-radius: 10px;
        background-color: #ffffff;
        shadow-opacity: 0.5;
        shadow-radius: 10px;
        shadow-color: rgba(0,0,0, 0.15);
        shadow-offset: 0px 0px;
        elevation: 3;
    `,
  fonts: {
    Poppins: generateFontStyles(
      'Poppins',
      poppinsFontWeightMapping,
    ) as Theme['fonts']['Poppins'],
  },
  screenWidth,
  screenHeight,
};

export default theme;
