import { userId } from "blogSetting";
import Image from "next/image";
import Link from "next/link";
import { StyledAbout } from "./aboutStyled";
import { AboutPropsI } from "./aboutType";

const AboutView = ({ about, links }: AboutPropsI) => (
  <StyledAbout>
    <div className="greeting">
      {about.greeting.map((greeting) => (
        <div key={greeting}>{greeting}</div>
      ))}
    </div>
    <div className="line" />
    <section>
      <section className="userWrapper">
        <div className="imgWrapper">
          <Image
            src="/assets/profileImg.png"
            alt="프로필이미지"
            width="120px"
            height="120px"
          />
        </div>
        <div className="userInfoWrapper">
          <div className="userId weight-bold">@{userId}</div>
          <ul className="links">
            {links.map(({ name, href }) => (
              <li key={name}>
                <Link href={href}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ul className="introduce">
        {about.introduce.map((introduce) => (
          <li key={introduce}>{introduce}</li>
        ))}
      </ul>
    </section>
    <Link href="/">
      <a className="resume weight-bold">More Resume {">"}</a>
    </Link>
  </StyledAbout>
);

export default AboutView;
