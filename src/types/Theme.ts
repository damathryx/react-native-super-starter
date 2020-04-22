export type WithTheme<Props = {}> = {
  theme: Theme;
} & Props;

export type Theme = {
  bg: {
    default: string;
    alt: string;
    inactive: string;
  };
  brand: {
    default: string;
    alt: string;
  };
  grey: {
    shade1: string;
    shade2: string;
    shade3: string;
    shade4: string;
    shade5: string;
    shade6: string;
    shade7: string;
    shade8: string;
  };
  text: {
    default: string;
    secondary: string;
    light: string;
    alt: string;
    placeholder: string;
    reverse: string;
    martinique: string;
  };
  fonts: {
    Poppins: {
      ExtraLight: string;
      Light: string;
      Regular: string;
      Medium: string;
      Semibold: string;
      Bold: string;
      Black: string;
      ExtraLightItalic: string;
      LightItalic: string;
      RegularItalic: string;
      MediumItalic: string;
      SemiboldItalic: string;
      BoldItalic: string;
      BlackItalic: string;
    };
  };
  cardStyle: string;
  screenWidth: number;
  screenHeight: number;
};
