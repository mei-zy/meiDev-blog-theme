import { Dispatch } from "react";

export interface LanguageSelectI {
  currentLan: string;
  onSelectLan: Dispatch<string>;
}

export interface LanguageSelectViewI {
  languageList: Array<string>;
  currentLan: string;
  onClickLanguage: (e: React.SyntheticEvent) => void;
}
