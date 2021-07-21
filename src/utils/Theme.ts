export enum ThemeStyle {
  LIGHT = "LIGHT",
  DARKK = "DARK",
}
export interface colorType {
  textPrimary?: string;
}
export interface fontFamilyType {
  medium?: string;
  regular?: string;
  bold?: string;
  italic?: string;
}
export interface fontSizeType {
  default?: number;
}

export interface ITheme {
  background?: string;
  color?: colorType;
  fontFamily?: fontFamilyType;
  fontSize?: fontSizeType;
}
type ThemeType = { [key in ThemeStyle]: ITheme };
export const Theme: ThemeType = {
  LIGHT: {
    fontFamily: {},
    color: {
      textPrimary: "#000001",
    },
  },
  DARK: {},
};
