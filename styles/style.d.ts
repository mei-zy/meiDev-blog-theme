import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      base: string;
      contrast: string;
      lightGray: string;
      gradient: string;
    };
  }
}
