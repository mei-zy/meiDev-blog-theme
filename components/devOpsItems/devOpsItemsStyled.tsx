import styled from "styled-components";

export const StyledDevOpsItems = styled.ul`
  li {
    padding: 20px 5px;
    border-bottom: 1px solid ${({ theme }) => theme.color.base200};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.contrast};
  }

  .date {
    color: ${({ theme }) => theme.color.point};
    font-size: 9px;
  }

  .title {
    margin: 5px 0;
    font-size: 25px;
  }

  .tagList {
    display: flex;

    li {
      background-color: ${({ theme }) => theme.color.point100};
      color: ${({ theme }) => theme.color.base};
      font-weight: 500;
      font-size: 10px;
      padding: 4px 8px;
      margin-right: 10px;
      border: 0;
      border-radius: 10px;
    }
  }

  .content {
    line-height: 1.5;
    color: ${({ theme }) => theme.color.contrast700};
    display: -webkit-box;
    white-space: normal;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-top: 10px;
  }
`;
