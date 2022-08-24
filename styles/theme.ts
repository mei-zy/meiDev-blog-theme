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
    contrast: "#040509",
    contrast400: "#BCBABA",
    contrast700: "#4D4D4D",
    point: "#D83F86",
  },
  media,
};

export const darkTheme: DefaultTheme = {
  color: {
    base: "#040509",
    base100: "#323232",
    contrast: "#F9F9F9",
    contrast400: "#808080",
    contrast700: "#DEDEDE",
    point: "#64BA51",
  },
  media,
};
