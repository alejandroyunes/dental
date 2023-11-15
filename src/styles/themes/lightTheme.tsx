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
      main: "#164863", //repetido
      contrastBorder: "#082e42",
      contrastBg: "#d8dde6",
      contrastButton: '#081B26',
      contrastText: "#fff",
    },
    secondary: {
      main: "",
      contrastBorder: "",
      contrastBg: "",
      contrastButton: '',
      contrastText: "",
    },
  },
  breakpoint,
  zIndices,
  fontSizes,
  fonts
};