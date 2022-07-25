import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    body,a{
      color:${({ theme }) => theme.color.contrast};
      text-decoration:none;
    }


    .fontGradient{
      background: ${({ theme }) => theme.color.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

`;

export default GlobalStyles;
