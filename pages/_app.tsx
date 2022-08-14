import type { AppProps } from "next/app";
import GlobalStyles from "../styles/globalStyles";
import Seo from "../components/seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
