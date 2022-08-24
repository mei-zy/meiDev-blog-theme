import { Dispatch } from "react";

export interface LanguageSelectI extends LanguageI {
  onSelectLan: Dispatch<string>;
}

export interface LanguageSelectViewI extends LanguageI {
  languageList: Array<string>;
  onClickLanguage: (e: React.SyntheticEvent) => void;
}
