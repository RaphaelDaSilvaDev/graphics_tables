import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus{
    outline: 0;
  }
  :bl{
    outline: 0;
    box-shadow: 0 0 0 0;
  }
  
  :root{
    font-size: 62.5%;
  }
  body{
    background-color: #f5f5f5;
    color: #292929;
  }
  body, input-security, textarea, button, td{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }
  h1, h2, h3, h4, h5,h6{
    font-family: 'Roboto', sans-serif;
    color: #292929;
  }
`;
