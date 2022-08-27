import styled from "styled-components";

export const StyledDevOpsCategories = styled.section`
  background-color: ${({ theme }) => theme.color.base300};
  padding: 10px 0;

  .categoryWrapper {
    width: 87%;
    margin: 0 auto;
  }

  h2 {
    color: ${({ theme }) => theme.color.point};
    font-weight: 800;
    font-size: 16px;
    display: inline;
    padding: 8px 8px 8px 0;
  }

  .categoryList {
    background-color: ${({ theme }) => theme.color.base300};
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-wrap: wrap;
    line-height: 1.5;
    margin-top: 10px;

    button {
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.color.contrast700};
    }

    .current {
      background-color: ${({ theme }) => theme.color.point};
    }

    li {
      background-color: ${({ theme }) => theme.color.base};
      cursor: pointer;
      border: 1px solid ${({ theme }) => theme.color.lightGray};
      border-radius: 20px;
      padding: 1px 4px;
      margin-right: 8px;
    }

    .current,
    .current:hover {
      border: 1px solid ${({ theme }) => theme.color.point};
      background-color: ${({ theme }) => theme.color.point};

      button {
        color: ${({ theme }) => theme.color.base};
      }
    }

    li:hover {
      border: 1px solid ${({ theme }) => theme.color.point};
      button {
        color: ${({ theme }) => theme.color.point};
      }
    }
  }
`;
