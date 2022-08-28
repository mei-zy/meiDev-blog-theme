import { ThemePropsI } from "types";
import { StyledThemeButton } from "./themeButtonStyled";

const ThemeButton = ({ theme, setTheme }: ThemePropsI) => {
  const onChangeTheme = () => {
    if (theme === "Light") setTheme("Dark");
    else setTheme("Light");
  };

  return (
    <StyledThemeButton currentTheme={theme} onClick={onChangeTheme}>
      <span>{theme === "Light" ? "Dark" : "Light"}Mode</span>
      <div />
    </StyledThemeButton>
  );
};

export default ThemeButton;
