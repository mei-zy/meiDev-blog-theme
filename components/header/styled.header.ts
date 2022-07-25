import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.lightGray};
  display: flex;

  .header__close {
    display: flex;

    .header__close-red,
    .header__close-yellow,
    .header__close-green {
      margin-right: 8px;
      width: 19px;
      height: 19px;
      border-radius: 50%;
    }

    .header__close-red {
      background-color: #ff603e;
    }

    .header__close-yellow {
      background-color: #ffc93e;
    }

    .header__close-green {
      background-color: #2ed23e;
    }
  }

  .header__switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    vertical-align: middle;
  }
`;
