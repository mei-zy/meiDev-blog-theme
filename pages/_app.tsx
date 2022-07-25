import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyles";
import { darkTheme, lightTheme } from "../styles/theme";
import Header from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header theme={theme} setTheme={setTheme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
