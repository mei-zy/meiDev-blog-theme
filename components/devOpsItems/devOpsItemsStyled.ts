import styled from "styled-components";

export const StyledDevOpsItems = styled.ul`
  .item {
    padding: 20px 5px;
    border-bottom: 1px solid ${({ theme }) => theme.color.base200};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.contrast};
  }

  a:hover {
    transform: scale(1.05);
  }

  .date {
    color: ${({ theme }) => theme.color.point};
    font-size: 12px;
  }

  .title {
    margin: 7px 0;
    line-height: 1.3;
    font-size: 25px;
  }

  .content {
    line-height: 1.5;
    color: ${({ theme }) => theme.color.contrast700};
    display: -webkit-box;
    white-space: normal;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
