import styled from "styled-components";

export const StyledHeader = styled.section`
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
  padding-bottom: 15px;

  .date {
    color: ${({ theme }) => theme.color.point};
  }

  .title {
    font-size: 28px;
    line-height: 1.2;
    margin: 14px 0px;
  }

  ul {
    justify-content: center;
  }
`;
