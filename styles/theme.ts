import { DefaultTheme } from "styled-components";

const media = {
  mobile: "(max-width:770px)",
  tablet: "(max-width:1100px)",
  desktop: "(min-width:1200px)",
};

export const lightTheme: DefaultTheme = {
  color: {
    base: "#FFFFFF",
    contrast: "#333333",
    lightGray: "#EFEEEE",
    gradient: "linear-gradient(180deg, #75CFDA 0%, #A2A2D1 100%);",
    point: "#75CFDA",
  },
  media,
};

export const darkTheme: DefaultTheme = {
  color: {
    base: "#333232",
    contrast: "#FFFFFF",
    lightGray: "#5B5B5B",
    gradient: "linear-gradient(180deg, #EAD99C 0%, #CAE9D7 100%);",
    point: "#EAD99C",
  },
  media,
};
