import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100vw;
  background-color: ${({ theme }) => theme.color.point};
  font-size: 12px;
  color: ${({ theme }) => theme.color.base};
  height: 63px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 100;

  @media ${({ theme }) => theme.device.tablet} {
    height: 70px;
    font-size: 15px;
  }
`;
