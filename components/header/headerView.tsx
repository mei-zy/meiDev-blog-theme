import { navList } from "blogSetting";
import Link from "next/link";
import { StyledHeader } from "./headerStyled";
import { HeaderViewI } from "./headerType";

const HeaderView = ({ mobileIsOpenModal, onClickModal }: HeaderViewI) => (
  <StyledHeader>
    <h1 className="logo">
      <Link href="/">
        <a className="header_logo weight-black">
          <span className={`${mobileIsOpenModal ? "base" : ""}`}>MEI.</span>
          <span className={`${mobileIsOpenModal ? "base" : "point"}`}>DEV</span>
        </a>
      </Link>
    </h1>
    <nav className="mobile">
      {mobileIsOpenModal ? (
        <button className="close-btn btn" onClick={onClickModal}>
          X
        </button>
      ) : (
        <button className="hamburger btn" onClick={onClickModal}>
          <div />
          <div />
          <div />
        </button>
      )}
      {mobileIsOpenModal ? (
        <section className="modal">
          <ul className="nav-list" onClick={onClickModal}>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            {navList.map((nav) => (
              <li key={nav}>
                <Link href={`/${nav}`}>
                  <a>{nav}</a>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/search">
                <a>Search</a>
              </Link>
            </li>
          </ul>
        </section>
      ) : (
        <></>
      )}
    </nav>
  </StyledHeader>
);

export default HeaderView;
