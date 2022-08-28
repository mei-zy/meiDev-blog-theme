import Link from "next/link";
import { navList } from "blogSetting";
import { StyledMobileNav } from "./navStyled";
import { HeaderNavI } from "types";
import Image from "next/image";
import ThemeButton from "@components/themeButton/themeButton";

const NavView = ({
  mobileIsOpenModal,
  onClickModal,
  theme,
  setTheme,
}: HeaderNavI) => (
  <StyledMobileNav>
    {mobileIsOpenModal ? (
      <>
        <button className="close-btn btn" onClick={onClickModal}>
          <Image
            src="/assets/svg/close.svg"
            alt="닫기"
            width="20px"
            height="20px"
          />
        </button>
        <section className="modal">
          <div className="nav-list">
            <ul onClick={onClickModal}>
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
            <ThemeButton theme={theme} setTheme={setTheme} />
          </div>
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
