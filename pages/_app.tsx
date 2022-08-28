import type { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@styles/theme";
import GlobalStyles from "@styles/globalStyles";
import Header from "@components/header/header";
import Footer from "@components/footer/footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("Light");

  const themeProps = {
    theme,
    setTheme,
  };

  return (
    <>
      <ThemeProvider theme={theme === "Light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header {...themeProps} />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
