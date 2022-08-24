import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header_logo {
    font-size: 20px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.contrast};
  }

  // 모바일 전용

  .hamburger {
    padding: 8px;

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
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: ${({ theme }) => theme.color.point};
  }
`;
