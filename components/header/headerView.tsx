import { navList } from "blogSetting";
import Link from "next/link";
import { StyledHeader } from "./headerStyled";
import { HeaderViewI } from "./headerType";

const HeaderView = ({ mobileIsOpenModal, onClickModal }: HeaderViewI) => (
  <StyledHeader>
    <h1>
      <Link href="/">
        <a className="header_logo weight-black">
          <span>MEI.</span>
          <span className="point">DEV</span>
        </a>
      </Link>
    </h1>
    <nav className="mobile">
      <div className="hamburger" onClick={onClickModal}>
        <div />
        <div />
        <div />
      </div>
      {mobileIsOpenModal ? (
        <></>
      ) : (
        <section className="modal">
          <ul>
            {navList.map((nav) => (
              <li key={nav}>
                <Link href={`/${nav}`}>
                  <a>{nav}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </nav>
  </StyledHeader>
);

export default HeaderView;
