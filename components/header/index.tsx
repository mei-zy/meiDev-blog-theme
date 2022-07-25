import { StyledHeader } from "./styled.header";
import { HeaderProps } from "./types.header";

const Header = ({ theme, setTheme }: HeaderProps) => {
  return (
    <StyledHeader>
      <div className="header__close">
        <div className="header__close-red" />
        <div className="header__close-yellow" />
        <div className="header__close-green" />
      </div>
      <label className="header__switch">
        <input type="checkbox" />
        <span className="header__switch-button" />
      </label>
      {theme === "light" ? <p>온</p> : <p>오프</p>}
    </StyledHeader>
  );
};

export default Header;
