import { AppProps } from "next/app"
import Head from "next/head"
import { ThemeProvider } from "styled-components"
import { darkTheme } from "../styles/theme"

import GlobalStyles from "styles/global"

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="theme-color" content="#06092B" />
        <link rel="shortcut icon" href="img/favicon.svg" type="image/svg" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
