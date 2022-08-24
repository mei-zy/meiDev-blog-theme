import { StyledLanguageStyled } from "./languageSelectStyled";
import { LanguageSelectViewI } from "./languageSelectType";

const LanguageSelectView = ({
  languageList,
  currentLan,
  onClickLanguage,
}: LanguageSelectViewI) => (
  <StyledLanguageStyled onClick={onClickLanguage}>
    {languageList.map((lan) => (
      <li key={lan} data-id={lan}>
        {currentLan === lan ? <span className="polygon"></span> : <></>}
        {lan}
      </li>
    ))}
  </StyledLanguageStyled>
);

export default LanguageSelectView;
