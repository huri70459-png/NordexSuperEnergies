/// <reference types="react/canary" />
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ViewTransition } from "react";

import { SkipLink } from "@/components/layout/SkipLink";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { site } from "@/content/site";

import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  // Pages set full titles (already brand-qualified); no template to avoid doubling.
  title: site.defaultMeta.title,
  description: site.defaultMeta.description,
  metadataBase: new URL(site.siteUrl),
  openGraph: {
    type: "website",
    locale: "en",
    siteName: site.brandName,
    title: site.defaultMeta.title,
    description: site.defaultMeta.description,
    images: site.defaultMeta.ogImage
      ? [{ url: site.defaultMeta.ogImage }]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: site.defaultMeta.title,
    description: site.defaultMeta.description,
    images: site.defaultMeta.ogImage ? [site.defaultMeta.ogImage] : undefined,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body
        className={`${geistSans.className} flex min-h-dvh flex-col bg-background font-sans text-foreground antialiased`}
      >
        <SkipLink />
        <SiteHeader />
        <main id="main" className="flex-1">
          {/* View Transitions PE: no-op when unsupported; reduced-motion kills CSS */}
          <ViewTransition>{children}</ViewTransition>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
