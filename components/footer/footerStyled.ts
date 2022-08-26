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
  position: absolute;
  bottom: 0;
  z-index: 100;
`;
