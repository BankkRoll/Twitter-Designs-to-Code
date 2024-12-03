// src/config/seo.ts
import { DefaultSeoProps } from "next-seo";

export const defaultSEO: DefaultSeoProps = {
  title: "Bankk - Tweet to Code",
  description:
    "Showcases recreations of random designs found on Twitter, turned into code. Easily install via shadcn/ui cli.",
  canonical: "https://tweet-to-code.vercel.app",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://tweet-to-code.vercel.app",
    siteName: "Tweet to Code",
    images: [
      {
        url: "https://tweet-to-code.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "tweet-to-code",
      },
    ],
  },
  twitter: {
    handle: "@bankkroll_eth",
    site: "@bankkroll_eth",
    cardType: "summary_large_image",
  },
};

export const getSEO = (pageSEO?: DefaultSeoProps): DefaultSeoProps => {
  return {
    ...defaultSEO,
    ...pageSEO,
    openGraph: {
      ...defaultSEO.openGraph,
      ...pageSEO?.openGraph,
    },
    twitter: {
      ...defaultSEO.twitter,
      ...pageSEO?.twitter,
    },
  };
};
