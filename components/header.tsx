import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { blogNav } from "../blogBasicSetting";

const StyledHeader = styled.header`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #efefef;
  padding: 0px 30px;
  box-sizing: border-box;

  .bold {
    font-family: "S-CoreDream-8Heavy";
  }

  .nav {
    display: flex;

    a {
      text-decoration: none;
      color: #000000;
    }

    li {
      padding-right: 20px;
    }

    li:after {
      content: "|";
      margin-left: 20px;
    }

    li:last-of-type:after {
      content: "";
    }
  }
`;

const Header = () => {
  const [currentNav, setCurrentNav] = useState("");

  useEffect(() => {
    const [, current, ...rest] = window.location.pathname.split("/");
    setCurrentNav(current);
  }, []);

  return (
    <StyledHeader>
      <h1>
        <Link href="/">
          <a>
            <Image
              src="/images/blacklogo.svg"
              alt="로고"
              width="140px"
              height="92px"
            />
          </a>
        </Link>
      </h1>
      <ul className="nav">
        {blogNav.map((nav, index) => (
          <li key={nav}>
            <Link href={`/${nav.toLowerCase()}`}>
              <a className={nav.toLowerCase() === currentNav ? "bold" : ""}>
                {nav}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </StyledHeader>
  );
};

export default Header;
