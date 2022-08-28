import styled from "styled-components";

export const StyledThemeButton = styled.button<{ currentTheme: string }>`
  background-color: ${({ theme }) => theme.color.contrast};
  border: none;
  padding: 11px;
  border-radius: 30px;
  display: flex;

  span {
    color: ${({ theme }) => theme.color.base};
  }

  div {
    margin-left: 10px;
    width: 15px;
    height: 15px;
    background-image: url(assets/svg/${({ currentTheme }) =>
      currentTheme === "Light" ? "moon" : "sun"}.svg);
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
