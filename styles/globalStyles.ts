import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');

    body {
        font-family: 'Noto Sans KR', sans-serif;
        background-color:${({ theme }) => theme.color.base};
        color:${({ theme }) => theme.color.contrast};
        font-weight:400;
        font-size:14px;
        word-spacing:-1px;

        @media ${({ theme }) => theme.device.tablet} {
            font-size:15px;
        }

        @media ${({ theme }) => theme.device.laptop} {
            font-size:16px;
        }

  
    }
    
    main{
        width:87%;
        margin: 20px auto 0 auto;
        padding-bottom:60px;
    }

    .point{
        color:${({ theme }) => theme.color.point};
    }

    .weight-bold{
        font-weight:700;
    }

    .weight-black{
        font-weight:900;
    }

`;

export default GlobalStyles;
