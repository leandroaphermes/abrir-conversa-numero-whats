import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background: #075e54;
    font-family: 'Roboto', sans-serif;
    color: #fafafa;
  }

  a {
    
    text-decoration: none;
    color: #fff;
  }
`;
