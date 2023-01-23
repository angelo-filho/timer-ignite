import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    color: ${(props) => props.theme.colors.textColor}
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.mainGreen};
  }

  body {
    background-color: ${(props) => props.theme.colors.bgColor};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: normal;
    font-size: 1rem;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;
