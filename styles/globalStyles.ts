import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    

    body{
      color:${({ theme }) => theme.color.contrast};
      background:${({ theme }) => theme.color.base};
      font-family: 'Nanum Gothic', sans-serif;
    }


    body::selection, a::selection{
      background-color:${({ theme }) => theme.color.point};
      color:${({ theme }) => theme.color.base};
    }

    main{
      width:90%;
      margin:0 auto;
    }


    .fontGradient{
      background: ${({ theme }) => theme.color.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

`;

export default GlobalStyles;
