import React from "react";
import Head from "next/head";
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../components/Header";

const muiTheme = createMuiTheme();
const theme = responsiveFontSizes(muiTheme);

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DeFi Handbook</title>
        <meta property="name" content="DeFi Handbook" />
        <meta
          property="description"
          content="DeFi Handbook make easier for you to dive into DeFi protocols"
        />
        <meta property="image" content="/images/og_image.png" />
        <meta property="og:title" content="DeFi Handbook" />
        <meta
          property="og:description"
          content="DeFi Handbook make easier for you to dive into DeFi protocols"
        />
        <meta property="og:url" content="https://easydai.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og_image.png" />
        <meta property="og:image:width" content="764" />
        <meta property="og:image:height" content="400" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
