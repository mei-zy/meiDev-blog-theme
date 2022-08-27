import { DefaultTheme } from "styled-components";

const media = {
  mobile: "(max-width:770px)",
  tablet: "(max-width:1100px)",
  desktop: "(min-width:1200px)",
};

export const lightTheme: DefaultTheme = {
  color: {
    base: "#F9F9F9",
    base100: "#ffffff",
    base200: "#E1E0E0",
    base300: "#F3F3F3",
    contrast: "#040509",
    contrast400: "#BCBABA",
    contrast700: "#4D4D4D",
    point: "#D83F86",
    point100: "#E277A8",
    lightGray: "#DADADA",
  },
  media,
};

export const darkTheme: DefaultTheme = {
  color: {
    base: "#040509",
    base100: "#323232",
    base200: "#6A6A6A",
    base300: "#383838",
    contrast: "#F9F9F9",
    contrast400: "#808080",
    contrast700: "#DEDEDE",
    point: "#64BA51",
    point100: "#8CC87F",
    lightGray: "#DADADA",
  },
  media,
};
