import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    html {
        background-color: #E6EFF1;
        font-size: 62.5%;
    }

    body {
        color: inherit;
  
    }
    
`;

export default GlobalStyle;
