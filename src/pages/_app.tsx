import { AppProps } from "next/app"
import Head from "next/head"
import { ThemeProvider } from "styled-components"
import { darkTheme } from "../styles/theme"

import GlobalStyles from "styles/global"

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <title>Rafael Carrenho</title>
        <meta name="theme-color" content="#06092B" />
        <link rel="shortcut icon" href="img/favicon.svg" type="image/svg" />
        <meta
          name="description"
          content="Rafael Carrenho desenvolvedor Front End - Site portfólio"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
