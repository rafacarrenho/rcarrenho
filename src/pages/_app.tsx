import { AppProps } from "next/app"
import Head from "next/head"
import { ThemeProvider } from "styled-components"
import { darkTheme } from "../styles/theme"
import { GoogleAnalytics } from "nextjs-google-analytics"

import GlobalStyles from "styles/global"

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <title>Rafael Carrenho</title>
        <meta name="theme-color" content="#171917" />
        <link rel="shortcut icon" href="img/favicon.svg" type="image/svg" />
        <meta
          name="description"
          content="Rafael Carrenho desenvolvedor Front End - Site portfólio"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
      <GoogleAnalytics trackPageViews gaMeasurementId="G-F2GWX5SRHR" />
    </ThemeProvider>
  )
}

export default App
