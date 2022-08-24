import styled from "styled-components";

export const StyledLanguageStyled = styled.ul`
  display: inline-flex;
  padding: 6px 10px;
  background: ${({ theme }) => theme.color.base100};
  border: 1px solid ${({ theme }) => theme.color.contrast400};
  border-radius: 30px;
  color: ${({ theme }) => theme.color.contrast700};

  li {
    margin-right: 7px;
    font-weight: 500;
  }

  li:last-of-type {
    margin-right: 0px;
  }
`;
