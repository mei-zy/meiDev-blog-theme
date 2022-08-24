import { languageList } from "blogSetting";
import { LanguageSelectI } from "./languageSelectType";
import LanguageSelectView from "./languageSelectView";

const LanguageSelect = ({ currentLan, onSelectLan }: LanguageSelectI) => {
  const onClickLanguage = (e: React.SyntheticEvent) => {
    if (!(e.target instanceof HTMLLIElement)) return;
    if (!e.target.dataset.id) return;

    const changeLan = e.target.dataset.id;
    onSelectLan(changeLan);
  };

  const props = {
    languageList,
    currentLan,
    onClickLanguage,
  };

  return <LanguageSelectView {...props} />;
};

export default LanguageSelect;
