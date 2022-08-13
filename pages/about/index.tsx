import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import {
  EducatedInfo,
  introduce,
  projectsInfo,
  socialLink,
  workedAtInfo,
} from "../../blogBasicSetting";
import AboutInfoFormat from "../../components/aboutInfoFormat";
import Header from "../../components/header";
import TopButton from "../../components/topButton";

const StyledAbout = styled.main`
  *::selection {
    background-color: #a9b089;
    color: white;
  }

  min-height: 90vh;
  width: 70%;
  margin: 0 auto;
  padding: 50px 0 30px 0;
  box-sizing: border-box;

  .social {
    display: flex;
    margin-bottom: 20px;

    li {
      margin-right: 10px;
    }
  }
`;

const About = () => {
  return (
    <>
      <Head>
        <title>URTHER DEV | ABOUT</title>
      </Head>
      <Header />
      <StyledAbout>
        <ul className="social">
          {socialLink.map(({ title, link }) => (
            <li key={title}>
              <Link href={link}>
                <a>
                  <Image
                    src={`/images/${title}.svg`}
                    alt={title}
                    width="30px"
                    height="30px"
                  ></Image>
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <AboutInfoFormat
          isInfoGetDate={false}
          title="HELLO WOLRD!"
          infoObj={introduce}
        />

        {/* WORKED AT 없으면 생략 */}
        <AboutInfoFormat
          isInfoGetDate={true}
          title="WORKED AT"
          infoObj={workedAtInfo}
        />
        {/* PROJECTS 없으면 생략 */}
        <AboutInfoFormat
          isInfoGetDate={true}
          title="PROJECTS"
          infoObj={projectsInfo}
        />
        {/* EDUCATED 없으면 생략 */}
        <AboutInfoFormat
          isInfoGetDate={true}
          title="EDUCATED"
          infoObj={EducatedInfo}
        />
        <TopButton />
      </StyledAbout>
    </>
  );
};

export default About;
