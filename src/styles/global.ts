import { createGlobalStyle, css } from "styled-components"

const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body,
  #__next {
    height: 100%;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }

  a {
    text-decoration: none;
    color: ${theme.colors.textSecondary};
    transition: 0.3s ease;
    &:hover {
      color: ${theme.colors.text};
    }
  }

  body,
  input,
  textarea,
  button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`}
`

export default GlobalStyles
