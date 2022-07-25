import { Dispatch, SetStateAction } from "react";

export interface HeaderProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}
