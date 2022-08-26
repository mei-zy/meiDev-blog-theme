import Nav from "@components/nav/nav";
import Link from "next/link";
import { StyledHeader } from "./headerStyled";

const HeaderView = ({ mobileIsOpenModal, onClickModal }: HeaderNavI) => (
  <StyledHeader>
    <h1 className="logo">
      <Link href="/">
        <a className="header_logo weight-black">
          <span className={`${mobileIsOpenModal ? "base" : ""}`}>MEI.</span>
          <span className={`${mobileIsOpenModal ? "base" : "point"}`}>DEV</span>
        </a>
      </Link>
    </h1>
    <Nav mobileIsOpenModal={mobileIsOpenModal} onClickModal={onClickModal} />
  </StyledHeader>
);

export default HeaderView;
