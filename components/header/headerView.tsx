import Nav from "@components/nav/nav";
import Link from "next/link";
import { HeaderNavI } from "types";
import { StyledHeader } from "./headerStyled";

const HeaderView = ({
  mobileIsOpenModal,
  onClickModal,
  theme,
  setTheme,
}: HeaderNavI) => (
  <StyledHeader>
    <h1 className="logo">
      <Link href="/">
        <a className="header_logo weight-black">
          <span className={`${mobileIsOpenModal ? "base" : ""}`}>MEI.</span>
          <span className={`${mobileIsOpenModal ? "base" : "point"}`}>DEV</span>
        </a>
      </Link>
    </h1>
    <Nav
      mobileIsOpenModal={mobileIsOpenModal}
      onClickModal={onClickModal}
      theme={theme}
      setTheme={setTheme}
    />
  </StyledHeader>
);

export default HeaderView;
