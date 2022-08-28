import styled from "styled-components";

export const StyledAbout = styled.section`
  margin-top: 40px;

  .greeting {
    text-align: center;
    font-size: 34px;

    div:first-of-type {
      font-weight: 300;
      font-size: 23px;
    }

    div:last-of-type {
      font-weight: 900;
    }
  }

  .line {
    width: 1px;
    background-color: ${({ theme }) => theme.color.contrast};
    height: 40px;
    margin: 30px auto;
  }

  .userWrapper {
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    .imgWrapper {
      border-radius: 30px;
      overflow: hidden;
    }

    .userInfoWrapper {
      margin-left: 20px;

      .userId {
        font-size: 16px;
        color: ${({ theme }) => theme.color.point};
        margin-bottom: 10px;
      }

      .links {
        display: flex;

        li {
          margin-right: 8px;
        }
      }
    }
  }

  .introduce {
    color: ${({ theme }) => theme.color.contrast700};
    line-height: 1.5;
    font-size: 12px;
  }

  .resume {
    float: right;
    margin-top: 20px;
    background-color: ${({ theme }) => theme.color.point};
    color: ${({ theme }) => theme.color.base};
    border-radius: 7px;
    text-decoration: none;
    padding: 5px 8px;
  }

  .desktop {
    display: none;
  }

  @media ${({ theme }) => theme.device.tablet} {
    .greeting {
      text-align: center;
      font-size: 42px;
      line-height: 1.2;

      div:first-of-type {
        font-weight: 300;
        font-size: 27px;
      }
    }

    .aboutWrapper {
      display: flex;
      width: 70%;
      margin: 0 auto;
    }

    .userId {
      font-size: 20px !important;
    }

    .line {
      height: 59px;
    }

    .introduce {
      font-size: 14px;
    }

    .resume {
      padding: 12px 16px;
    }

    .mobile {
      display: none;
    }

    .desktop {
      display: block;
    }
  }

  @media ${({ theme }) => theme.device.laptop} {
    .userId {
      font-size: 23px !important ;
    }

    .introduce {
      font-size: 16px;
    }
  }
`;
