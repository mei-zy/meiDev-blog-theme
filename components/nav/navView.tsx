import Link from "next/link";
import { navList } from "blogSetting";
import { StyledMobileNav } from "./navStyled";

const NavView = ({ mobileIsOpenModal, onClickModal }: HeaderNavI) => (
  <StyledMobileNav>
    {mobileIsOpenModal ? (
      <>
        <button className="close-btn btn" onClick={onClickModal}>
          X
        </button>
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
      </>
    ) : (
      <button className="hamburger btn" onClick={onClickModal}>
        <div />
        <div />
        <div />
      </button>
    )}
  </StyledMobileNav>
);

export default NavView;
