import { createGlobalStyle, css } from "styled-components"
import { Poppins } from "@next/font/google"

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
})

const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Scroll custom design */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.textSecondary};
    border-radius: 20px;
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
    overflow: overlay;
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
    font-family: ${poppins.style.fontFamily}, sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`}
`

export default GlobalStyles
