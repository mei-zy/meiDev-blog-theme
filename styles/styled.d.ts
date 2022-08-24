import "styled-components";

interface MediaQueryType {
  mobile: string;
  tablet: string;
  desktop: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      base: string;
      contrast: string;
      point: string;
    };
    media: MediaQueryType;
  }
}
