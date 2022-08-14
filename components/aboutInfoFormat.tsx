import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface IInfoObj {
  name: string;
  startDate: string;
  endDate: string;
  techStack?: Array<string>;
  link?: Array<IProjectLinkType>;
  contents: Array<string>;
}

interface IIntroduceObj {
  subTitle: string;
  content: string;
}

interface IProjectLinkType {
  title: string;
  href: string;
}

interface IAboutInfoFormat {
  isInfoGetDate: boolean;
  title: string;
  infoObj: Array<IInfoObj> | IIntroduceObj;
}

const StyledAboutInfoFormat = styled.section`
  margin-bottom: 40px;
  line-height: 1.5;

  h2 {
    color: #a9b089;
    font-family: "S-CoreDream-8Heavy";
    font-size: 30px;
    margin-bottom: 9px;
  }

  .contentSection {
    margin-left: 10px;
    margin-bottom: 25px;
  }

  h3,
  .date {
    color: #524c42;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 18px;
    font-family: "S-CoreDream-5Medium";
  }

  .date {
    font-size: 15px;
  }

  .link,
  .techStack {
    display: flex;
    flex-wrap: wrap;

    li {
      margin: 3px 8px 3px 0px;
    }
  }

  .link {
    margin-bottom: 8px;

    a {
      margin-right: 10px;
      color: #524c42;
      opacity: 0.7;
    }

    .linkTitle {
      margin-left: 8px;
    }
  }

  .techStack {
    margin-bottom: 15px;

    li {
      font-size: 13px;
      background-color: #524c42;
      color: white;
      padding: 2px 10px;
      border-radius: 30px;
    }
  }

  .list,
  .content {
    color: #7b7979;
    font-size: 15px;
  }

  .list {
    margin-left: 20px;
    list-style: disc;

    li {
      margin-bottom: 8px;
      line-height: 1.5;
    }
  }
`;

const AboutInfoFormat = ({
  isInfoGetDate,
  title,
  infoObj,
}: IAboutInfoFormat) => {
  return (
    <StyledAboutInfoFormat>
      <h2>{title}</h2>

      {isInfoGetDate ? (
        <>
          {(infoObj as Array<IInfoObj>).map(
            ({ name, startDate, endDate, contents, techStack, link }) => (
              <section key={name} className="contentSection">
                <h3>{name}</h3>
                <ul className="link">
                  {link?.map(({ title, href }) => (
                    <li key={title}>
                      <Link href={href}>
                        <a>
                          <Image
                            src="/images/link.svg"
                            alt={title}
                            width="18px"
                            height="18px"
                          />
                          <span className="linkTitle">{title}</span>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="date">
                  {startDate} ~ {endDate}
                </div>
                <ul className="techStack">
                  {techStack?.map((tech) => (
                    <li key={`${name}${tech}`}>{tech}</li>
                  ))}
                </ul>
                <ul className="list">
                  {contents.map((content, index) => (
                    <li key={`${name}${index}`}>{content}</li>
                  ))}
                </ul>
              </section>
            )
          )}
        </>
      ) : (
        <section className="contentSection">
          <h3>{(infoObj as IIntroduceObj).subTitle}</h3>
          <div className="content">{(infoObj as IIntroduceObj).content}</div>
        </section>
      )}
    </StyledAboutInfoFormat>
  );
};

export default AboutInfoFormat;
