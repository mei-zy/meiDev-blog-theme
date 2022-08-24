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
      base100: string;
      contrast: string;
      contrast400: string;
      contrast700: string;
      point: string;
    };
    media: MediaQueryType;
  }
}
