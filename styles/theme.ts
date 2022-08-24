import { DefaultTheme } from "styled-components";

const media = {
  mobile: "(max-width:770px)",
  tablet: "(max-width:1100px)",
  desktop: "(min-width:1200px)",
};

export const lightTheme: DefaultTheme = {
  color: {
    base: "#F9F9F9",
    contrast: "#040509",
    point: "#D83F86",
  },
  media,
};

export const darkTheme: DefaultTheme = {
  color: {
    base: "#040509",
    contrast: "#F9F9F9",
    point: "#64BA51",
  },
  media,
};
