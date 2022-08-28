import styled from "styled-components";

export const StyledMobileNav = styled.nav`
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }

  .btn {
    position: relative;
    z-index: 100;
  }

  width: 36px;
  height: 36px;

  .close-btn,
  .hamburger {
    background-color: transparent;
    border: none;
    padding: 8px;
  }

  .hamburger {
    div {
      width: 20px;
      height: 3px;
      background-color: ${({ theme }) => theme.color.point};
      margin-bottom: 3px;
      border-radius: 10px;
    }
  }

  .modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    background-color: ${({ theme }) => theme.color.point};

    .nav-list {
      float: right;
      padding-top: 40%;
      padding-right: 25px;

      button {
        margin-top: 10px;
      }

      li {
        margin-bottom: -7px;

        a {
          color: ${({ theme }) => theme.color.base};
          text-decoration: none;
          font-size: 63px;
          font-weight: 800;
        }
      }
    }
  }
`;

export const StyledLaptopNav = styled.nav`
  display: none;

  @media ${({ theme }) => theme.device.tablet} {
    display: block;

    .navList {
      display: flex;

      li {
        margin-right: 20px;
      }

      a {
        color: ${({ theme }) => theme.color.contrast};
        font-weight: 700;
        text-decoration: none;
        font-size: 20px;
      }
    }
  }
`;
