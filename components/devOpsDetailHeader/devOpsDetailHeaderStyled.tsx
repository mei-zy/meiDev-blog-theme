import styled from "styled-components";

export const StyledHeader = styled.section`
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
  padding-bottom: 15px;

  .date {
    color: ${({ theme }) => theme.color.point};
  }

  .title {
    width: 90%;
    font-size: 25px;
    line-height: 1.2;
    margin: 14px auto;
  }

  ul {
    justify-content: center;
  }
`;
