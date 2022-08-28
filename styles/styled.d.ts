import "styled-components";

interface MediaQueryType {
  mobile: string;
  tablet: string;
  laptop: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      base: string;
      base100: string;
      base200: string;
      base300: string;
      contrast: string;
      contrast400: string;
      contrast700: string;
      point: string;
      point100: string;
      lightGray: string;
    };
    device: MediaQueryType;
  }
}
