// components/themes/defaultTheme.tsx
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
    },
    secondary: {
      main: "#777777",
      contrastText: "#d4eafa",
    },
  },
  breakpoint,
  zIndices,
  fontSizes,
  fonts
};