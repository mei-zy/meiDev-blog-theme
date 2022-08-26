import styled from "styled-components";

export const StyledHeader = styled.header`
  z-index: 100;
  padding: 12px 0px;
  width: 87%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .base {
    color: ${({ theme }) => theme.color.base};
  }

  .logo {
    position: relative;
    z-index: 100;

    a {
      font-size: 20px;
      text-decoration: none;
      color: ${({ theme }) => theme.color.contrast};
    }
  }
`;
