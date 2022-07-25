import Link from "next/link";
import { StyledNav } from "./styled.nav";

const Nav = () => {
  const menuList = ["ABOUT", "PROJECTS", "TAGS", "LOG"];

  return (
    <StyledNav>
      <h1>
        <Link href="/">
          <a>
            URTHER
            <span className="fontGradient">DEV</span>
          </a>
        </Link>
      </h1>
      <ul>
        {menuList.map((menuItem) => (
          <li key={menuItem}>
            <Link href="/">
              <a>{menuItem}</a>
            </Link>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default Nav;
