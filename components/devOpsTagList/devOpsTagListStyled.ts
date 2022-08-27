import styled from "styled-components";

export const StyledTagList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    background-color: ${({ theme }) => theme.color.point100};
    color: ${({ theme }) => theme.color.base};
    font-weight: 500;
    font-size: 12px;
    padding: 5px 8px;
    margin-right: 5px;
    margin-bottom: 8px;
    border: 0;
    border-radius: 10px;
  }
`;
