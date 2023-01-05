import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  html {
    color: ${(props) => props.theme.colors.textColor}
  }

  body {
    background-color: ${(props) => props.theme.colors.bgColor};
  }

  button {
    border: none;
    cursor: pointer;
  }
`;
