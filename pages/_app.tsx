import type { AppProps } from "next/app";
import Layout from "./components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/no-children-prop
  return <Layout children={<Component {...pageProps} />}></Layout>;
}

export default MyApp;
