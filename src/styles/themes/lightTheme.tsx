import { DefaultTheme } from "styled-components";
import { breakpoint, fontSizes, fonts, zIndices } from "./darkTheme";

export const lightTheme: DefaultTheme = {
  name: "lightmode",
  bodyColor: "#ffffff",
  textColor: "#212121",
  palette: {
    black: "#333333",
    white: "#fff",
    gray: "#39393A",
    red: "#ae3c43",
    primary: {
      main: "#164863",
      contrastText: "#172846",
      contrastBg: "#d8dde6",
    },
    secondary: {
      main: "#777777",
      contrastText: "#75767a",
      contrastBg: "#f8f2dd",
    },
  },
  breakpoint,
  zIndices,
  fontSizes,
  fonts
};