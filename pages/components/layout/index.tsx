import Head from "next/head";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
