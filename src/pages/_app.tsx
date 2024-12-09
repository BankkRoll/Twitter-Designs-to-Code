import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { Footer } from "@/components/layout/footer";
import Head from "next/head";
import { Header } from "@/components/layout/header";
import React from "react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { defaultSEO } from "@/lib/seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultSeo {...defaultSEO} />

      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
        <Toaster />
        <Analytics />
      </ThemeProvider>
    </React.Fragment>
  );
}
