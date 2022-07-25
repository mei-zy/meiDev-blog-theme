import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  color: {
    base: "#FFFFFF",
    contrast: "#333333",
    lightGray: "#F8F8F8",
    gradient: "linear-gradient(180deg, #75CFDA 0%, #A2A2D1 100%);",
  },
};

export const darkTheme: DefaultTheme = {
  color: {
    base: "#333232",
    contrast: "#FFFFFF",
    lightGray: "#5B5B5B",
    gradient: "linear-gradient(180deg, #EAD99C 0%, #CAE9D7 100%);",
  },
};
