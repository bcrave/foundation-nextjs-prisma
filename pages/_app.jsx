import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";

import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {Component.authPage ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ChakraProvider>
  );
}

export default MyApp;