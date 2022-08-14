import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { blogNav, mainCircleSize } from "../blogBasicSetting";
import VideoBackground from "../components/videoBackground";

const StyleMain = styled.div<{ circleSize: number }>`
  z-index: 10;
  .logo {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .circle {
    position: fixed;
    top: 220px;
    width: ${({ circleSize }) => circleSize}px;
    height: ${({ circleSize }) => circleSize}px;
    background-color: #a3bec8;
    border-radius: 50%;
    opacity: 80%;
    left: ${({ circleSize }) => -(circleSize / 2) - 40}px;
  }

  .nav {
    position: fixed;
    top: 349px;
    left: 17px;
    line-height: 1.5;
    font-size: 28px;
    color: white;

    a {
      text-decoration: none;
      color: white;
    }

    li {
      cursor: pointer;
    }

    li:hover {
      font-family: "S-CoreDream-5Medium";
    }
  }

  .rightPoint {
    width: 80vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 50%;
    right: -253px;
    color: #dadada;
    opacity: 0.7;
    transform: rotate(270deg);
  }

  .line {
    width: 130px;
    height: 1px;
    background-color: #dadada;
  }

  .bottomPoint {
    position: absolute;
    bottom: 20px;
    right: 10%;
    opacity: 0.7;
    text-align: right;
    color: #dadada;

    div:first-child {
      margin-bottom: 8px;
    }
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <VideoBackground />
      <StyleMain circleSize={mainCircleSize}>
        <div className="logo">
          <Image
            src="/images/whitelogo.svg"
            alt="로고"
            width="250px"
            height="164px"
          />
        </div>
        <div className="circle" />
        <ul className="nav">
          {blogNav.map((menu) => (
            <li key={menu}>
              <Link href={`/${menu.toLowerCase()}`}>
                <a>{menu}</a>
              </Link>
            </li>
          ))}
        </ul>

        <div className="rightPoint">
          <div>351239</div>
          <div className="line" />
          <div>352043</div>
          <div className="line" />
          <div>351238</div>
        </div>
        <div className="bottomPoint">
          <div>only if you asked to see me</div>
          <div>out meeting would be meaningful to me</div>
        </div>
      </StyleMain>
    </>
  );
};

export default Home;
