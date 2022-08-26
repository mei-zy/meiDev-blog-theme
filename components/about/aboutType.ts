export interface AboutPropsI {
  about: AboutI;
  links: Array<LinksI>;
}

interface AboutI {
  greeting: Array<string>;
  introduce: Array<string>;
}

interface LinksI {
  name: string;
  href: string;
}
