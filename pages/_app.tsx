import Layout from "../components/layout";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import "@fontsource/lobster";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        // use custom font in MantineProvider
        fontFamily: "@fontsource/lobster",
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}
