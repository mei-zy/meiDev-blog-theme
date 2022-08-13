import React from "react";
import styled from "styled-components";

interface IInfoObj {
  name: string;
  startDate: string;
  endDate: string;
  contents: Array<string>;
}

interface IIntroduceObj {
  subTitle: string;
  content: string;
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
            ({ name, startDate, endDate, contents }) => (
              <section key={name} className="contentSection">
                <h3>{name}</h3>
                <div className="date">
                  {startDate} ~ {endDate}
                </div>
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
